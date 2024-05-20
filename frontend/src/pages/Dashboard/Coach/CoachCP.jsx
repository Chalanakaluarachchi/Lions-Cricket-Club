import React, { useEffect, useState } from 'react';
import { useUser } from '../../../hooks/useUser';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import welcome from '../../../assets/dashboard/urban-welcome.svg';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CoachCp.css';
import moment from 'moment';

const CoachCp = () => {
    const { currentUser } = useUser();
    const axiosSecure = useAxiosSecure();
    const [localTime, setLocalTime] = useState(new Date());
    const [classData, setClassData] = useState({
        totalStudents: 0,
        numberOfClasses: 0,
        monthlyIncome: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setLocalTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!currentUser?.email) return;

        axiosSecure.get(`/classes/${currentUser.email}`)
            .then(res => {
                const classes = res.data;
                const totalStudents = classes.reduce((sum, cls) => sum + (cls.totalEnrolled || 0), 0);
                const numberOfClasses = classes.length;
                const currentMonth = moment().month();
                const monthlyIncome = classes.reduce((sum, cls) => {
                    const submittedMonth = moment(cls.submitted).month();
                    if (submittedMonth === currentMonth) {
                        return sum + cls.price;
                    }
                    return sum;
                }, 0);
                setClassData({ totalStudents, numberOfClasses, monthlyIncome });
            })
            .catch(err => console.log(err));
    }, [currentUser, axiosSecure]);

    return (
        <div className='coach-dashboard h-screen flex justify-center items-center relative'>
            <div className="coach-dashboard__container p-6 rounded-lg shadow-lg bg-white">
                <div className="flex justify-center items-center mb-4">
                    <img 
                        onContextMenu={e => e.preventDefault()} 
                        className='coach-dashboard__welcome-img h-[200px] w-auto' 
                        src={welcome} 
                        alt="Welcome" 
                    />
                </div>
                <h1 className='coach-dashboard__header text-4xl capitalize font-bold font-serif'>
                    Hi, <span className='text-secondary italic'>{currentUser?.name}</span> welcome to your dashboard
                </h1>
                <p className='coach-dashboard__text text-center text-lg font-light mt-4'>
                    Hello Coach, welcome to your dashboard. Our developers are constantly updating and improving your dashboard experience.
                </p>
                <div className="text-center mt-6">
                    <h1 className='coach-dashboard__subtitle font-bold mb-4 text-2xl'>
                        Navigate to any section you need:
                    </h1>
                    <div className="coach-dashboard__links flex items-center justify-center gap-3">
                        <div className="coach-dashboard__link-item border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-4 py-2 text-lg font-medium">
                            <Link to='/dashboard/my-classes'>
                                <i className="fas fa-chalkboard-teacher mr-2"></i> My Classes
                            </Link>
                        </div>
                        <div className="coach-dashboard__link-item border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-4 py-2 text-lg font-medium">
                            <Link to='/dashboard/add-class'>
                                <i className="fas fa-user-graduate mr-2"></i> Add  Classes
                            </Link>
                        </div>
                        <div className="coach-dashboard__link-item border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-4 py-2 text-lg font-medium">
                            <Link to='/dashboard/my-pending'>
                                <i className="fas fa-wallet mr-2"></i> Pending Classes
                            </Link>
                        </div>
                        <div className="coach-dashboard__link-item border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-4 py-2 text-lg font-medium">
                            <Link to='/dashboard/my-approved'>
                                <i className="fas fa-cogs mr-2"></i> Approved Classes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="coach-dashboard__info mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-green-500 text-white rounded-lg p-6">
                        <h2 className="text-2xl font-bold">Total Students Enrolled</h2>
                        <p className="text-lg">{classData.totalStudents}</p>
                    </div>
                    <div className="bg-purple-500 text-white rounded-lg p-6">
                        <h2 className="text-2xl font-bold">Number of Classes</h2>
                        <p className="text-lg">{classData.numberOfClasses}</p>
                    </div>
                    <div className="bg-yellow-500 text-white rounded-lg p-6">
                        <h2 className="text-2xl font-bold">Monthly Income</h2>
                        <p className="text-lg">${classData.monthlyIncome}</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 right-4 text-lg font-semibold text-gray-800">
                Local Time: {localTime.toLocaleTimeString()}
            </div>
        </div>
    );
};

export default CoachCp;
