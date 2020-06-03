import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import FooterContainer from './components/Footer/FooterContainer';

const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <Content />
                <FooterContainer />
            </div>
        )
}

export default App;