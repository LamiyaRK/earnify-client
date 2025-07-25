import React, { useEffect, useState } from 'react';
import axiosinstance from '../../Sharedpages/axiosinstance';
import ManageUsersTable from './ManageUsersTable';

const ManageUsers = () => {
  const [data, setData] = useState([]);

  const refetch = () => {
    axiosinstance.get('/users')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
      });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="w-full bg-secondary pb-20">
      <h1 className="text-3xl font-semibold text-center py-20">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-5/6 mx-auto bg-white p-10 rounded-lg">
          {/* head */}
          <thead>
            <tr>
              <th className="text-accent ">Sl. no.</th>
              <th className="text-accent w-1/5">User Info</th>
              <th className="text-accent ">Role</th>
              <th className="text-accent ">Coin</th>
              <th className="text-accent ">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((da, index) => (
                <ManageUsersTable
                  key={da._id}
                  da={da}
                  index={index}
                  refetch={refetch}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
