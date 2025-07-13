import React, { use } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import coin from '/Assets/coin.png'
import { AuthContext } from '../../Context/AuthContext';
import user1 from '/Assets/user2.jpg'
const DashNav = () => {
    const {user}=use(AuthContext)
    console.log(user)
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <div className="flex items-center gap-2 text-2xl font-bold">
  <img src="/logo.png" alt="Earnify Logo" className="w-10 h-10" />
  <span>Earnify</span>
</div>
  </div>
  <div className="flex gap-5 items-center">
    <div className='flex flex-col items-center justify-center '>
     <div className="avatar flex items-center gap-1">
              <div className="mask mask-circle h-10 w-10">
                <img
                 src={coin}
                  alt="Avatar Tailwind CSS Component" className='h-full w-full object-cover' />
                  
              </div >
              <p className='font-medium text-2xl'>{user?.coin}</p>
            </div>
           
              <div className="font-medium ">{user?.role||"Worker"}</div>
            </div>
          
     <div className='flex flex-col items-center justify-center '>
     <div className="avatar ">
              <div className="mask mask-circle h-10 w-10">
                <img
                 src={user?.photo||user1}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
              <div className="font-medium ">{user?.name}</div>
            </div>
          
        
    
    <IoIosNotifications  size={34} color='#34A853'/>
  </div>
</div>
    );
};

export default DashNav;