import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/headers/NavBar'
import Footer from '../components/footer/Footer'
import Scroll from '../hooks/useScroll';
import Chatbot from '../components/Chatbot/Chatbot'
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <main className='dark:bg-black overflow-hidden'>
        <Scroll />
        <NavBar/>
        <Outlet/>
        <Chatbot />
        <Footer/> 
        <ToastContainer />
        </main>
  )
}

export default MainLayout