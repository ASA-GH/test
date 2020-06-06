/* eslint-disable */
import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import FooterContainer from './components/Footer/FooterContainer';
import Card from './components/Widget/Card/Card';
const App = (props) => {
    
    return (
      <div className = 'wrapperApp'>  
        <Card wrapperCard >
          <Navbar />
          <Card innerApp >
           <HeaderContainer />
           <Content />
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
        