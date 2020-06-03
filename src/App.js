import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import FooterContainer from './components/Footer/FooterContainer';
import Card from './components/Widget/Card/Card.jsx';

const App = (props) => {
    return (
            <Card 
            className="appWrapper"
            width = { 1200 }
            height = { 1200 }
            >
                <Navbar />
                <Card 
                className="appInner"
                width = { 90% }
                height = { 100% } >
                <HeaderContainer />
                <Content />
                <FooterContainer /> 
                </Card>
            </Card>
        )
}

export default App;