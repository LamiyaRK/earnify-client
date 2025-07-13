import React from 'react';
import DashNav from './DashNav';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div >
            <DashNav></DashNav>
           
            <div className='flex '>
             <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;