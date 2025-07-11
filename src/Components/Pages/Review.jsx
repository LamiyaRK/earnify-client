import React from 'react';
import customer from '/Assets/customer.jpg';
import ReviewSlider from './ReviewSlider';

const Review = () => {
    

    return (
      <div className='py-20'>
      <h1 className='text-3xl font-semibold text-center'>What Our Users Say</h1>
      <p className='text-center opacity-70 font-medium mt-5 mb-20'>Hear from the people who’ve experienced Earnify — real stories, real success, and how micro-tasking changed their lives.</p>
        <div className='flex max-w-7xl justify-center items-center gap-5 mx-auto'> 
          <div className='w-[50%]'>
            <img src={customer} className='w-[500px] h-[500px] object-cover object-center rounded-lgc:\Users\MSI\Downloads\photo-1521737711867-e3b97375f902.jpg'></img>
          </div>
         
          <ReviewSlider ></ReviewSlider> 
          
  
          
        </div>
        </div>
    );
};

export default Review;