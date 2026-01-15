import React, { useState } from 'react';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeTogglebtn';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-30 
                 backdrop-blur-xl bg-white/30 dark:bg-gray-900/40 shadow-md border-b border-gray-100/30"
    >
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="Logo"
      />

      {/* Nav Links */}
      <div
        className={`text-gray-700 dark:text-white font-medium sm:text-sm flex sm:items-center gap-6 
                    transition-all duration-300
                    ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-64 max-sm:pl-10'}
                    max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:bg-gradient-to-br 
                    from-blue-700 to-indigo-900 max-sm:text-white max-sm:flex-col max-sm:pt-20`}
      >
        {/* Close Icon */}
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Links */}
        {["Home", "Services", "Our Work", "Contact Us"].map((item, index) => (
          <a
            key={index}
            onClick={() => setSidebarOpen(false)}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="relative group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Theme Toggle */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Menu Icon for Mobile */}
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* CTA Button */}
        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 px-6 py-2 text-sm font-semibold rounded-full 
                     bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md hover:scale-105 transition-transform"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
