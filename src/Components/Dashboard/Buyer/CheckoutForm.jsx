import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { use, useEffect, useState } from 'react';
import axiosinstance from '../../Sharedpages/axiosinstance';
import { AuthContext } from '../../../Context/AuthContext';

const CheckoutForm = ({closeModal,price,coins}) => {
  const {user}=use(AuthContext)
   const stripe = useStripe();
  const elements = useElements();
const [cerror,setcError]=useState(null)
const [processing,setProcessing]=useState(false)
const[clientSecret,setClientSecret]=useState('')

useEffect(()=>{

  const getClientSecret=async()=>{

    const {data}=await axiosinstance.post('/create-payment-intent',{
      coins,
      price

    })
    setClientSecret(data?.clientSecret)
  }
getClientSecret()
},[axiosinstance,coins,price])



  const handleSubmit = async (event) => {
    // Block native form submission.
    setProcessing(true)
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setcError(error.message)
      setProcessing(false)
      return
     
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setcError(null)
    }
    const result=await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
           card,
           billing_details:{
            name:user?.name,
            email:user?.email
           }
      }
    })
    if(result?.error)
    {
      setcError(result?.error.message)
      return
    }
    if(result?.paymentIntent?.status==="succeeded")

  };

  return (
    <form onSubmit={handleSubmit} className='my-3'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       {cerror&&<p className='text-red-500 mb-3'>{cerror}</p>}
      <div className='flex justify-between items-center'>
      <button type="submit" disabled={!stripe||processing} className='bg-accent text-white btn px-10'>
       {processing?<span className="loading loading-spinner text-success"></span>:`Pay ${price}$`}  
      </button>
      <button onClick={closeModal} className='btn bg-red-500 text-white px-10'>
          Close
      </button>
      </div>
    </form>
  );
};

export default CheckoutForm;