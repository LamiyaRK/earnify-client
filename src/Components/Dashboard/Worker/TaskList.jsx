import React, { useEffect, useState } from 'react';
import axiosinstance from '../../Sharedpages/axiosinstance';
import TaskCard from './TaskCard';

const TaskList = () => {
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
        <div className='bg-secondary py-20 w-full'>
         <h1 className='text-3xl font-semibold text-center '>Available Tasks</h1>
         <p className='  text-center py-5 font-semibold opacity-70' > Browse and apply for tasks that match your skills</p>
        <div className='grid grid-cols-4 gap-5 px-10 py-5  '>
            {
                data.map(da=><TaskCard key={da._id} da={da} ></TaskCard>)
            }
        </div>
        
        </div>
    );
};

export default TaskList;