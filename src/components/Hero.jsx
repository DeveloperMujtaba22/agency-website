import React from "react";
import assets from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center gap-12 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-100"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0e2a 0%, #020617 100%)',
      }}
    >
      {/* Cosmic stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Moon circle */}
      <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-gray-800 opacity-10 blur-xl"></div>

      {/* Left Column - Text Content */}
      <div className="relative z-10 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">


        <motion.h1 
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-medium xl:leading-[85px]"
        >
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[#8a92ff] to-[#4dceea] bg-clip-text text-transparent">
            digital impact
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-medium text-gray-300 mt-6 max-w-lg"
        >
          Creating meaningful connections and turning big ideas into interactive cosmic experiences
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-[#6e7cff] to-[#4dceea] text-white font-medium shadow-lg shadow-[#6e7cff]/30"
        >
          Launch Your Project
        </motion.button>
      </div>

     {/* Right Column - Image */}
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.9, delay: 0.8 }}
  viewport={{ once: true }}
  className="relative z-10 lg:w-1/2"
>
  <div className="relative">
   <img 
  src={assets.hero_img} 
  alt="Digital cosmic visualization" 
  className="w-full max-w-2xl lg:max-w-none " 
/>

    <div className="absolute -inset-4 "></div>
  </div>
</motion.div>


      {/* Global styles for twinkling effect */}
    
    </div>
  );
};

export default Hero;