import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useUser } from '../../../hooks/useUser';
import { Fade, Slide } from "react-awesome-reveal";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaUsers, FaChair, FaDollarSign, FaCheckCircle, FaEdit, FaEye } from 'react-icons/fa';

const ApprovedClass = () => {
    const [classes, setClasses] = useState([]);
    const { currentUser, isLoading } = useUser();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!currentUser?.email) return;

        axiosSecure.get(`/classes/${currentUser.email}`)
            .then(res => setClasses(res.data))
            .catch(err => console.log(err));
    }, [currentUser, axiosSecure]);

    const handleFeedback = (id) => {
        const theClass = classes.find(cls => cls._id === id);
        if (theClass.reason) {
            Swal.fire(
                'Reason For Rejected',
                theClass.reason,
                'info'
            );
        } else {
            Swal.fire(
                'Wow Looks Good',
                'Your class is approved',
                'success'
            );
        }
    };

    const approvedClasses = classes.filter(cls => cls.status === 'approved');

    return (
        <div className="container mx-auto px-4">
            <div className="my-9">
                <h1 className='text-4xl font-bold text-center'>My <span className='text-secondary'>Approved Classes</span></h1>
                <div className="text-center mt-4">
                    <Fade duration={100} className='text-base text-center' cascade>
                        Here you can see the classes approved by you and their status
                    </Fade>
                </div>

                <div className="mt-6">
                    {approvedClasses.length === 0 ? (
                        <div className='text-center text-2xl font-bold mt-10'>No approved classes yet</div>
                    ) : (
                        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {approvedClasses.map((cls, index) => (
                                <Slide key={index} duration={1000} className='hover:ring ring-secondary duration-200 focus:ring rounded-lg'>
                                    <div className="bg-white flex flex-col rounded-lg shadow p-4">
                                        <img className='max-h-[200px] w-full object-cover rounded-lg mb-4' src={cls.image} alt={cls.name} />
                                        <h1 className='text-xl font-bold text-secondary mb-2'>{cls.name}</h1>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center">
                                                <FaUsers className='text-secondary mr-2' />
                                                <span className='text-secondary'>
                                                    <span className='text-black'>Total Students:</span> {cls.totalEnrolled || 0}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaChair className='text-secondary mr-2' />
                                                <span className='text-secondary'>
                                                    <span className='text-black'>Total Seats:</span> {cls.availableSeats}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaDollarSign className='text-secondary mr-2' />
                                                <span className='text-secondary'>
                                                    <span className='text-black'>Price:</span> {cls.price} <span className='text-black'>$</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaCheckCircle className='text-green-500 mr-2' />
                                                <span className='text-secondary'>
                                                    <span className='text-black'>Status:</span> <span className='font-bold text-green-500'>{cls.status}</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaEye className='text-secondary mr-2' />
                                                <span className='text-secondary'>
                                                    <span className='text-black'>Submitted:</span> {cls.submitted ? moment(cls.submitted).format('MMMM Do YYYY') : 'No Data'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex flex-col gap-2">
                                           
                                            <button className='flex items-center justify-center px-4 py-2 bg-secondary font-bold text-white w-full rounded-lg' onClick={() => navigate(`/dashboard/update/${cls._id}`)}>
                                                Update <FaEdit className='ml-2' />
                                            </button>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApprovedClass;
