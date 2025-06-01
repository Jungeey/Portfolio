import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '1rem',
        background: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link to="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>
        About
      </Link>
      <Link to="/projects" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>
        Projects
      </Link>
      <Link to="/contact" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
