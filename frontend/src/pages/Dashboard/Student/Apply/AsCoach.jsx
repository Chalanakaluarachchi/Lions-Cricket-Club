import React, { useEffect, useState } from 'react';
import { useUser } from '../../../../hooks/useUser';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';
import { FiBriefcase, FiMail, FiSend, FiUser } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners'; // Import a spinner component

const AsCoach = () => {
  const { currentUser } = useUser();
  const [submittedData, setSubmittedData] = useState({});
  const [loading, setLoading] = useState(true);
  const axiosFetch = useAxiosFetch();
  
  useEffect(() => {
    if (currentUser?.email) {
      axiosFetch.get(`/applied-coach/${currentUser.email}`).then((res) => {
        setSubmittedData(res.data);
        setLoading(false);
      }).catch((err) => {
        console.error(err);
        setLoading(false);
      });
    }
  }, [axiosFetch, currentUser?.email]);

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const experience = e.target.experience.value;

    const data = {
      name,
      email,
      experience,
    };

    axiosFetch.post('/as-coach', data).then((res) => {
      console.log(res.data);
      alert("Success");
    }).catch((err) => {
      console.error(err);
      alert("Error submitting the form");
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!submittedData?.name && (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="w-full">
              <label className="text-gray-700" htmlFor="name">Name</label>
              <div className="flex items-center mt-1">
                <FiUser className="text-gray-500" />
                <input
                  defaultValue={currentUser?.name}
                  disabled
                  readOnly
                  className="ml-2 w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="text-gray-700" htmlFor="email">Email</label>
              <div className="flex items-center mt-1">
                <FiMail className="text-gray-500" />
                <input
                  defaultValue={currentUser?.email}
                  disabled
                  readOnly
                  className="ml-2 w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="text-gray-700" htmlFor="experience">Experience</label>
              <div className="flex items-center mt-1">
                <FiBriefcase className="text-gray-500" />
                <textarea
                  placeholder="Tell us about your experience..."
                  className="ml-2 w-full border border-gray-300 focus:border-blue-500 outline-none resize-none rounded-lg p-2 placeholder-gray-400"
                  id="experience"
                  name="experience"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                <FiSend className="mr-2" />
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AsCoach;
