import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import AdminStats from './AdminStats';
import { Fade } from "react-awesome-reveal";
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import welcomeImage from '../../../assets/welcome.jpg'; // Add your image path here

const AdminHome = () => {
    const { user } = useAuth();
    const axiosFetch = useAxiosFetch();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosFetch('/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${welcomeImage})` }}>
            <div className="relative z-10 p-8 shadow-lg">
                <Fade delay={500} cascade damping={0.1}>
                    <h1 className='text-4xl font-bold my-7 text-green'>
                        Welcome Back, <span className='text-yellow-300'>{user?.displayName}</span>
                    </h1>
                    <AdminStats users={users} />
                </Fade>
            </div>
        </div>
    );
};

export default AdminHome;
