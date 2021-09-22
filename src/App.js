// Import the necessary libraries
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// Imported Components.
import Navbar from './components/Navbar';
import TableComponent from './components/Table';
import AlertPage from './AlertPage';

// Import Style.
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <>
            <Navbar/>
        <Switch>
            <Route exact path="/" component={TableComponent} />
            <Route path="/alert/:id" component={AlertPage} />
        </Switch>
            <ToastContainer />
            <GlobalStyle />
    </>
);

export default App;
