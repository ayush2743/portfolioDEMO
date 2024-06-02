import React from 'react';

function Navbar() { 
    return(
  <div>
    <nav id="desktop-nav">
      <div className="logo">Let's Connect</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
);
}
export default Navbar;
