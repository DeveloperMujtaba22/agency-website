import React, { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
    const [ setPosition] = useState({ x: 0, y: 0 });
    const [ setVisible] = useState(false);
    const divRef = useRef(null);

    // Default color gradient if none provided
    const colorGradient = service.color || 'from-blue-400 to-cyan-500';

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ 
            x: e.clientX - bounds.left, 
            y: e.clientY - bounds.top 
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            viewport={{ once: true }}
            className={`relative h-full overflow-hidden rounded-2xl border-t-[3px] border-b-0 border-x-0 bg-gradient-to-b ${colorGradient} p-[1px] shadow-lg hover:shadow-xl transition-all`}
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)} 
            ref={divRef} 
            onMouseMove={handleMouseMove}
        >
            <div className='relative h-full bg-white dark:bg-gray-900 rounded-2xl p-8 z-10'>
                <div 
                    className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${colorGradient} opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10`}
                />
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 bg-gradient-to-br ${colorGradient} border-transparent bg-origin-border`}>
                    <div className='bg-white dark:bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center'>
                        <img 
                            src={service.icon} 
                            alt={service.title} 
                            className='w-8 h-8 object-contain'
                        />
                    </div>
                </div>
                
                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;