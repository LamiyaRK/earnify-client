import React, { useEffect, useState } from 'react';

import TaskCard from './TaskCard';
import useAxiosSecure from '../../Sharedpages/useAxiosSecure';

const TaskList = () => {
     const axiosSecure = useAxiosSecure()
    const [data,setData]=useState([])
    useEffect(()=>{
        axiosSecure.get('/tasks2')
        .then(res=>{ 
         
            setData(res.data)     

        }).then(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className='bg-secondary py-20 w-full'>
         <h1 className='text-3xl font-semibold text-center '>Available Tasks</h1>
         <p className='  text-center py-5 font-semibold opacity-70' > Browse and apply for tasks that match your skills</p>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-10 py-5  '>
            {
                data.map(da=><TaskCard key={da._id} da={da} ></TaskCard>)
            }
        </div>
        
        </div>
    );
};

export default TaskList;