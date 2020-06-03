import React from 'react';
lmport './Home.css';
import Header from './../Header/HeaderContainer.js'
import Profile from './components/Profile/Profile';
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