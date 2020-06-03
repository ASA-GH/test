import React from 'react';
import styles from './Header.module.css';
import headerLogo from '../../assets/images/joker/Joker3.png';

const Header = (props) => {
    return 
    from 'react';
    import './App.css';
    import Navbar from './components/Navbar/Navbar';
    import Card from './../Widget/Card/Card.jsx';
    
    const App = (props) => {
      return (
        <Card 
          className="Header"
          width = { 1200 }
          height = { 1200 }
          Tag = 'header'
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
    (<header className={styles.header}>
       <span>
           <img src={headerLogo} />
        </span>
<span className={styles.headerText}>
        <div className={styles.a}>FAKE SOCIAL NETWORK FOR SOCIOPATHS.</div>
        <div className={styles.b}>You don’t like to communicate? You are welcome!</div>
</span>
    </header>
    )
}

export default Header;