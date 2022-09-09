import React from 'react'
import {Link, NavLink} from 'react-router-dom'
//import logo from '../../logo.svg';
import '../Header/Header.css'
import logoHeader from '../../assets/logoHeader.png'

export default function Header() {
  return (
    <div className='comp-header'>
      <img src={logoHeader} alt='' />
      <nav className="navbar">
          {/* <Link to="/Galerie">Galerie</Link>
          <Link to="/Footer">Footer</Link> */}
          
          <NavLink to="/"
          style={({isActive}) => isActive ? {textDecoration: "underline"} : {textDecoration: "none"}}
          // className={({isActive}) => {
          //   return isActive ? "activeLink" : "";
          //   }
          // }
          >Accueil</NavLink>

          <NavLink to="/propos"
          style={({isActive}) => isActive ? {textDecoration: "underline"} : {textDecoration: "none"}}
          >A propos</NavLink>
      </nav>
    </div>
  )
}
