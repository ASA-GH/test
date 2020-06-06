import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from './../Profile/ProfileContainer';
import DialogsContainer from './../Dialogs/DialogsContainer';
import UsersContainer from './../Users/UsersContainer';
import NewsContainer from './../News/NewsContainer';
import HomeContainer from './../Home/HomeContainer';

const  Content = (props) => {
 return(
    <div style={{ backgroundColor: '#cc0c2f', width: '90%',
    height: '100%'}} />

)}

   /*    
 (
<Fragment>
    <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
    <Route path='/profile' render={ () => <ProfileContainer /> }/>
    <Route path='/users' render={ () => <UsersContainer /> }/>
    <Route path='/news' render={ () => <NewsContainer /> }/>
    <Route path='/home' render={ () => <HomeContainer /> }/>
</Fragment>    
          

);*/


    export default Content;