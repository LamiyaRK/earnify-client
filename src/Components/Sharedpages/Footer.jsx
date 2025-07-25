import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
     const listworker=<div className='space-y-2'>
        <NavLink to='/dashboard/workerhome'><p className=' mb-2 font-medium'>Home</p></NavLink>
         <NavLink to='/dashboard/tasklist'><p className='mb-2  font-medium'>Task List</p></NavLink>
          <NavLink to='/dashboard/mysubmissions'><p className=' mb-2 font-medium'>My Submissions</p></NavLink>
           <NavLink to='/dashboard/withdraw'><p className=' mb-2 font-medium'>Withdrawals</p></NavLink>
    </div>
    const listbuyer=<div className='space-y-2'>
        <NavLink to='/dashboard/buyerhome'><p className='mb-2  font-medium'>Home</p></NavLink>
         <NavLink to='/dashboard/addtask'><p className='mb-2  font-medium'>Add New Task</p></NavLink>
          <NavLink to='/dashboard/mytasks'><p className=' mb-2 font-medium'>My Tasks</p></NavLink>
           <NavLink to='/dashboard/purchasecoin'><p className='mb-2  font-medium'>Purchase Coin</p></NavLink>
           <NavLink to='/dashboard/paymenthistory'><p className=' mb-2 font-medium'>Payment History</p></NavLink>
    </div>
    return (
        <div className='bg-[#555555] text-white py-20 rounded-t-4xl '>
        <div className='flex flex-wrap flex-col md:flex-row justify-between items-start w-5/6 mx-auto pb-4'>
        <div className='flex flex-col'>
         <Link to='/'>  <div className="flex items-center gap-2 text-4xl font-semibold">
  <img src="/logo.png" alt="Earnify Logo" className="w-12 h-12" />
  <span >Earnify</span> 
</div></Link>   
<p className='text-xl font-semibold mt-2'>Call Us</p>
<p className='text-xl font-semibold mb-2'>+8801994063900</p>
<p className=' font-medium mb-2' >Dhaka,Bangladesh</p>
<p className=' font-medium'>lamiyarahmankhan01@gmail.com</p>
</div>
<div className='space-y-2'>
    <p className='text-xl font-medium'>For Workers</p>
    {listworker}
</div>
<div className='space-y-2'>
    <p className='text-xl font-medium'>For Buyers</p>
    {listbuyer}
</div>
<div className='space-y-2'>
 <p className='text-xl font-medium'>About Us</p>
<p className=' font-medium'>About Us</p>
<p className=' font-medium'>Contact Us</p>
<p className=' font-medium'>Terms</p>
<p className=' font-medium'>FAQ</p>
</div>
        </div>
        <footer className="footer w-5/6 mx-auto sm:footer-horizontal bg-[#555555] pt-4 border-t  border-t-white items-center ">
  <aside className="grid-flow-col items-center">
    Earnify
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
</div>
    );
};

export default Footer;