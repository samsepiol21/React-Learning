import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/chapter11">Home</Link>
        </li>
        <li>
          <Link to="/chapter11/about">About</Link>
        </li>
        <li>
          <Link to="/chapter11/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
