import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import useAxiosFetch from '../../hooks/useAxiosFetch';

const Coaches = () => {
    const axiosInstance = useAxiosFetch();
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        axiosInstance.get('/coaches')
            .then(res => setCoaches(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='mt-12 dark:bg-gray-900 w-[80%] mx-auto'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-28">
                {
                    coaches.map(coach => (
                        <div key={coach._id} className="max-w-xs mx-auto">
                            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 rounded-lg py-5 h-full flex flex-col justify-between">
                                <div>
                                    <div className="photo-wrapper p-2">
                                        <img className="w-32 h-32 rounded-full mx-auto" src={coach.photoUrl} alt={coach.name} />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="text-center dark:text-white text-xl text-gray-900 font-semibold leading-8">{coach.name}</h3>
                                        <div className="text-center text-gray-400 text-sm font-semibold">
                                            <p><FontAwesomeIcon icon={faUser} className="mr-2" />Coach</p>
                                        </div>
                                        <table className="text-sm my-3 w-full">
                                            <tbody>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 dark:text-gray-300 font-semibold">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500" />
                                                        Address
                                                    </td>
                                                    <td className="px-2 py-2 text-gray-600 dark:text-gray-300">{coach.address}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 dark:text-gray-300 font-semibold">
                                                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-500" />
                                                        Phone
                                                    </td>
                                                    <td className={`px-2 py-2 ${coach.phone ? 'text-gray-600 dark:text-gray-300' : 'text-red-400'}`}>
                                                        {coach.phone ? coach.phone : 'Not Provided'}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 dark:text-gray-300 font-semibold">
                                                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />
                                                        Email
                                                    </td>
                                                    <td className="px-2 py-2 text-gray-600 dark:text-gray-300">{coach.email}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Coaches;
