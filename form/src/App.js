import React from 'react';
import { Route, Link} from 'react-router-dom'

// Forms Examples To Look At
import SimpleForm from "./Components/SimpleForm/SimpleForm";


const App = () => {
    return (
        <div>
            <h1>
                Form Viewer
            </h1>
            <p>
                Click on a button to view its example!
            </p>
            <Link to="/simple-form">
                <button>Simple Form</button>
            </Link>

            <Route exact path='/'>
                Home Page
            </Route>
            <Route path='/simple-form'>
                <SimpleForm/>
            </Route>
        </div>

    )
}

export default App