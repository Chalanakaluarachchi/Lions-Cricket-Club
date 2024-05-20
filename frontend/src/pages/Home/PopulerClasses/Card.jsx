import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChair, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Card = ({ item }) => {
    const { _id, name, image, availbleSeats, price, totalEnrolled } = item;

    return (
        <motion.div 
            className='shadow-lg flex flex-col justify-between border border-secondary overflow-hidden m-4 rounded-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <img src={image} alt={name} className="object-cover w-full h-48" />
            <div className="p-4 bg-white dark:bg-gray-800">
                <h2 className='text-xl font-semibold mb-2 dark:text-white'>{name}</h2>
                <p className='text-gray-600 dark:text-gray-400 mb-2 flex items-center'>
                    <FontAwesomeIcon icon={faChair} className="mr-2" /> Available Seats: {availbleSeats}
                </p>
                <p className='text-gray-600 dark:text-gray-400 mb-2 flex items-center'>
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> Price: ${price}
                </p>
                <p className='text-gray-600 dark:text-gray-400 mb-2 flex items-center'>
                    <FontAwesomeIcon icon={faUserFriends} className="mr-2" /> Total Players: {totalEnrolled}
                </p>
               
            </div>
        </motion.div>
    );
};

export default Card;
