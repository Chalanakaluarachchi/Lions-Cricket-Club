import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail, AiOutlinePhone, AiOutlinePicture, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../components/Social/GoogleLogin';
import axios from 'axios';
import { AuthContext } from '../../ultilities/providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const { signUp, updateUser, setError } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch('password', "");

    useEffect(() => {
        document.documentElement.classList.add('fade-in');
        return () => document.documentElement.classList.remove('fade-in');
    }, []);

    const onSubmit = (data) => {
        setError("");
        signUp(data.email, data.password).then((result) => {
            const user = result.user;
            if (user) {
                return updateUser(data.name, data.photoUrl).then(() => {
                    const userImp = {
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                        role: 'user',
                        gender: data.gender,
                        address: data.address,
                        phone: data.phone,
                    };

                    if (user.email && user.displayName) {
                        return axios.post('http://localhost:3000/new-user', userImp).then(() => {
                            setError("");
                            navigate('/');
                            toast.success('Registration successful!');
                        }).catch((err) => {
                            setError(err.message);
                            toast.error('Registration failed.');
                        });
                    }
                }).catch((err) => {
                    setError(err.message);
                    toast.error('Failed to update user profile.');
                });
            }
        }).catch((err) => {
            setError(err.message);
            toast.error('Registration failed.');
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Please Register</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="mb-4 w-full">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineUser className="inline-block mr-2 mb-1 text-lg" />
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                {...register("name", { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                        </div>

                        <div className="mb-4 w-full">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineMail className="inline-block mr-2 mb-1 text-lg" />
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="mb-4 w-full">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineLock className="inline-block mr-2 mb-1 text-lg" />
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                {...register("password", { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>

                        <div className="mb-4 w-full">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineLock className="inline-block mr-2 mb-1 text-lg" />
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: value => value === password || "Passwords do not match"
                                })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="mb-4 w-full">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                <AiOutlinePhone className="inline-block mr-2 mb-1 text-lg" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                {...register('phone', { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
                        </div>

                        <div className="mb-4 w-full">
                            <label htmlFor="photoUrl" className="block text-gray-700 font-bold mb-2">
                                <AiOutlinePicture className="inline-block mr-2 mb-1 text-lg" />
                                Photo URL
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                {...register('photoUrl')}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                            <AiOutlineUser className="inline-block mr-2 mb-1 text-lg" />
                            Gender
                        </label>
                        <select
                            {...register('gender', { required: true })}
                            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">Gender is required</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            <HiOutlineLocationMarker className="inline-block mr-2 mb-1 text-lg" />
                            Address
                        </label>
                        <textarea
                            {...register('address', { required: true })}
                            className="w-full border resize-none border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            rows="3"
                            placeholder="Enter your address"
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-sm mt-1">Address is required</p>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-secondary hover:bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
                        >
                            Register
                        </button>
                    </div>
                </form>

                
  <p className='text-center mt-4'>
  Already have an account?
  <Link to="/login" className='underline text-secondary'>
    {" "}
    Login
  
  </Link>
    
</p>
<GoogleLogin/>
</div>
</div>
)
}

export default Register