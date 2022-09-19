import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'


function Navbar(){
    return(
        <nav>
            <ul className= "main-nav">
                <Link to="/">
                    <img className='logo' src='/logo2.jpeg' alt=''/>
                </Link>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Favoritos'>Favoritos</Link>
                </li>
                <li>
                    <Link to='/popular'>Popular</Link>
                </li>
                <li>
                    <Link to='/theater'>Theater</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar