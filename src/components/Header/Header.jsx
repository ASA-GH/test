import React from 'react';
import './Header.css';
import headerLogo from '../../assets/images/joker/Joker3.png';
import Card from './../Widget/Card/Card.jsx';
import Image from './../Widget/image/Image';
const Header = (props) => {

  return (
    <Card wrapperHeader >
      <Image src={headerLogo}  width={'60px'}  height={'60px'} centerGrid circle />
      <span className='headerText'>
        <div className='a'>FAKE SOCIAL NETWORK FOR SOCIOPATHS.</div>
        <div className='b'>You don’t like to communicate? You are welcome!</div>
      </span>
      <Card wrapperTest />
      <Card wrapperTest />
      <Card wrapperTest />
    </Card>
      )
    }
    
   /* (<header className={styles.header}>
       <span>
           <img src={headerLogo} />
        </span>
<span className={styles.headerText}>
        <div className={styles.a}>FAKE SOCIAL NETWORK FOR SOCIOPATHS.</div>
        <div className={styles.b}>You don’t like to communicate? You are welcome!</div>
</span>
    </header>
    )*/


export default Header;