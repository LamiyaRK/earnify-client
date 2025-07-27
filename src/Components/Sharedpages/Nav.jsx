import React from 'react';
import { Link, NavLink } from 'react-router';
import bannerbg from '/assets/bg-slider.jpg';
import { AuthContext } from '../../Context/AuthContext';
import coin from '/assets/coin.png';
import Swal from 'sweetalert2';
import user1 from '/assets/user2.jpg';

const Nav = () => {
  const { user, logout } = React.useContext(AuthContext);

  const handlelogout = () => {
    logout()
      .then(() => {
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
  };

  const list = (
    <>
      <p><NavLink to="/login"><button className="btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black">Login</button></NavLink></p>
      <p><NavLink to="/register"><button className="btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black">Register</button></NavLink></p>
      <p><a href='https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-LamiyaRK' target='_blank'><button className="btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black">Join as Developer</button></a></p>
    </>
  );

  const list1 = (
    <>
     
      <p><a href='https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-LamiyaRK' target='_blank'><button className="btn btn-neutral py-6 px-6 rounded-full">Join as Developer</button></a></p>
      <p><button className="btn btn-neutral py-6 px-6 rounded-full hover:bg-transparent hover:text-black" onClick={handlelogout}>Log out</button></p>
    </>
  );

  return (
    <div
      style={{ backgroundImage: `url(${bannerbg})` }}
      className="navbar bg-black/10 shadow-sm py-4"
    >
      {/* START */}
      <div className="navbar-start">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img src="/logo.png" alt="Earnify Logo" className="w-10 h-10" />
            <span>Earnify</span>
          </div>
        </Link>

        {/* Hamburger for small screens */}
        
      </div>

      {/* CENTER (empty or later use) */}
      <div className="navbar-center hidden lg:flex">
        {/* Optional: add nav links here */}
      </div>
         
      {/* END */}
      <div className="navbar-end gap-4">
        {/* Large Screen Full Nav */}
         {user?.role=='Worker'&&<p><NavLink to="/dashboard/workerhome"><button className="text-lg font-semibold border-b-2 hidden lg:flex">Dashboard</button></NavLink></p>}
          {user?.role=='Buyer'&&<p><NavLink to="/dashboard/buyerhome"><button className="text-lg font-semibold border-b-2 hidden lg:flex">Dashboard</button></NavLink></p>}
           {user?.role=='Admin'&&<p><NavLink to="/dashboard/adminhome"><button className="text-lg font-semibold border-b-2 hidden lg:flex">Dashboard</button></NavLink></p>}
         {user && (
          <div className="flex items-center gap-3">
            {/* Coin */}
            <div className="flex items-center gap-1">
              <div className="avatar">
                <div className="mask mask-circle h-15 w-15">
                  <img src={coin} alt="Coin" className="object-cover" />
                </div>
              </div>
              <p className="font-medium text-2xl">{user?.coin || 10}</p>
            </div>

            {/* Avatar */}
            <div className="avatar">
              <div className="mask mask-circle h-10 w-10">
                <img src={user?.photo || user1} alt="User" className="object-cover" />
              </div>
            </div>
          </div>
        )}
        <div className="hidden lg:flex gap-2">
          {user ? list1 : list}
        </div>

        {/* Coin & Avatar - always visible */}
       <div className="dropdown lg:hidden ">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 z-[100] mt-3 w-64 p-4 shadow bg-base-100 rounded-box space-y-2"
          >
            {user ? (
              <>
  <li>
    {user?.role === 'Worker' && (
      <NavLink to="/dashboard/workerhome">
        <button className="text-lg font-semibold border-b-2  lg:flex">Dashboard</button>
      </NavLink>
    )}
    {user?.role === 'Buyer' && (
      <NavLink to="/dashboard/buyerhome">
        <button className="text-lg font-semibold border-b-2  lg:flex">Dashboard</button>
      </NavLink>
    )}
    {user?.role === 'Admin' && (
      <NavLink to="/dashboard/adminhome">
        <button className="text-lg font-semibold border-b-2  lg:flex">Dashboard</button>
      </NavLink>
    )}
  </li>

  <li><a href='https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-LamiyaRK' target='_blank'>Join as Developer</a></li>

  <li>
    <button onClick={handlelogout} className="text-lg font-semibold text-red-600">Logout</button>
  </li>
</>

            ) : (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><a href='https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-LamiyaRK' target='_blank'>Join as Developer</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
