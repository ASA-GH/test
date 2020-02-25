import React from 'react';
import styles from './Header.module.css';
import headerLogo from '../../assets/images/Joker3.png';

const Header = (props) => {
    return <header className={styles.header}>
       <span>
           <img src={headerLogo} />
        </span>
<span className={styles.headerText}>
        <div className={styles.a}>FAKE SOCIAL NETWORK FOR SOCIOPATHS.</div>
        <div className={styles.b}>You don’t like to communicate? You are welcome!</div>
</span>
    </header>
}

export default Header;