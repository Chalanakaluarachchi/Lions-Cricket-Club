import React from 'react';
import bgImg from './bg.jpg';
import img1 from './t1.jpg';
import img2 from './t2.jpg';
import img3 from './t3.jpg';
import img4 from './t4.jpg';
import { motion } from 'framer-motion';

import vid1 from "../../assets/gallary/vid1.mp4"

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-primary">About <span className="text-secondary">Us</span></h1>
          <p className="text-gray-800 font-bold text-lg mt-4">Welcome to our website! We are a team of passionate individuals dedicated to...</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
          {/* Mission Section */}
          <div className="w-full md:w-1/3 mx-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Promote the sport of cricket and encourage participation at all levels.</li>
                <li>Provide a supportive and inclusive environment for players of all ages and abilities.</li>
                <li>Foster camaraderie, sportsmanship, and respect.</li>
                <li>Contribute positively to the local community.</li>
                <li>Strive for excellence on the field.</li>
              </ul>
            </div>
          </div>

          {/* Vision Section */}
          <div className="w-full md:w-1/3 mx-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Become a leading cricket club in Sri Lanka.</li>
                <li>Establish state-of-the-art facilities.</li>
                <li>Forge strong partnerships with schools and organizations.</li>
                <li>Build a diverse and passionate community.</li>
                <li>Continuously innovate and adapt.</li>
              </ul>
            </div>
          </div>

          {/* History Section */}
          <div className="w-full md:w-1/3 mx-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-bold text-primary mb-4">Our History</h2>
              <p className="text-gray-800">Established in 2001, Lions Cricket Club has been a cornerstone of the local cricket community for over 24 years...</p>
            </div>
          </div>
        </div>

        {/* Ground Section */}
        <h2 className="text-5xl font-bold text-center text-primary mb-8">Our <span className="text-secondary">Ground</span></h2>
        <div className="flex flex-col md:flex-row justify-center items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2 mx-4">
          <video autoPlay muted loop className='w-full'>
            <source src={vid1} type="video/mp4" />
          </video>
          </div>
          <div className="w-full md:w-1/2 mx-4">
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-gray-800 text-lg md:text-xl lg:text-2xl"
            >
                Our cricket ground is the heart of Lions Cricket Club. With lush green fields and modern facilities, it's where dreams are turned into reality. We provide state-of-the-art training equipment, expert coaching staff, and a supportive environment to nurture the talent of our players.
            </motion.p>
        </div>
        </div>

        {/* Team Section */}
        <h2 className="text-5xl font-bold text-center text-primary mb-8">Our <span className="text-secondary">Team</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CEO */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={img2} alt="CEO" className="w-full" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Sampath Disanayake</p>
              <p className="text-gray-700">CEO</p>
            </div>
          </div>
          {/* Team Members */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={img3} alt="Team Manager" className="w-full" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Nilwala Nawamini</p>
              <p className="text-gray-700">Team Manager</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={img1} alt="Marketing Manager" className="w-full" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Ruchini Niwangana</p>
              <p className="text-gray-700">Marketing Manager</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={img4} alt="Event Coordinator" className="w-full" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Sisiliya Kavindi</p>
              <p className="text-gray-700">Event Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
