import React, { useEffect, useState } from 'react';
import axiosinstance from '../../Sharedpages/axiosinstance';
import ManageTaskTable from './ManageTaskTable';

const MangaeTask = () => {
     const [data,setData]=useState([])
    useEffect(()=>{
        axiosinstance.get('/tasks')
        .then(res=>{ 
            setData(res.data)     

        }).then(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className='w-full bg-secondary pb-20'>
         <h1 className='text-3xl font-semibold text-center  py-20'>Manage Tasks</h1>
            <div className="overflow-x-auto">
  <table className="table w-5/6 mx-auto  bg-white p-10 rounded-lg">
    {/* head */}
    <thead className=' '>
      <tr>
        <th className='text-accent'>
        Sl. no.
        </th>
        <th className='text-accent'>Task</th>
        <th className='text-accent'>Buyer</th>
        <th className='text-accent'>Workers & Payment</th>
        <th className='text-accent'>Deadline</th>
        <th className='text-accent'>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
        data.map((da,index)=><ManageTaskTable da={da} key={index} index={index} data={data} setData={setData}></ManageTaskTable>)
     }
    </tbody>
    
   
  </table>
</div>
        </div>
    );
};

export default MangaeTask;