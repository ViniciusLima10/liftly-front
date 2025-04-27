import React from 'react';
import './menu.css'; 
import Liftly from '../Liftly/liftly';

function Menu() {
  return (
    <div className="header">
        <Liftly></Liftly>

      <nav className="menu">
        <a href="#sobre">Sobre</a>
        <a href="#planos">Planos</a>
        <a href="#aulas">Aulas</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  );
}

export default Menu;
