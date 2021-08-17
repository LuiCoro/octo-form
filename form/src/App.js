import React from 'react';
import {Route} from 'react-router-dom'
import './App.css'

//NavBar
import NavBar from "./Components/NavBar/NavBar";

//Home Page
import HomePage from "./Components/HomePage/HomePage";

// Forms Examples To Look At
//Simple Form
import SimpleForm from "./Components/SimpleForm/SimpleForm";
//More Inputs
import Inputs from "./Components/InputsComponents/InputComponent";


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
            <Route path='/inputs'>
                <Inputs />
            </Route>
        </div>

    )
}

export default App