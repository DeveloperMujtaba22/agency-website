import React from 'react';
import Title from './Title';
import { teamData } from '../assets/assets';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Team = () => {
    // Updated team data to match your image
    const customTeamData = [
        { name: 'Hatey Carter', title: 'CBD G CS Servicer', image: teamData[0]?.image || '' },
        { name: 'James Walker', title: 'Lead Designs', image: teamData[1]?.image || '' },
        { name: 'Jessica Nguyen', title: 'VG Plapese', image: teamData[2]?.image || '' },
        { name: 'Ashley Prescott', title: 'Memoring Splecom', image: teamData[3]?.image || '' },
        { name: 'Emily Parker', title: 'Contant Deseright', image: teamData[4]?.image || '' },
        { name: 'Ryan Mitchell', title: 'Develope', image: teamData[5]?.image || '' },
    ];

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-30 text-gray-700 dark:text-white'
        >
            <Title 
                title='Meet the team' 
                desc='A passionate team of digital experts dedicated to your brands success.'
            />

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full'>
                {customTeamData.map((team, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}  
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        key={index} 
                        className='flex flex-col items-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group'
                    >
                        <div className='relative mb-4'>
                            <img 
                                src={team.image} 
                                className='w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md group-hover:border-blue-400 dark:group-hover:border-cyan-400 transition-colors duration-300' 
                                alt={team.name} 
                            />
                            <div className='absolute -inset-2 rounded-full border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-cyan-900 transition-all duration-500 -z-10'></div>
                        </div>
                        <div className='text-center'>
                            <h3 className='font-bold text-lg mb-1'>{team.name}</h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>{team.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Team;