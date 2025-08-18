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

  const guestLinks = (
    <ul className="flex flex-col lg:flex-row gap-4 list-none p-0 m-0">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/terms">Terms</NavLink></li>
      <li><NavLink to="/faq">FAQs</NavLink></li>
      <li>
        <NavLink to="/login">
          <button className="btn btn-neutral w-full lg:w-auto">Login/Register</button>
        </NavLink>
      </li>
    </ul>
  );

  const dashboardLink = () => {
    if (!user) return null;
    const routes = {
      Worker: '/dashboard/workerhome',
      Buyer: '/dashboard/buyerhome',
      Admin: '/dashboard/adminhome',
    };
    return (
      <NavLink to={routes[user.role]}>
        <button className="text-lg font-semibold">Dashboard</button>
      </NavLink>
    );
  };

  const userSection = (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <div className="avatar">
          <div className="mask mask-circle h-10 w-10">
            <img src={coin} alt="Coin" className="object-cover" />
          </div>
        </div>
        <p className="font-medium text-xl">{user?.coin || 10}</p>
      </div>
      <div className="avatar">
        <div className="mask mask-circle h-10 w-10">
          <img src={user?.photo || user1} alt="User" className="object-cover" />
        </div>
      </div>
    </div>
  );

  const commonLinks = (
    <ul className="flex flex-col lg:flex-row gap-4 list-none p-0 m-0 items-center">
      <li><NavLink to="/about" className="text-lg font-semibold">About</NavLink></li>
      <li><NavLink to="/contact" className="text-lg font-semibold">Contact</NavLink></li>
      <li><NavLink to="/terms" className="text-lg font-semibold">Terms</NavLink></li>
      <li><NavLink to="/faq" className="text-lg font-semibold">FAQs</NavLink></li>
    </ul>
  );

  return (
    <div
      style={{ backgroundImage: `url(${bannerbg})` }}
      className="bg-black/10 py-4 sticky top-0 z-50"
    >
      <div className="navbar w-5/6 mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <img src="/logo.png" alt="Earnify Logo" className="w-10 h-10" />
              <span>Earnify</span>
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex items-center gap-6">
          {user && dashboardLink()}
          {user && commonLinks}
        </div>

        {/* Desktop Right Section */}
        <div className="navbar-end hidden lg:flex items-center gap-4">
          {user && userSection}
          {user ? (
            <button
              className="btn btn-neutral py-2 px-4 rounded-full hover:bg-transparent hover:text-black"
              onClick={handlelogout}
            >
              Logout
            </button>
          ) : (
            guestLinks
          )}
        </div>

        {/* Mobile Hamburger */}
       <div className="dropdown lg:hidden navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </div>

  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content right-0 z-[100] mt-8 w-64  p-4 shadow bg-base-100 rounded-box  list-none"
  >
    {user ? (
      <>
       
        <li className="w-full flex items-center gap-3">
          <div className="flex items-center gap-1">
           
            <p className="font-medium text-xl">{user?.coin || 10}</p>
          </div>
          <div className="avatar">
            <div className="mask mask-circle h-10 w-10">
              <img src={user?.photo || user1} alt="User" className="object-cover" />
            </div>
          </div>
        </li>
        {/* Common Links */}
         <li className="w-full">{dashboardLink()}</li>
        <li><NavLink to="/about" className="text-lg font-semibold w-full">About</NavLink></li>
        <li><NavLink to="/contact" className="text-lg font-semibold w-full">Contact</NavLink></li>
        <li><NavLink to="/terms" className="text-lg font-semibold w-full">Terms</NavLink></li>
        <li><NavLink to="/faq" className="text-lg font-semibold w-full">FAQs</NavLink></li>
        <li>
          <button onClick={handlelogout} className="text-lg font-semibold text-red-600 w-full">
            Logout
          </button>
        </li>
      </>
    ) : (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/terms">Terms</NavLink></li>
        <li><NavLink to="/faq">FAQs</NavLink></li>
        <li>
          <NavLink to="/login">
            <button className="btn btn-neutral w-full">Login/Register</button>
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/LamiyaRK/earnify-client" target="_blank" rel="noreferrer">
            Join as Developer
          </a>
        </li>
      </>
    )}
  </ul>
</div>

      </div>
    </div>
  );
};

export default Nav;
