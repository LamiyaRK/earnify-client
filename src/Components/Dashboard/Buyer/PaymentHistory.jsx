import React, { use, useEffect, useState } from 'react';
import axiosinstance from '../../Sharedpages/axiosinstance';
import { AuthContext } from '../../../Context/AuthContext';
import PayCard from './PayCard';

const PaymentHistory = () => {
    const {user}=use(AuthContext)
    const [data,setData]=useState([])
    useEffect(()=>{
        axiosinstance.get(`/orders?email=${user?.email}`)
        .then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[user?.email])
    return (
        <div className='w-full bg-secondary'>
        <h1 className='text-3xl font-semibold text-center  py-20'>Payment History</h1>
        <div className="overflow-x-auto ">
  <table className="table w-5/6 mx-auto  bg-white p-10 rounded-lg">
    {/* head */}
    <thead className='text-accent'>
      <tr>
        <th>Sl. no</th>
        <th>Payment ID</th>
        <th>Coins Bought</th>
        <th>Amount(USD)</th>
         <th>Time</th>
      </tr>
    </thead>
    <tbody>
     {
                data.map((da,index)=><PayCard key={da._id} da={da} index={index}></PayCard>)
            }
     
    
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;