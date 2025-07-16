import React from 'react';
import './Navbar.scss';
import fotoPrincipal from '../../assets/img/Logo_principal.png';

function Navbar() {
    return (
    <nav className="navbar">
        <div className="navbar__left">
            <img src={fotoPrincipal} alt="Logo de APC" className="navbar__logo" />
        </div>
        
        <div className="navbar_links">
            <a href="#home">INICIO</a>
            <a href="#sobre-mi">SOBRE MÍ</a>
            <a href="#proyectos">PROYECTOS</a>
            <a href="#contacto">CONTACTO</a>
        </div>
    </nav>
  );
}

export default Navbar;