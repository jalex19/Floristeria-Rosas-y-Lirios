// App.js
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Productos from './Productos';
import Contacto from './Contacto';
import IniciarSesion from './IniciarSesion';
import Registrarse from './Registrarse';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Inicio />
      <Productos />
      <Contacto />
      <IniciarSesion />
      <Registrarse />
      {/* ... Otros componentes ... */}
    </div>
  );
};

export default App;
