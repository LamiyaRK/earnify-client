import React from 'react';
import side1 from '/Assets/side1.jpg'
import { IoCheckmarkSharp } from "react-icons/io5";
const PostJob = () => {
    return (
        <div className='flex justify-center items-center gap-10 py-20'>
        <div className='relative w-[40%]'>
            <div className='h-[500px] w-[600px]'>
                <img src={side1} className='h-full w-full object-cover object-center rounded-lg'></img>
            </div>
            <div className='flex flex-col gap-3 w-[250px] justify-center border bg-white border-gray-300 rounded-lg absolute -bottom-20 left-120'>
            <h1 className='bg-accent p-3 text-center text-white  rounded-t-lg'>Applicants list</h1>
                <div className='mx-auto bg-white'>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </div>
         <div  className='mx-auto'>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </div>
         <div  className='mx-auto pb-5'>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </div>
            </div>
            </div>
            <div className='max-w-xl'>
                <h1 className='text-4xl font-semibold mb-6'>Get applications from the world best talents.</h1>
                <p className='max-w-xl opacity-70 mb-6'>Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on 
                companies worldwide.</p>
                <ul className='space-y-2'> 
                    <li className='flex items-center gap-2'><IoCheckmarkSharp  size={24}/>Bring to the table win-win survival</li>
                    <li className='flex items-center gap-2'><IoCheckmarkSharp  size={24}/>Capitalize on low hanging fruit to identify</li>
                     <li className='flex items-center gap-2'><IoCheckmarkSharp  size={24}/>But I must explain to you how all this</li>
                </ul>
                <button className='bg-accent btn text-white py-6 px-12 rounded-lg mt-6 hover:border-accent hover:bg-white hover:text-accent'>Post a job</button>
            </div>
        </div>
    );
};

export default PostJob;