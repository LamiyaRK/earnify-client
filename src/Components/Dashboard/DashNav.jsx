import React, { useEffect, useRef, useState, useContext } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import coin from '/Assets/coin.png';
import user1 from '/Assets/user2.jpg';
import { Link } from 'react-router';
import axiosinstance from '../Sharedpages/axiosinstance';
import { AuthContext } from '../../Context/AuthContext';

const DashNav = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        let merged = [];

        if (user?.role === 'Worker') {
          // Get submission notifications
          const submissionRes = await axiosinstance.get(`/submission?email=${user.email}`);
          const filteredSubmissions = submissionRes.data.filter(
            notif => notif.status !== 'pending'
          );

          // Get withdrawal notifications
          const withdrawRes = await axiosinstance.get(`/withdraw?email=${user.email}`);
          const filteredWithdrawals = withdrawRes.data.filter(
            notif => notif.status === 'approved'
          );

          merged = [...filteredSubmissions, ...filteredWithdrawals];
        } else if (user?.role === 'Buyer') {
          const buyerRes = await axiosinstance.get(`/submission?Buyer_mail=${user.email}`);
          merged = buyerRes.data.filter(notif => notif.status === 'pending');
        }

        setNotifications(merged);
      } catch (err) {
        console.log('Notification error:', err);
      }
    };

    if (user?.email && user?.role) {
      fetchNotifications();
    }
  }, [user?.email, user?.role]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar bg-base-100 shadow-sm relative">
      <div className="flex-1">
        <Link to="/">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img src="/logo.png" alt="Earnify Logo" className="w-10 h-10" />
            <span>Earnify</span>
          </div>
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        {/* Coin and role */}
        <div className="flex flex-col items-center justify-center">
          <div className="avatar flex items-center gap-1">
            <div className="mask mask-circle h-10 w-10">
              <img src={coin} alt="Coin" className="h-full w-full object-cover" />
            </div>
            <p className="font-medium text-2xl">{user?.coin}</p>
          </div>
          <div className="font-medium">{user?.role || 'Worker'}</div>
        </div>

        {/* User avatar */}
        <div className="flex flex-col items-center justify-center">
          <div className="avatar">
            <div className="mask mask-circle h-10 w-10">
              <img src={user?.photo || user1} alt="User" />
            </div>
          </div>
          <div className="font-medium">{user?.name}</div>
        </div>

        {/* Notification */}
        <div className="relative" ref={notificationRef}>
          <button onClick={() => setIsOpen(prev => !prev)}>
            <IoIosNotifications size={34} color="#34A853" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg border z-50 border-l-8 border-l-accent">
              <div className="p-3 border-b font-semibold text-accent text-center">
                Notifications
              </div>

              {notifications.length === 0 ? (
                <div className="p-4 text-gray-500">No notifications found.</div>
              ) : (
                <ul className="divide-y">
                  {notifications.map((notif, index) => (
                    <li key={index}>
                      {user?.role === 'Buyer' && notif.status === 'pending' && (
                        <p className="text-gray-700 p-3 text-sm hover:bg-gray-100 transition">
                          <span className="text-accent font-semibold">{notif.worker_name}</span>{' '}
                          has submitted task{' '}
                          <span className="font-semibold">{notif.task_title}</span>
                        </p>
                      )}

                      {user?.role === 'Worker' && notif.status === 'rejected' && (
                        <p className="text-gray-700 p-3 text-sm hover:bg-gray-100 transition">
                          Your submission for{' '}
                          <span className="text-accent font-semibold">{notif.task_title}</span> was
                          rejected by <span className="font-semibold">{notif.Buyer_name}</span>
                        </p>
                      )}

                      {user?.role === 'Worker' && notif.status === 'approve' && (
                        <p className="text-gray-700 p-3 text-sm hover:bg-gray-100 transition">
                          You have earned{' '}
                          <span className="font-semibold">{notif.payable_amount}</span> from{' '}
                          <span className="font-semibold text-accent">{notif.Buyer_name}</span> for
                          completing <span className="font-semibold">{notif.task_title}</span>
                        </p>
                      )}

                      {user?.role === 'Worker' && notif.withdrawal_amount && notif.status === 'approved' && (
                        <p className="text-gray-700 p-3 text-sm hover:bg-gray-100 transition">
                          Your withdrawal of ${' '}
                          <span className="font-semibold">{notif.withdrawal_amount}</span> has been
                          approved by admin
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashNav;
