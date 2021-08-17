import React from 'react';
import {Route} from 'react-router-dom'

//NavBar
import NavBar from "./Components/NavBar/NavBar";

//Home Page
import HomePage from "./Components/HomePage/HomePage";

// Forms Examples To Look At
import SimpleForm from "./Components/SimpleForm/SimpleForm";


const App = () => {
    return (
        <div>
            <NavBar/>

            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route path='/simple-form'>
                <SimpleForm/>
            </Route>
        </div>

    )
}

export default App