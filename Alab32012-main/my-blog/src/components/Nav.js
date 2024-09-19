// src/components/Nav.js
import React from 'react';

function Nav() {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;