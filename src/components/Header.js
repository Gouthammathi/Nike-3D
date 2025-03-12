import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../components/images/nike.png';
import Button from './Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header-container">
      <div className="flex justify-between items-center p-4 z-50 bg-white shadow">
        {/* Logo Section */}

        <a href="/" className="inline-block">
          <img
            src={img}
            className="w-[50px] md:w-[80px]"
            alt="Logo"
          />
        </a>


        {/* Center Navigation Links (Visible in Both Desktop and Mobile) */}
        <div className="flex gap-5 absolute left-1/2 transform -translate-x-1/2 md:hidden">

          <Link to="/" className="text-black text-sm">Home</Link>
          <Link to="/about" className="text-black text-sm">Store</Link>
          <Link to="/contact" className="text-black text-sm">Contact</Link>
        </div>

        {/* Center Navigation Links (Desktop Only) */}
        <div className="hidden md:flex gap-5 absolute left-1/2 transform -translate-x-1/2 mr-10">
          <Link to="/" className="text-black text-sm md:text-base">Home</Link>
          <Link to="/about" className="text-black text-sm md:text-base">Store</Link>
          <Link to="/contact" className="text-black text-sm md:text-base">Contact</Link>
        </div>

        {/* Login Button (Desktop Only) */}
        <div className="hidden md:block mr-5">
          <Button />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <StyledWrapper>
            <label className="hamburger">
              <input
                type="checkbox"
                checked={menuOpen}
                onChange={toggleMenu}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </label>
          </StyledWrapper>
        </div>
      </div>

      {/* Mobile Menu Options */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-40">
          <nav className="w-full flex flex-col items-center gap-4">
            <Link to="/men" className="text-black text-sm py-2">Men</Link>
            <Link to="/women" className="text-black text-sm py-2">Women</Link>
            <Link to="/kids" className="text-black text-sm py-2">Kids</Link>
            <div className="mt-4">
              <Button />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 1.5em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default Header;
