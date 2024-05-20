import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/home/banner-1.jpg';

const Hero = () => {
    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start p-11 items-center text-white bg-black bg-opacity-60">
                <div>
                    <div className="space-y-6 space-x-8">
                        <p className="md:text-4xl text-2xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We provide</p>
                        <h1 className="md:text-7xl text-4xl font-bold space-x-9">
                            Best Cricket Club In <br />Sri Lanka
                        </h1>
                        <div className="md:w-1/2">
                            <p>
                                The Cricket Club is one of Sri Lanka's premier sports clubs, renowned for its excellence in cricket. Founded in 2005, it has a rich history of producing top cricketing talent and achieving remarkable success both domestically and internationally. The club boasts state-of-the-art facilities, expert coaching staff, and a strong focus on nurturing young talent.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <Link className="px-7 py-3 rounded-lg bg-secondary text-white font-bold uppercase hover:bg-red-600 transition-colors duration-300" to="/register">Join Now</Link>
                            <Link className="px-7 py-3 rounded-lg bg-secondary text-white font-bold uppercase hover:bg-red-600 transition-colors duration-300" to="/login">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
