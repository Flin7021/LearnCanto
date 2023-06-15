import React from 'react';
import { Link } from 'react-router-dom';
import '../components/';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flashcards">Flashcards</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
