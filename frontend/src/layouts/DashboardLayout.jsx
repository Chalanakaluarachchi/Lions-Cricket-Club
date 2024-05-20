import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser';
import { BiHomeAlt, BiLogInCircle, BiSelectMultiple } from "react-icons/bi";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { BsFillPostcardFill } from 'react-icons/bs';
import { SiGoogleclassroom, SiInstructure } from 'react-icons/si';
import { TbBrandAppleArcade } from 'react-icons/tb';
import { MdExplore, MdOfflineBolt, MdPayments, MdPendingActions } from 'react-icons/md';
import { GiFigurehead } from 'react-icons/gi';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Scroll from '../hooks/useScroll';
import { ClockLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

const navItems = {
  admin: [
    { to: "/dashboard/admin-home", icon: <BiHomeAlt />, label: "Dashboard Home" },
    { to: "/dashboard/manage-users", icon: <FaUsers />, label: "Manage Users" },
    { to: "/dashboard/manage-class", icon: <BsFillPostcardFill />, label: "Manage Class" },
    { to: "/dashboard/manage-application", icon: <TbBrandAppleArcade />, label: "Applications" },
  ],
  coach: [
    { to: "/dashboard/coach-cp", icon: <FaHome />, label: "Home" },
    { to: "/dashboard/add-class", icon: <MdExplore />, label: "Add A Class" },
    { to: "/dashboard/my-classes", icon: <IoSchoolSharp />, label: "My Classes" },
    { to: "/dashboard/my-pending", icon: <MdPendingActions />, label: "Pending Classes" },
    { to: "/dashboard/my-approved", icon: <IoMdDoneAll />, label: "Approved Classes" },
  ],
  user: [
    { to: "/dashboard/student-cp", icon: <BiHomeAlt />, label: "Dashboard" },
    { to: "/dashboard/enrolled-class", icon: <SiGoogleclassroom />, label: "My Enroll" },
    { to: "/dashboard/my-selected", icon: <BiSelectMultiple />, label: "My Selected" },
    { to: "/dashboard/my-payments", icon: <MdPayments />, label: "Payment History" },
    { to: "/dashboard/apply-coach", icon: <SiInstructure />, label: "Apply for Coach" },
  ],
};

const lastMenuItems = [
  { to: "/", icon: <BiHomeAlt />, label: "Main Home" },
  { to: "/dashboard/faq", icon: <MdOfflineBolt />, label: "FAQ" },
  { to: "/dashboard/browser", icon: <GiFigurehead />, label: "Following" },
];

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const { loader, logout } = useAuth();
  const { currentUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!',
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(() => {
            Swal.fire('Logged out..!', 'You are logged out.', 'success');
            navigate("/");
          })
          .catch((err) => {
            Swal.fire('Error!', err.message, 'error');
          });
      }
    });
  };

  const role = currentUser?.role;

  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClockLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className="flex">
      <div className={`${open ? "w-64" : "w-20"} bg-gray-800 h-screen p-5 flex flex-col justify-between transition-width duration-300`}>
        <div>
          <div className="flex items-center justify-between">
            <img
              src='/lions-cricket-club.png'
              onClick={() => setOpen(!open)}
              className={`cursor-pointer h-10 transition-transform duration-500 ${open && "rotate-360"}`}
            />
            {open && (
              <h1 className="text-white font-bold text-xl">Lions Cricket Club</h1>
            )}
          </div>
          <nav className="mt-10">
            {role && (
              <ul>
                {navItems[role].map((menuItem, index) => (
                  <li key={index} className="mb-2">
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) =>
                        `flex items-center p-2 text-base font-medium rounded-lg transition-colors duration-150 ${isActive ? "bg-red-500 text-white" : "text-gray-400 hover:bg-red-500 hover:text-white"}`
                      }
                    >
                      <span className="text-2xl">{menuItem.icon}</span>
                      {open && <span className="ml-4">{menuItem.label}</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
        <nav className="mt-10">
          <ul>
            {lastMenuItems.map((menuItem, index) => (
              <li key={index} className="mb-2">
                <NavLink
                  to={menuItem.to}
                  className={({ isActive }) =>
                    `flex items-center p-2 text-base font-medium rounded-lg transition-colors duration-150 ${isActive ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"}`
                  }
                >
                  <span className="text-2xl">{menuItem.icon}</span>
                  {open && <span className="ml-4">{menuItem.label}</span>}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-2 text-base font-medium text-gray-400 rounded-lg transition-colors duration-150 hover:bg-gray-700 hover:text-white"
              >
                <BiLogInCircle className="text-2xl" />
                {open && <span className="ml-4">Logout</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 h-screen overflow-y-auto p-6 bg-gray-100">
        <Scroll />
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
};

export default DashboardLayout;
