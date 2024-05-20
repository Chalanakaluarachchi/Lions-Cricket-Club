import React, { useRef, useState } from 'react';
import { useUser } from '../../../hooks/useUser';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaCloudUploadAlt, FaUser, FaEnvelope, FaUsers, FaDollarSign, FaYoutube, FaAlignLeft } from 'react-icons/fa';

const KEY = import.meta.env.VITE_IMG_TOKEN;

const AddClass = () => {
    const API_URL = `https://api.imgbb.com/1/upload?key=${KEY}&name=`;
    const axiosSecure = useAxiosSecure();
    const { currentUser, isLoading } = useUser();
    const [image, setImage] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newData = Object.fromEntries(formData);
        formData.append('file', image);

        toast.promise(
            fetch(API_URL, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success === true) {
                        newData.image = data.data.display_url;
                        newData.coachName = currentUser.name;
                        newData.coachEmail = currentUser.email;
                        newData.status = 'pending';
                        newData.submitted = new Date(); 
                        newData.totalEnrolled = 0;

                        axiosSecure.post('/new-class', newData)
                            .then(res => {
                                console.log(res.data);
                            });
                    }
                }),
            {
                pending: 'Submitting your class...',
                success: 'Submitted successfully!',
                error: 'Failed to submit your class',
            }
        );
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-4xl font-bold mb-8">Add Your Class</h1>
            <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            <FaAlignLeft className="inline mr-2 text-secondary" /> Class Name
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            required
                            placeholder="Your Class Name"
                            name="name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                            <FaCloudUploadAlt className="inline mr-2 text-secondary" /> Thumbnail Photo
                        </label>
                        <input
                            type="file"
                            required
                            onChange={handleImageChange}
                            name="image"
                            className="block mt-2 w-full border border-secondary shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 file:border-0 file:bg-secondary file:text-white file:mr-4 file:py-3 file:px-4"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="coachName">
                            <FaUser className="inline mr-2 text-secondary" /> Coach Name
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
                            <FaEnvelope className="inline mr-2 text-secondary" /> Coach Email
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="availableSeats">
                            <FaUsers className="inline mr-2 text-secondary" /> Available Seats
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            required
                            placeholder="How many seats are available?"
                            name="availableSeats"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            <FaDollarSign className="inline mr-2 text-secondary" /> Price
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            required
                            placeholder="How much does it cost?"
                            name="price"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="videoLink">
                        <FaYoutube className="inline mr-2 text-secondary" /> Youtube Link
                    </label>
                    <p className="text-sm mb-2 text-secondary">Only youtube videos are supported</p>
                    <input
                        className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        required
                        placeholder="Your course intro video link"
                        name="videoLink"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                        <FaAlignLeft className="inline mr-2 text-secondary" /> Description About Your Course
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Description about your course"
                        name="description"
                        rows="4"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        className="bg-secondary hover:bg-red-400 duration-200 text-white font-bold py-2 px-4 rounded w-full"
                        type="submit"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
