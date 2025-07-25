import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import bannerbg from '/Assets/bg-slider.jpg';
import { AuthContext } from '../../Context/AuthContext';
import coin from '/Assets/coin.png'
import Swal from 'sweetalert2';
import user1 from '/Assets/user2.jpg'
const Nav = () => {
  const {user,logout}=use(AuthContext)
  const handlelogout=()=>{
    logout().then((res) => {
         
          Swal.fire({
            icon: 'success',
            title: 'Logout Successful!',
            
            confirmButtonColor: '#0ea5e9',
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Logout Failed!',
            text: err.message || 'Something went wrong',
            confirmButtonColor: '#ef4444',
          });
        });
    
  }
    const list=<>
    
        <p><NavLink to='/login'><button className='btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black'>Login</button></NavLink></p>
        <p><NavLink to='/register'><button className='btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black'>Register</button></NavLink></p>
        <p><NavLink><button className='btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black' >Join as Developer</button></NavLink></p>
        
    </>
    const list1=<>
     <p><NavLink to='/dashboard'><button className='text-lg font-semibold border-b-2'>Dashboard</button></NavLink></p>
      <p><NavLink><button className='btn btn-neutral py-6 px-6 rounded-full' >Join as Developer</button></NavLink></p>
     <div className='flex items-center gap-1'>
      <div className="avatar ">
                    <div className="mask mask-circle h-13 w-13">
                      <img
                       src={coin}
                        alt="Avatar Tailwind CSS Component" className='h-full w-full object-cover' />
                        
                    </div>
                  </div>
                  <p className='font-medium text-3xl'>{user?.coin||10}</p>
     </div> 
     <div className="avatar ">
                    <div className="mask mask-circle h-10 w-10">
                      <img
                       src={user?.photo||user1}
                        alt="Avatar Tailwind CSS Component" className='h-full w-full object-cover' />
                        
                    </div>
                  </div>
                 
    <p><button className='btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black' onClick={handlelogout}>Log out</button></p>
      
    </>
    return (
        <div  style={{ backgroundImage: `url(${bannerbg})` }}
        className="navbar bg-black/10 shadow-sm py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      
      </ul>
    </div>
 <Link to='/'>  <div className="flex items-center gap-2 text-2xl font-bold">
  <img src="/logo.png" alt="Earnify Logo" className="w-10 h-10" />
  <span>Earnify</span> 
</div></Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    {user?list1:list}
  </div>
</div>
    );
};

export default Nav;