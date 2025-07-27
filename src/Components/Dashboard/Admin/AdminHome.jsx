import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import Spinner from '../../Router/Spinner';
import { FaClock, FaCoins, FaDollarSign, FaUser, FaUsersRectangle } from "react-icons/fa6";
import AdminHomeTable from './AdminHomeTable';
import { ToastContainer } from 'react-toastify';
import useAxiosSecure from '../../Sharedpages/useAxiosSecure';
const AdminHome = () => {
   const [loading, setLoading] = useState(true);
   const axiosSecure = useAxiosSecure()
    const {user}=use(AuthContext)
    const [buyer,setBuyer]=useState(0)
     const [worker,setWorker]=useState(0)
     const [tcoins,setTcoins]=useState(0)
     const [tdollars,setTdollars]=useState(0)
     const[data,setData]=useState([])
     
   useEffect(() => {
  axiosSecure.get(`/users3?role=Buyer`)
    .then(res => setBuyer(res.data.length))
    .catch(err => console.log(err));

  axiosSecure.get(`/users3?role=Worker`)
    .then(res => setWorker(res.data.length))
    .catch(err => console.log(err));

  axiosSecure.get(`/totalcoins`)
    .then(res => setTcoins(res.data))
    .catch(err => console.log(err));
 
axiosSecure.get('/totaldollars')
.then(res=>setTdollars(res.data))
.catch(err=>console.log(err))

axiosSecure.get('/withdraw')
.then(res=>{setData(res.data)
setLoading(false) })
.catch(err=>{console.log(err)
  setLoading(false); 
})
}, []);

   if(loading) return <Spinner/>
    return (
        <div className='w-full'>
             <div className='grid md:grid-cols-2 2xl:grid-cols-4 gap-5 w-5/6 mx-auto my-20 '>
                                    <div className='flex p-5 items-center shadow-lg rounded-lg  justify-between gap-5'>
                                        <div className='p-5 bg-blue-500 text-white rounded-lg '><FaUsersRectangle size={30}/></div>
                                        <div className='flex-col flex flex-end'>
                                        <p className='text-lg font-semibold '>Total buyers:</p>
                                       <p className='text-2xl font-bold flex justify-end '>{buyer}</p>
                                       </div>
                                    </div>
                                    <div className='flex p-5 items-center shadow-lg rounded-lg  justify-between gap-5'>
                                        <div className='p-5 bg-pink-500 text-white rounded-lg '><FaUser size={30} /></div>
                                        <div className='flex-col flex flex-end'>
                                        <p className='text-lg font-semibold '>Total workers:</p>
                                       <p className='text-2xl font-bold flex justify-end '>{worker}</p>
                                       </div>
                                    </div>
                                    <div className='flex p-5 items-center shadow-lg rounded-lg  justify-between gap-5'>
                                        <div className='p-5 bg-amber-400 text-white rounded-lg '><FaCoins size={30} /></div>
                                        <div className='flex-col flex flex-end'>
                                        <p className='text-lg font-semibold '>Total coins:</p>
                                       <p className='text-2xl font-bold flex justify-end '>{tcoins}</p>
                                       </div>
                                    </div>
                                    <div className='flex p-5 items-center shadow-lg rounded-lg  justify-between gap-5'>
                                        <div className='p-5 bg-green-500 text-white rounded-lg '><FaDollarSign size={30} /></div>
                                        <div className='flex-col flex flex-end'>
                                        <p className='text-lg font-semibold '>Total payment:</p>
                                       <p className='text-2xl font-bold flex justify-end '>{tdollars}</p>
                                       </div>
                                    </div>
                                    </div>
                                    {data.length>0?
                                    
                                 
                                     <div className="overflow-x-auto">
                                     <h1 className='text-3xl font-semibold text-center pb-20'>Withdraw Requestes</h1>
        <table className="table w-5/6 mx-auto bg-white p-10 rounded-lg border border-gray-100">
          {/* head */}
          <thead>
            <tr className='text-xl'>
              <th className="text-accent ">Sl. no.</th>
              <th className="text-accent w-1/5">Account No</th>
              <th className="text-accent ">Worker Name</th>
              <th className="text-accent ">Withdrawal Amount</th>
               <th className="text-accent "> status</th>
              <th className="text-accent ">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((da, index) => (
               <AdminHomeTable da={da} index={index} setData={setData}></AdminHomeTable>
              ))
            }
          </tbody>
        </table>
      </div>:
      <div>
        <p className='w-5/6 mx-auto text-3xl text-center text-accent font-semibold'>No Withdraw Requestes Available</p>
      </div>}
            <ToastContainer></ToastContainer>                       
        </div>
    );
};

export default AdminHome;