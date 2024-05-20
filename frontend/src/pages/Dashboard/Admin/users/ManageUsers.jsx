import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';
import { GrEdit, GrTrash } from 'react-icons/gr';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const ManageUsers = () => {
    const navigate = useNavigate();
    const axiosFetch = useAxiosFetch();
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosFetch.get('/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-user/${id}`)
                    .then(res => {
                        console.log(res.data);
                        // Update users state after successful deletion
                        setUsers(users.filter(user => user._id !== id));
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                        );
                    })
                    .catch(err => console.log(err));
            }
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-sm">Photo</th>
                            <th className="py-3 px-4 font-semibold text-sm">Name</th>
                            <th className="py-3 px-4 font-semibold text-sm">Role</th>
                            <th className="py-3 px-4 font-semibold text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4"><img src={user.photoUrl} alt="User" className="w-10 h-10 rounded-full" /></td>
                                <td className="py-3 px-4">{user.name}</td>
                                <td className="py-3 px-4">{user.role}</td>
                                <td className="py-3 px-4">
                                    <button onClick={() => navigate(`/dashboard/update-user/${user._id}`)} className="text-green-600 hover:text-green-900 mr-2">
                                        <GrEdit />
                                    </button>
                                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900">
                                        <GrTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
