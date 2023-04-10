import React from 'react';

import hero from '../assets/images/hero.png';
import github from '../assets/icons/github-alt.png';
import linkedin from '../assets/icons/linkedin-alt.png';
import twitter from '../assets/icons/twitter-alt.png';
import message from '../assets/icons/message.png';

function Hero() {
  return (
    <section className='hero'>
      
      <div className='social'>
        <img src={github} alt='github-icon' />
        <img src={twitter} alt='twitter-icon' />
        <img src={linkedin} alt='linkedin-icon' />
      </div>

      <div className='description'>
        <h2>Hi, I'm Nina Tokmann</h2>
        <p className='caption'>Data Scientist</p>
        <p className='hero-text'>Data wizard who turns raw data into gold! I use my magic powers in statistics, machine learning, and data visualization to help organizations make better decisions.</p>
        <button className='btn'>
          Contact me
          <img src={message} alt='message-icon' />
        </button>
      </div>

      <img src={hero} alt='hero' width='400'/>
    
    </section>
  );
}

export default Hero;