import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';

let urls = [
  'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
  'https://www.github.com/Gombeng/',
  // 'https://facebook.com/MSR.GOMBENG/',
  // 'https://www.instagram.com/msr.gombeng/',
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let i = 0;
  return (
    <nav className='navbar bg-dark text-light p-3 '>
      <NavLink to="/" className="navbar-brand text-light">
        Hi
      </NavLink>

      <div className='d-flex gap-3'>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          onClick={handleClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          onClick={handleClick}
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          onClick={handleClick}
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
          onClick={handleClick}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;