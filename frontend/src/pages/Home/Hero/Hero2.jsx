import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/home/banner-2.jpg';

const Hero2 = () => {
    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start p-11 items-center text-white bg-black bg-opacity-60">
                <div>
                    <div className="space-y-6 space-x-8">
                        <p className="md:text-4xl text-2xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We produce</p>
                        <h1 className="md:text-7xl text-4xl font-bold space-x-9">
                            Talented <br />Players
                        </h1>
                        <div className="md:w-1/2">
                            <p>
                                With a proud tradition of fostering a winning mentality, the Cricket Club has consistently performed well in domestic tournaments like the Premier League Tournament and the Twenty20 competition. Many of Sri Lanka's cricketing legends have donned the club's colors, contributing to its illustrious legacy.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <Link className="px-7 py-3 rounded-lg bg-secondary text-white font-bold uppercase hover:bg-red-600 transition-colors duration-300" to="/register">Join Now</Link>
                            <Link className="px-7 py-3 rounded-lg bg-secondary text-white font-bold uppercase hover:bg-red-600 transition-colors duration-300" to="/event">View Event</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
