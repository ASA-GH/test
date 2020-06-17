/* eslint-disable */
import React from 'react';
import './App.css';
import FooterContainer from './components/HeaderAndFooter/FooterContainer';
import HeaderContainer from './components/HeaderAndFooter/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import HomeContainer from './components/Home/HomeContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MusicContainer from './components/Music/MusicContainer';





import Card from './components/Widget/Card/Card';
const App = (props) => {
    
    return (
      <div className = 'wrapperApp'>  
        <Card wrapperCardApp >
          <Navbar />
          <Card innerApp >
           <HeaderContainer />
         {/*  <Content /> 
           <HomeContainer/>
           <DialogsContainer/>*/}
          <MusicContainer />
     {/*     <ProfileContainer/>
            <NewsContainer/>
       <UsersContainer/>
            <SettingsContainer/>*/}
        <FooterContainer />
          </Card> 
        </Card>   
      </div>
              
        )
}

export default App;


{/*
                <Navbar />
                
                <Card 
                className="appInner"
                width = { 1100 }
                height = { 1200 } >
            
                <HeaderContainer />
                <Content />
                <FooterContainer /> 
                
                </Card>
                */}
        