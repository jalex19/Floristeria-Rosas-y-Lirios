// Header.js
import React from 'react';
import './styles.css'; // Asegúrate de tener tu archivo styles.css en la misma carpeta

const Header = () => {
    return (
      <header>
        <img src="logo.png" alt="Logo" className="logo" />
        <h1>Floristeria Rosas y Lirios</h1>
      </header>
    );
  };
  
  export default Header;