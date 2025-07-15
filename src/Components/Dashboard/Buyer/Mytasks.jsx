import React, { use, useEffect, useState } from 'react';
import {  } from 'react-router';
import axiosinstance from '../../Sharedpages/axiosinstance';
import { AuthContext } from '../../../Context/AuthContext';
import MyTaskTable from './MyTaskTable';

const Mytasks = () => {
    const {user}=use(AuthContext)
    const [data,setData]=useState([]);
    useEffect(()=>{
           axiosinstance.get(`/tasks?email=${user?.email}`)
           .then(res=>{
            setData(res.data)
           }).catch(err=>{
            console.log(err)
           })
    },[user?.email])
 
    return (
        <div className='w-full bg-secondary '>
         <h1 className='text-3xl font-semibold text-center  py-20'>My Tasks</h1>
            <div className="overflow-x-auto">
  <table className="table w-5/6 mx-auto  bg-white p-10 rounded-lg">
    {/* head */}
    <thead className=' '>
      <tr>
        <th className='text-accent'>
        Sl. no.
        </th>
        <th className='text-accent'>Task</th>
        <th className='text-accent'>Workers & Payment</th>
        <th className='text-accent'>Deadline</th>
        <th className='text-accent'>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
        data.map((da,index)=><MyTaskTable da={da} key={index} index={index} data={data} setData={setData}></MyTaskTable>)
     }
    </tbody>
    
   
  </table>
</div>
        </div>
    );
};

export default Mytasks;