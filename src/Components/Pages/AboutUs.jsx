import React from 'react';
import Timeline from './Timeline';

const AboutUs = () => {
     const timelineData = [
  {
    index: 1,
    year: "2022",
    title: "The Idea Was Born",
    description:
      "While exploring global freelancing trends, we noticed a gap in accessible platforms for micro-tasking. That’s when the concept for our platform—where anyone could earn by completing simple tasks—was born.",
    image: "/assets/about1.webp",
  },
  {
    index: 2,
    year: "2023",
    title: "Laying the Groundwork",
    description:
      "We began development with a strong focus on user roles, coin-based payment logic, and fair earning policies. Technologies like React, Firebase, MongoDB, and Node.js formed our core tech stack.",
    image: "/assets/about2.webp",
  },
  {
    index: 3,
    year: "2024",
    title: "Shaping the Experience",
    description:
      "We added advanced features like role-based dashboards, secure Stripe payments, a notification system, and a polished UX inspired by leading micro-task platforms. Our community began to grow rapidly.",
    image: "/assets/about3.webp",
  },
  {
    index: 4,
    year: "2025",
    title: "Going Public",
    description:
      "With a powerful set of features, real-time notifications, and a rewarding experience for both Workers and Buyers, our platform officially launched. But this is just the beginning.",
    image: "/assets/about4.webp",
  },
];

    return (
        <div className='w-5/6  mx-auto relative inset-0 py-10'>
       <h1>About Us</h1>
         <div className='flex lg:flex-row flex-col-reverse justify-between mb-[120px] inset-0 lg:h-[1000px] text-neutral'>
         <div className='lg:w-[40%] text-lg space-y-6'>
         <div className='space-y-6'>
            <h2 className='text-xl mb-2 text-accent font-semibold'> — About Earnify</h2>
            <h1 className='text-4xl  text-neutral mb-10'>Empowering Micro-Workers, One Task at a Time</h1>
           
           
          <p className='text-3xl'> Welcome to Earnify — your trusted hub for micro-tasking and fair digital earning. We connect task creators with enthusiastic workers ready to take on simple yet impactful jobs.</p> 
          
           
<p className='opactiy-80'>We’re a team of tech-savvy problem solvers and freelancers who believe everyone deserves a chance to earn online—regardless of background or location. Our platform ensures that each micro-task is easy to understand, secure, and rewarding.</p>

<p>Our mission: Make earning online easy, transparent, and accessible to all.</p>
        </div>
        </div>
        <div className='w-[300px] sm:w-[600px]  relative inset-0  h-[600px] sm:h-[1000px] mx-auto'>
        <div className='flex justify-end'>
            <img src='/assets/aboutpat.webp' className='h-[250px] w-[200px] sm:h-[400px] sm:w-[300px] object-center object-cover   '></img>
        </div>
         <div className='absolute top-25 lg:top-50 shadow-2xl'>
          <img src='/assets/aboutban.webp' className='h-[400px] sm:h-[700px] w-[250px] sm:w-[500px] object-center object-cover shadow-2xl shadow-black z-10'></img>
          </div>
        </div>
          </div>
       <p className='font-semibold text-xl text-center mb-4 text-accent '>Timeline</p>
       <h1 className='text-4xl  text-neutral mb-10 text-center'>Our History</h1>
           
        <div >
           {
            timelineData.map(data=><Timeline data={data}></Timeline>)
           }
        </div>
        </div>
    );
};

export default AboutUs;