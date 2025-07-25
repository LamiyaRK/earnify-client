import React from 'react';
import DashNav from './DashNav';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Sharedpages/Footer';

const Dashboard = () => {
    return (
        <div className='h-full min-h-screen'>
            <DashNav></DashNav>
           
            <div className='flex '>
             <Sidebar></Sidebar>
             <div className='w-full'>
             <div className='flex-grow'>
                <Outlet></Outlet>
                </div>
                <Footer></Footer>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Dashboard;