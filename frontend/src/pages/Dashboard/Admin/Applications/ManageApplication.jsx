import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';
import { FcDeleteDatabase } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageClasses = () => {
    const navigate = useNavigate();
    const axiosFetch = useAxiosFetch();
    const axiosSecure = useAxiosSecure();
    const [applications, setApplications] = useState([]); 
    const [page, setPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const itemPerPage = 5;
    const totalPage = Math.ceil(applications.length / itemPerPage);
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(-1);

    useEffect(() => {
        axiosFetch.get('/application-manage')
            .then(res => setApplications(res.data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        let lastIndex = page * itemPerPage;
        const firstIndex = lastIndex - itemPerPage;
        if (lastIndex > applications.length) {
            lastIndex = applications.length;
        }
        const currentData = applications.slice(firstIndex, lastIndex);
        setPaginatedData(currentData);
    }, [page, applications]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff0000', // Set the primary color
            },
            secondary: {
                main: '#00ff00', // Set the secondary color
            },
        },
    });

    const handleApprove = (id) => {
        axiosSecure.put(`/change-status/${id}`, { status: 'approved' })
            .then(res => {
                setApplications(applications.map(application => 
                    application._id === id ? { ...application, status: 'approved' } : application
                ));
                toast.success('Application approved successfully');
            })
            .catch(err => console.log(err));
    };

    const handleReject = (id) => {
        Swal.fire({
            title: 'Reason for reject',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reject',
            showLoaderOnConfirm: true,
            preConfirm: async (text) => {
                try {
                    const res = await axiosSecure.put(`/change-status/${id}`, { status: 'rejected', reason: text });
                    if (res.data.modifiedCount > 0) {
                        setApplications(applications.map(application => 
                            application._id === id ? { ...application, status: 'rejected' } : application
                        ));
                        toast.error('Application rejected');
                    }
                    return res.data;
                } catch (error) {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    );
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Changed..!',
                    'You reject this Message.',
                    'success'
                );
            }
        });
    };

    const handleChange = (event, value) => setPage(value);

    const handleExperienceClick = (index, experience) => {
        setSelectedExperienceIndex(index === selectedExperienceIndex ? -1 : index);
        toast.info(experience);
    };

    return (
        <div>
            <h1 className='text-4xl text-secondary font-bold text-center my-10'>Manage <span className='text-black'>Applications</span></h1>

            <div className="">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">User Email</th>
                                            <th scope="col" className="px-6 py-4">User Name</th>
                                            <th scope="col" className="px-6 py-4">Experience</th>
                                            
                                            <th scope="col" className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            applications.length === 0 
                                                ? <tr><td colSpan='6' className='text-center text-2xl font-bold'>No Applications Found</td></tr> 
                                                : paginatedData.map((application, index) => (
                                                    <tr
                                                        key={application._id}
                                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                        <td className="whitespace-nowrap px-6 py-4">{application.applierEmail}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{application.applierName}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            <button onClick={() => handleExperienceClick(index, application.experience)}>View Experience</button>
                                                        </td>
                                                       
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() => handleApprove(application._id)}
                                                                    className='text-[12px] cursor-auto disabled:bg-green-700 bg-green-500 py-1 rounded-md px-2 text-white'>
                                                                    Approve
                                                                </button>
                                                                <button
                                                                    disabled={application.status === 'rejected' || application.status === 'approved'}
                                                                    onClick={() => handleReject(application._id)}
                                                                    className='cursor-pointer disabled:bg-red-800 bg-red-600 py-1 rounded-md px-2 text-white'>
                                                                    Deny
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ThemeProvider theme={theme}>
                    <div className="w-full h-full flex justify-center items-center my-10">
                        <Pagination onChange={handleChange} count={totalPage} color="primary" />
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default ManageClasses;
