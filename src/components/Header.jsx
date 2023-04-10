import moon from '../assets/icons/moon.png';

import React from 'react';

function Header() {
  return (
    <header>
      <h1>Nina Tokmann</h1>
      <nav>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Skills</a>
        <a href='/'>Services</a>
        <a href='/'>Portfolio</a>
        <a href='/'>Countact</a>
      </nav>
      <img src={moon} alt='moon-icon' />
    </header>
  );
}

export default Header;