import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Form Examples</h1>

            <h2>Click on a button to view its example</h2>

            <p>Simple Form</p>
            <Link to='/simple-form'>
                <button id='simple-form'>View Me</button>
            </Link>
        </div>
    )
}

export default HomePage