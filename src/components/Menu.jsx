import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Menu() {

  return (
    <menu className="sticky">
      <div>
          <li><Link to="/">PROJECTS</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/resume">RESUME</Link></li>  
      </div>
    </menu>
  )
}

export default Menu;