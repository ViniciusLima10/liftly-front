import React from 'react';
import './menu.css';
import Liftly from '../Liftly/liftly';

function Menu({ links}) {
  return (
    <div className="header">
      <Liftly />

      <nav className="menu">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

    </div>
  );
}

export default Menu;
