import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavigationBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
      <nav className="nav">
        <h1>Women's World Cup</h1>
        <div className="dark-mode__toggle">
          <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };
  
export default NavigationBar;