import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We him foto ideas into provets signal soletcois that connect...',
            image: assets.work_mobile_app,
            category: 'Marketing'
        },
        {
            title: 'Dashboard management',
            description: 'Growth focused campaigns that reach your ideal customers',
            image: assets.work_dashboard_management,
            category: 'Analytics'
        },
        {
            title: 'Fitness app promotion',
            description: 'Growth focused campaigns that reach your ideal customers',
            image: assets.work_fitness_app,
            category: 'Promotion'
        },
    ];

    return (
        <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id='our-work' 
            className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-30 text-gray-700 dark:text-white'
        >
            <Title 
                title='Our latest work' 
                desc='From strategy to execution we craft digital solutions that move your business forward.'
            />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                {workData.map((work, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        key={index} 
                        className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer'
                    >
                        <div className='relative h-60 overflow-hidden'>
                            <img 
                                src={work.image} 
                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
                                alt={work.title} 
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                            <span className='absolute top-4 right-4 px-3 py-1 bg-white dark:bg-gray-900 text-xs font-medium rounded-full'>
                                {work.category}
                            </span>
                        </div>
                        <div className='p-6 bg-white dark:bg-gray-900'>
                            <h3 className='text-xl font-bold mb-2 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors'>
                                {work.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300 text-sm'>
                                {work.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default OurWork;