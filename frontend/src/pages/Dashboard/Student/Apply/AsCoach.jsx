import React from 'react';
import { useUser } from '../../../../hooks/useUser';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaUser, FaEnvelope, FaAlignLeft } from 'react-icons/fa';

const API_URL = 'http://localhost:3000//application'; // Define your API URL here

const AsCoach = () => {
  const axiosSecure = useAxiosSecure();
  const { currentUser, isLoading } = useUser();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData);
    newData.applierName = currentUser.name;
    newData.applierEmail = currentUser.email;
    newData.submitted = new Date();

    toast.promise(
      axiosSecure.post(API_URL, newData)
        .then((res) => {
          console.log(res.data);
          toast.success('Submitted successfully!');
        })
        .catch((err) => {
          console.error(err);
          toast.error('Failed to submit your application');
        }),
      {
        pending: 'Submitting your application...',
        success: 'Submitted successfully!',
        error: 'Failed to submit your application',
      }
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold mb-8">Apply Coach</h1>
      <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="coachName">
              <FaUser className="inline mr-2 text-secondary" /> Your Name
            </label>
            <input
              className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={currentUser?.name}
              readOnly
              disabled
              name="coachName"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="coachEmail">
              <FaEnvelope className="inline mr-2 text-secondary" /> Your Email
            </label>
            <input
              className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              value={currentUser?.email}
              readOnly
              disabled
              name="coachEmail"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
            <FaAlignLeft className="inline mr-2 text-secondary" /> About Your Experience
          </label>
          <textarea
            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="About Your Experience"
            name="experience"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-secondary hover:bg-red-400 duration-200 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default AsCoach;
