import React from "react";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h1>
                Form Viewer
            </h1>
            <Link exact to='/'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default NavBar