import React from 'react'
import logo from "./logo_nv.png";
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Skills from './Skills.js';
import Experience from './Experience.js';
import Education from './Education.js';
import About from './About.js';
import './Nav.css'
function Nav(){

    return(
        <header>
            {/*<img src={logo} className="logo-image" alt="Logo Image" />*/}

        <nav className="navigation">

          <ul className="nav-links">

            {/*// Set up the Links*/}
            {/*<li> <Link to={"/"}</li>*/}
            <li>  <NavLink exact to="/" className="item" activeClassName="active">Introduction</NavLink></li>
            <li>  <NavLink to="/Experience" className="item" activeClassName="active">Experience</NavLink></li>
            <li> <NavLink to="/Education" className="item" activeClassName="active">Education</NavLink></li>

          </ul>
                    </nav>

        {/*<Link to="/contact" className="cta"><button>Contact</button></Link>*/}

            </header>
            )
    }
export default Nav