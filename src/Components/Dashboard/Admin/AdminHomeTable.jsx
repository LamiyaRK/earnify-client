import React, { useEffect } from 'react';
import { FaClock } from 'react-icons/fa6';
import axiosinstance from '../../Sharedpages/axiosinstance';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AdminHomeTable = ({da,index,setData}) => {
    const {worker_name,
withdrawal_amount,
account_number,
status,
_id,
worker_email,
withdrawal_coin
}=da


const handleStatus = () => {
  axiosinstance.patch(`/withdraw?id=${_id}`)
    .then((res) => {
      
      axiosinstance
        .patch(`/users`, { email: worker_email, addcoin: -withdrawal_coin })
        .then((res1) => {
         Swal.fire({
  title: "Successfully Approved!",
  icon: "success",
  draggable: true
});
           setData(prevData => prevData.filter(item => item._id !== _id));
        })
        .catch((err) => {
         Swal.fire({
  title: "Not Approved!",
  icon: "error",
  draggable: true
});
          console.error("Coin update error:", err);
        });
    })
    .catch((err) => {
      toast.error("Payment not approved");
      console.error("Withdraw status update error:", err);
    });
};


    return (
        <>
      <tr>
        <th>{index + 1}</th>
        <td>{account_number}</td>
        <td>{worker_name}</td>
        <td>{withdrawal_amount}</td>
         <td className='flex items-center badge badge-ghost mt-4 gap-1 '><FaClock/>{status}</td>
        <td>
          <button onClick={handleStatus} className="btn btn-success btn-sm">
            Approve
          </button>
         
       
        </td>
      </tr>

    
    </>
    );
};

export default AdminHomeTable;