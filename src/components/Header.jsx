import React, { useState } from 'react';
import logo from '/images/logo.svg';
import iconmenu from '/images/icon-menu.svg';
import iconmenuclose from '/images/icon-menu-close.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative z-50'>
      <div className='flex justify-between items-center py-4 mb-10 px-4 sm:px-6'>

        {/* Logo */}
        <img src={logo} alt="logo" className='w-14 md:w-18' />

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex space-x-12 text-gray-500 text-md'>
            <li className='cursor-pointer hover:text-[#CC7F7D]'>Home</li>
            <li className='cursor-pointer hover:text-[#CC7F7D]'>New</li>
            <li className='cursor-pointer hover:text-[#CC7F7D]'>Popular</li>
            <li className='cursor-pointer hover:text-[#CC7F7D]'>Trending</li>
            <li className='cursor-pointer hover:text-[#CC7F7D]'>Categories</li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className='md:hidden focus:outline-none'
        >
          <img src={iconmenu} alt="menu" className='w-6 h-6' />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-900"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white p-6 transition-transform duration-300 z-50 shadow-lg">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="mb-6">
                <img src={iconmenuclose} alt="close menu" className='w-6 h-6' />
              </button>
            </div>

            <ul className='space-y-6 text-[#00001A] font-medium'>
              <li className='cursor-pointer hover:text-[#F15D50]'>Home</li>
              <li className='cursor-pointer hover:text-[#F15D50]'>New</li>
              <li className='cursor-pointer hover:text-[#F15D50]'>Popular</li>
              <li className='cursor-pointer hover:text-[#F15D50]'>Trending</li>
              <li className='cursor-pointer hover:text-[#F15D50]'>Categories</li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
