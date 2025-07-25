import React, { useContext, useEffect, useState } from 'react';
import axiosinstance from '../../Sharedpages/axiosinstance';
import { AuthContext } from '../../../Context/AuthContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HomeTable from './HomeTable';

const BuyerHome = () => {
  const { user } = useContext(AuthContext);
  const [workers, setWorkers] = useState(0);
  const [taskcount, setTaskcount] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [data,setData]=useState([])

  useEffect(() => {
    axiosinstance(`/total-required-workers?email=${user?.email}`)
      .then(res => {
        setWorkers(res.data.totalRequiredWorkers);
      })
      .catch(err => console.log(err));

    axiosinstance(`/tasks?email=${user?.email}`)
      .then(res => {
        setTaskcount(res.data.length);
      })
      .catch(err => console.log(err));

    axiosinstance(`/total-payment?email=${user?.email}`)
      .then(res => {
        setTotalPayment(res.data.totalPayment);
      })
      .catch(err => console.log(err));
      axiosinstance(`/submission?email=${user?.email}&status=pending`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [user?.email]);

  const cards = [
    {
      label: 'Total Workers',
      value: workers,
      color: '#4F46E5',
      tailwindColor: 'text-blue-500',
      max: 300
    },
    {
      label: 'Total Tasks',
      value: taskcount,
      color: '#059669',
      tailwindColor: 'text-green-600',
      max: 50
    },
    {
      label: 'Total Payment',
      value: totalPayment,
      color: '#D97706',
      tailwindColor: 'text-yellow-600',
      max: 200
    },
  ];

  return (
    <div className='w-full'>
    <div className="p-6 grid grid-cols-3 gap-6 w-5/6 mx-auto">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white shadow-md h-[150px] w-full rounded-xl px-6 py-4 flex items-center justify-between">
        <div>
          <p className={`text-2xl font-medium  ${card.tailwindColor}`}>{card.label}</p>
           <p className="text-4xl font-bold ">{card.label === 'Total Payment' ? `$${card.value}` : card.value}</p>
            </div>
          <div className="w-20 h-20">
            <CircularProgressbar
              value={card.value}
              maxValue={card.max}
              text={`${card.label === 'Total Payment' ? '$' : ''}${card.value}`}
              styles={buildStyles({
                textColor: card.color,
                pathColor: card.color,
                trailColor: '#E5E7EB',
              })}
            />
          </div>

         
        </div>
      ))}
    </div>
     <div className="overflow-x-auto">
        <table className="table w-5/6 mx-auto bg-white p-10 rounded-lg border border-gray-100">
          {/* head */}
          <thead>
            <tr className='text-xl'>
              <th className="text-accent ">Sl. no.</th>
              <th className="text-accent w-1/5">Worker Name</th>
              <th className="text-accent ">Task title</th>
              <th className="text-accent ">Payable amount</th>
              <th className="text-accent ">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((da, index) => (
               <HomeTable da={da} index={index}></HomeTable>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerHome;
