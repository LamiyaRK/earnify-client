import React from 'react';
import { TfiEmail, TfiHeadphoneAlt } from "react-icons/tfi";
import { FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <div className='w-5/6  mx-auto relative inset-0 py-10'>
            <p  className='text-center text-accent font-bold text-2xl'>Contact</p>
            <h1 className='text-center text-4xl ' >Stay In Touch With Earnify </h1>
             <div className='relative mt-[80px] flex flex-wrap  justify-center gap-5 text-center'>
                <div className='text-white relative h-[200px] w-[300px] border-2 flex flex-col bg-accent items-center  '>
               
                      <div className="avatar avatar-placeholder absolute -top-10 ">
  <div className="bg-neutral text-white-content w-24 rounded-full">
    <span className="text-3xl"><TfiHeadphoneAlt /></span>
  </div>
</div>            

 <div className='relative pt-[70px]'>
    <p className='text-2xl font-bold mb-2'>Call Us:</p>
                    <p className='opacity-80 font-semibold'>+8801994063900</p>
</div>
                    
                </div>
                 <div className='text-white relative h-[200px] w-[300px] border-2 flex flex-col items-center bg-accent'>
               
                      <div className="avatar avatar-placeholder absolute -top-10 ">
  <div className="bg-neutral text-white-content w-24 rounded-full">
    <span className="text-3xl"><TfiEmail /></span>
  </div>
</div>            

 <div className='relative pt-[70px]'>
    <p className='text-2xl font-bold mb-2'>E-mail:</p>
                    <p className='opacity-80 font-semibold'>lamiyarahmankhan01@gmail.com</p>
</div>
                    
                </div>
                 <div className='text-white relative h-[200px] w-[300px] border-2 flex flex-col items-center bg-accent'>
               
                      <div className="avatar avatar-placeholder absolute -top-10 ">
  <div className="bg-neutral text-white-content w-24 rounded-full">
    <span className="text-3xl"><FaMapMarkerAlt /></span>
  </div>
</div>            

 <div className='relative pt-[70px]'>
    <p className='text-2xl font-bold mb-2'>Address:</p>
                    <p className='opacity-80 font-semibold'>Dhaka,Bangladesh</p>
</div>
                    
                </div>
             </div>
             <div className='grid md:grid-cols-2 gap-5 mt-[80px]'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.337287993974!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sjp!4v1751745724791!5m2!1sen!2sjp"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
             
            <fieldset className="fieldset  bg-base-100 space-y-1 border-base-300 rounded-box max-w-3xl border p-4">
  
  <label className="label">Name</label>
  <input type="text" className="input bg-white w-full" placeholder="Your Name*" required/>
    <label className="label">Email</label>
  <input type="email" className="input bg-white w-full" placeholder="Your Email*"  required/>

    <label className="label">Subject</label>
  <input type="text" className="input bg-white w-full "  placeholder="Subject" />
    <label className="label">Message</label> 
<textarea className="textarea bg-white w-full h-[100px] " placeholder="Your Message"></textarea>
  <button className="btn btn-accent text-white mt-4 ">Submit Now</button>
</fieldset>
</div>
        </div>
    );
};

export default Contact;