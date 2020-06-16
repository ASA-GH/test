import React from 'react';
import './Home.css';
import Card from './../Widget/Card/Card'
/*import Header from './../Header/HeaderContainer.js'
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from './components/News/News';
*/
const Home = () => {
  return(
    <div className='wrapperHome'>
     <div className='wrapperColumnOneHome'>
    <Card wrapperProfileHome />
    <Card wrapperUnderTheProfileHome />
    </div>
    <Card wrapperNewsHome />
    <Card wrapperFriendsHome />
      </div>
  );
};

export default Home;