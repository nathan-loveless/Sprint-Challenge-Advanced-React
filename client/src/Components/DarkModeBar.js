import React, { useState } from 'react';
import {useDarkMode} from './Hooks/useDarkMode';

const DarkModeBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

      const handleSubmit = event => {
        event.preventDefault();
        const element = document.querySelector('.darkmode-button');
        darkMode === true ? element.innerHTML = 'Dark Mode: On' : element.innerHTML = 'Dark Mode: Off';
        setDarkMode(!darkMode);
      };

  return (
      <div>
    <form onSubmit={event => handleSubmit(event)}>
        <button className='darkmode-button'>DarkMode: Off</button>
    </form>
  </div>
  );
  }

export default DarkModeBar;