import React from 'react';
import { useUser } from '../src/hooks/useUser';
import { Navigate } from 'react-router-dom';



const DashboardNavigate = () => {
    const { currentUser, isLoading } = useUser();
    //console.log( isLoading)

    const role = currentUser?.role;


    if (isLoading) {
        return <div>Loading...</div>
    }

    if(role === "admin") return <Navigate to="/dashboard/admin-home" replace/>;
    if(role === "coach") return <Navigate to="/dashboard/coach-cp" replace />;
    if(role === "user") return <Navigate to="/dashboard/student-cp" replace/>;
};

export default DashboardNavigate;
