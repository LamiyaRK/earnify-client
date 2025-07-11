import React, { use } from 'react';
import { NavLink } from 'react-router';
import bannerbg from '/Assets/bg-slider.jpg';
import { AuthContext } from '../../Context/AuthContext';
const Nav = () => {
  const {user}=use(AuthContext)
  
    const list=<>
    
        <p><NavLink to='/login'><button className='btn btn-neutral btn-outline py-6 px-6 rounded-full'>Login/Register</button></NavLink></p>
        <p><NavLink><button className='btn btn-neutral py-6 px-6 rounded-full' >Join as Developer</button></NavLink></p>
        
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
    <div className="flex items-center gap-2 text-2xl font-bold">
  <img src="/logo.png" alt="Earnify Logo" className="w-10 h-10" />
  <span>Earnify</span>
</div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    {list}
  </div>
</div>
    );
};

export default Nav;