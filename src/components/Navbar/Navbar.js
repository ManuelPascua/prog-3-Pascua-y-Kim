import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <ul className= "main-nav">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Favoritos'>Favorits</Link>
                </li>
                <li>
                    <Link to='/PopularMovies'>Popular</Link>
                </li>
                <li>
                    <Link to='/TheaterMovies'>Theater</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar