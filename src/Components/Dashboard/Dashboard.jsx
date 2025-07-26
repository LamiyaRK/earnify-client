import React, { use, useState } from 'react';
import DashNav from './DashNav';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Sharedpages/Footer';
import { AuthContext } from '../../Context/AuthContext';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const {navHeight}=use(AuthContext)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
  <div className="h-screen overflow-hidden">
    <div className="flex h-full">
      {/* Sidebar – fixed height, no scroll */}
      <div className="h-full">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Content – scrollable area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <DashNav toggleSidebar={toggleSidebar} />
        <div className="flex-1 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>

    <ToastContainer />
  </div>
);
};

export default Dashboard;
