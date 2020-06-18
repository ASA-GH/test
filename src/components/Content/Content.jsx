import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from './../Profile/ProfileContainer';
import DialogsContainer from './../Dialogs/DialogsContainer';
import UsersContainer from './../Users/UsersContainer';
import NewsContainer from './../News/NewsContainer';
import HomeContainer from './../Home/HomeContainer';
import MusicContainer from './../Music/MusicContainer';
import SettingsContainer from './../Settings/SettingsContainer';
import LoginContainer from './../Login/LoginContainer';

const  Content = (props) => {
 return(
<Fragment>
    <Route path="/dialogs" exact strict render={ () => <DialogsContainer/> }/>
    <Route path="/users" exact strict render={ () => <UsersContainer /> }/>
    <Route path="/" exact strict render={ () => <HomeContainer /> }/>
    <Route path="/profile" exact strict  render={ () => <ProfileContainer/> }/>
    <Route path="/news" exact strict render={ () => <NewsContainer/> }/>
    <Route path="/music" exact strict render={ () => <MusicContainer /> }/>
    <Route path="/settings" exact strict render={ () => <SettingsContainer/> }/>
    <Route path="/login" exact strict render={ () => <LoginContainer/> }/>

</Fragment>    
);
 };
    export default Content;