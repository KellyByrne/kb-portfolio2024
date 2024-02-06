import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {

  return (
    <menu className="sticky">
      <div>
          <li><Link to="/">PROJECTS</Link></li>
          <li><Link to="https://github.com/KellyByrne" target="_blank">GITHUB</Link></li>
          <li><Link to="/resume">RESUME</Link></li>  
      </div>
    </menu>
  )
}

export default Menu;