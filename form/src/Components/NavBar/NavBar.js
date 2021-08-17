import React from "react";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link exact to='/'>
                <button id='homeBTN'>Home</button>
            </Link>
        </div>
    )
}

export default NavBar