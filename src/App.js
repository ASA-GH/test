import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import FooterContainer from './components/Footer/FooterContainer';
import Card from './components/Widget/Card/Card';
import Sandbox from './components/Widget/badge/Sandbox'
const App = () => {
    
    return (
        <div className = 'wrapperApp'>  
        <Sandbox />
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
        