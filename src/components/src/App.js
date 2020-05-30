import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from './components/News/News';
import Home from './components/Home/Home';

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header />

                <div>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile'
                           render={ () => <Profile /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>
                    <Route path='/news'
                           render={ () => <News /> }/>
                   {/* <Route path='/music'
                           render={ () => <Music /> }/>
                    <Route path='/settings'
                           render={ () => <Settings /> }/> */}    
                    <Route path='/home'
                           render={ () => <Home /> }/>
                           
</div>
</div>
            </div>
        )
}

export default App;setTimeout(function() {}, 10);