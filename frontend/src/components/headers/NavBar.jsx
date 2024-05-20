import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Switch from '@mui/material/Switch';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ultilities/providers/AuthProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import moment from 'moment';

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Coaches', route: '/coaches' },
    { name: 'Classes', route: '/classes' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
];

const theme = createTheme({
    palette: {
        primary: { main: '#ff0000' },
        secondary: { main: '#00ff00' },
    },
});

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navBg, setNavBg] = useState('bg-[#15151580]');
    const [isFixed, setIsFixed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss a'));

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure to logout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!',
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');
                    })
                    .catch((err) => {
                        Swal.fire('Error!', err.message, 'error');
                    });
            }
        });
    };

    useEffect(() => {
        const darkClass = 'dark';
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add(darkClass);
        } else {
            root.classList.remove(darkClass);
        }
    }, [isDarkMode]);

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 100) {
            if (isHome) {
                setNavBg('bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:bg-black dark:text-white text-black');
            } else {
                setNavBg('bg-white dark:bg-black dark:text-white text-black');
            }
        } else {
            setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} dark:text-white text-white`);
        }
    }, [scrollPosition]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format('h:mm:ss a'));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.nav
            className={`${isHome ? navBg : 'bg-white dark:bg-black backdrop-blur-2xl'} ${isFixed ? 'static' : 'fixed'} top-0 transition-colors duration-500 ease-in-out w-full z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="flex px-4 items-center justify-between py-4">
                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex-shrink-0 cursor-pointer pl-7 md:p-0 flex items-center">
                        <div>
                            <h1 className="text-2xl font-Cinzel inline-flex gap-3 items-center font-bold">
                                Lions-Cricket-Club <img src="/lions-cricket-club.png" alt="Logo" className="w-8 h-8" />
                            </h1>
                            <p className="font-bold text-[13px] tracking-[8px]">Quick Explore</p>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <FaBars className="h-6 hover:text-primary w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center space-x-4 pr-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.route}
                                    to={link.route}
                                    className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            {user ? null : (
                                isLogin ? (
                                    <NavLink
                                        to="/register"
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}
                                    >
                                        Register
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}
                                    >
                                        Login
                                    </NavLink>
                                )
                            )}
                            {user && (
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}
                                >
                                    Dashboard
                                </NavLink>
                            )}
                            {user && (
                                <img src={user?.photoURL} className="h-[40px] rounded-full w-[40px]" alt="User" />
                            )}
                            {user && (
                                <button
                                    className="font-bold px-3 py-2 bg-secondary text-white rounded-xl"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            )}
                            <div className="flex flex-col items-center ml-4">
                                <ThemeProvider theme={theme}>
                                    <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
                                    <h1 className="text-[8px]">Light/Dark</h1>
                                </ThemeProvider>
                            </div>
                            <div className="text-xs font-semibold text-white dark:text-gray-300 ml-4">
                                {currentTime}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-2 w-full bg-black"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ul className="flex flex-col items-start p-4">
                                {navLinks.map((link) => (
                                    <li key={link.route} className="mb-2">
                                        <NavLink
                                            to={link.route}
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : 'text-white'} hover:text-secondary duration-300`}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                              {
                                user ? null : isLogin ? <li>
                                    <NavLink
                                        to='/register'
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}
                                    >Register</NavLink></li> : <li>
                                    <NavLink
                                        to='/login'
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}
                                    >Login</NavLink></li>
                            }
                            {
                                user && <li><NavLink to='/dashboard' className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`}>Dashboard</NavLink></li>
                            }
                            {
                                user && <li>
                                    <img src={user?.photoURL} className='h-[40px] rounded-full w-[40px]' alt="" />
                                </li>
                            }
                            {
                                user && <li><NavLink className='font-bold px-3 py-2 bg-secondary text-white rounded-xl' onClick={handelLogout}>Logout</NavLink></li>
                            }
</ul>
                            {/* Add more mobile menu links as needed */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default NavBar;
