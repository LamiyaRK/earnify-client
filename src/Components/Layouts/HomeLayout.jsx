import React from 'react';
import Nav from '../Sharedpages/Nav';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../Sharedpages/Footer';

const HomeLayout = () => {
    return (
        <div className='h-full flex flex-col '>
            <Nav></Nav>
            <div className='flex-grow'>
            <Outlet ></Outlet>
            </div>
           <ToastContainer></ToastContainer>
             <Footer></Footer>
        </div>
        
    );
};

export default HomeLayout;