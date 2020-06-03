import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from './components/News/News';

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
       
            </div>
        )
}

export default App;