import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './NavBar.css';

const NavBar = () => {

  const [active , setActive] = useState(false);

  return (
    <div className="navbar">
        <div className="container">
            <h1 style={{marginLeft:"1rem", color:'#00d8ff'}}>Defi</h1>
            <ul className={`nav ${active && 'active'}`}>
                <li className="nav-item">
                    <a href="">Platform</a>
                </li>
                <li className="nav-item">
                    <a href="">Developpers</a>
                </li>
                <li className="nav-item">
                    <a href="">Community</a>
                </li>
                <li className="nav-item">
                    <a className="btn" href="">Use Defi</a>
                </li>
            </ul>
            <div className="hamburger" onClick={() => setActive(!active)}>
            {active ? <AiOutlineMenu className="icon" /> :<AiOutlineClose className="icon" />}
            </div>
        </div>
    </div>
  )
}

export default NavBar