import React from 'react';
import logo from '../assets/logo.png';

const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary ">
        <div className="container-fluid ">
            <a href="/" className="navbar-brand"><img src={logo} className="w-55 " alt="" /></a>
            <button type="button" className="navbar-toggler ">
                <span className="navbar-toggler-icon" data-bs-toggle="collapse"
                data-bs-target="#Menu"
                ></span>
            </button>
            <div id="Menu" className="collapse navbar-collapse ">
                <ul className="navbar-nav ms-3">
                     <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
                     <li className="nav-item"><a href="/Productos" className="nav-link">Productos</a></li>
                     <li className="nav-item"><a href="/contacto" className="nav-link">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;