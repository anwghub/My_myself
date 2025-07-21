import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on item click
  };

  return (
    <nav className='relative z-50 flex justify-between items-center text-white px-6 py-4 md:px-20 bg-transparent mt-10'>
      <span className='text-3xl md:text-4xl font-bold tracking-wide'>Portfolio</span>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-8 font-semibold text-xl'>
        <a href="#About"><li className='hover:text-[#7da0fa] duration-200'>About</li></a>
        <a href="#Experience"><li className='hover:text-[#7da0fa] duration-200'>Experience</li></a>
        <a href="#Projects"><li className='hover:text-[#7da0fa] duration-200'>Projects</li></a>
        <a href="#Certificates"><li className='hover:text-[#7da0fa] duration-200'>Certificates</li></a>
        <a href="#Footer"><li className='hover:text-[#7da0fa] duration-200'>Contact</li></a>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        {menuOpen ? (
          <RiCloseLine size={30} onClick={handleMenuToggle} />
        ) : (
          <RiMenu2Line size={30} onClick={handleMenuToggle} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='absolute top-full left-0 w-full bg-black bg-opacity-90 text-white p-6 flex flex-col gap-4 font-semibold md:hidden transition-all duration-300 z-40'>
          <a href="#About" onClick={handleLinkClick}><li>About</li></a>
          <a href="#Experience" onClick={handleLinkClick}><li>Experience</li></a>
          <a href="#Projects" onClick={handleLinkClick}><li>Projects</li></a>
          <a href="#Certicates" onClick={handleLinkClick}><li>Certificates</li></a>
          <a href="#Footer" onClick={handleLinkClick}><li>Contact</li></a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
