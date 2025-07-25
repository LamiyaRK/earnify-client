import React from 'react';
import { CiClock1 } from 'react-icons/ci';
import { FaClock } from 'react-icons/fa';

const MyTasksTable = ({index,da}) => {
    const {Buyer_name,Buyer_email,status,task_title,payable_amount}=da
    return (
         <tr >
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            
            <div>
              <div className="font-bold">{task_title}</div>
              
            </div>
          </div>
        </td>
        <td>
         {Buyer_name}
          <br />
          <span className="badge badge-ghost badge-sm">{Buyer_email}</span>
        </td>
        <td>${payable_amount}</td>
        <td >
     <p className='badge badge-ghost font-semibold flex items-center badge-outline'><FaClock /> {status}</p> 
        </td>
      </tr>
    );
};

export default MyTasksTable;