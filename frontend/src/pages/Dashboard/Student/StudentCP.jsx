import React from 'react';
import { useUser } from '../../../hooks/useUser';
import welcome from '../../../assets/dashboard/urban-welcome.svg';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import moment from 'moment';

Chart.register(...registerables);

const StudentCP = () => {
  const { currentUser } = useUser();
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl landscape:max-w-full landscape:flex landscape:flex-col landscape:items-center">
        <div className="flex justify-center items-center mb-4">
          <img
            onContextMenu={(e) => e.preventDefault()}
            className="h-[200px] w-auto"
            src={welcome}
            alt="Welcome"
          />
        </div>
        <h1 className="text-4xl capitalize font-bold text-center mb-2">
          Hi, <span className="text-blue-500 italic">{currentUser?.name}</span> welcome to your dashboard
        </h1>
        <p className="text-center text-base mb-6">
          Hey Dear, this is a simple dashboard home. Our developer is working on updating the Dashboard.
        </p>
        <div className="text-center mb-4">
          <h2 className="font-bold">You can jump to any page you want from here:</h2>
          <div className="flex flex-wrap items-center justify-center my-4 gap-3">
            <Link
              to="/dashboard/enrolled-class"
              className="border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2"
            >
              My Enroll
            </Link>
            <Link
              to="/dashboard/my-selected"
              className="border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2"
            >
              My Selected
            </Link>
            <Link
              to="/dashboard/my-payments"
              className="border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2"
            >
              Payment History
            </Link>
            <Link
              to="/dashboard/apply-coach"
              className="border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2"
            >
              Join as a Coach
            </Link>
          </div>
        </div>
        <div className="text-center mb-6">
          <h2 className="font-bold text-lg">Current Local Time</h2>
          <p>{currentTime}</p>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-lg text-center mb-4">Performance Chart</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default StudentCP;
