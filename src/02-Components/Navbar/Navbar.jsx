import React from 'react';
import './Navbar.scss';
import fotoPrincipal from '../../assets/img/Logo_principal.png';

function Navbar() {
    return (
    <nav className="navbar">
        <div className="navbar__left">
            <img src={fotoPrincipal} alt="Logo de APC" className="navbar__logo" />
        </div>
        
        <div className="navbar__links">
            <a href="#home">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
        </div>
    </nav>
  );
}

export default Navbar;