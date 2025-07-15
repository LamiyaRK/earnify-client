import React from 'react';
import { BiPurchaseTag } from 'react-icons/bi';
import { FaHistory, FaPen, FaUsers } from 'react-icons/fa';
import { IoBriefcaseOutline, IoHomeOutline } from 'react-icons/io5';
import { LuClipboardList, LuListRestart } from 'react-icons/lu';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
import { PiHandWithdraw } from 'react-icons/pi';
import { NavLink } from 'react-router';

const Sidebar = () => {
    const listworker=<>
        <NavLink to='/'><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70 '><IoHomeOutline size={24} />Home</p></NavLink>
         <NavLink><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><LuClipboardList size={24} />Task List</p></NavLink>
          <NavLink><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><LuListRestart size={24} />My Submissions</p></NavLink>
           <NavLink><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><PiHandWithdraw  size={24}/>Withdrawals</p></NavLink>
    </>
    const listbuyer=<>
        <NavLink to='/'><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><IoHomeOutline size={24}/>Home</p></NavLink>
         <NavLink to='/dashboard/addtask'><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><FaPen size={24}/>Add New Task</p></NavLink>
          <NavLink to='/dashboard/mytasks'><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><IoBriefcaseOutline size={24}/>My Tasks</p></NavLink>
           <NavLink to='/dashboard/purchasecoin'><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><BiPurchaseTag size={24}/>Purchase Coin</p></NavLink>
           <NavLink><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><MdOutlinePlaylistAddCheck size={24}/>Payment History</p></NavLink>
    </>
     const listadmin=<>
        <NavLink to='/'><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><IoHomeOutline size={24}/>Home</p></NavLink>
         <NavLink><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><FaUsers size={24}/>Manage Users</p></NavLink>
          <NavLink><p className='flex  items-end gap-2  hover:bg-secondary p-4 rounded-lg opacity-70'><IoBriefcaseOutline size={24}/>Manage Tasks</p></NavLink>
          
    </>
    return (
        <div className='w-1/3 max-w-sm bg-white shadow-2xl p-4'>
         {listworker}
          {listbuyer}
           {listadmin}
        </div>
    );
};

export default Sidebar;