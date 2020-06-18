import React from 'react';
import './HeaderAndFooter.css';
import {NavLink} from "react-router-dom";
import headerLogo from '../../assets/images/joker/Joker3.png';
import Card from '../Widget/Card/Card.jsx';
import Image from '../Widget/image/Image';
import RoundButton from '../Widget/button/RoundButton'
import Button from '../Widget/button/Button'

const Header = (props) => {

  return (
    <Card wrapperHeaderAndFooter >
      <Image src={headerLogo}  width={'60px'}  height={'60px'} centerGrid circle />
      <span className='headerText'>
        <div className='a'>FAKE SOCIAL NETWORK FOR SOCIOPATHS.</div>
        <div className='b'>You don’t like to communicate? You are welcome!</div>
      </span>
      <div className='wrapperButtons'>
      <NavLink to='/dialogs' >
            <Button wrapperNav>MES</Button>
      </NavLink>
      <NavLink to='/users'>
            <Button wrapperNav>FRE</Button>
      </NavLink>   
      <NavLink to='/login'>
      <RoundButton wrapperNav>sin</RoundButton>
      </NavLink>   
      </div>
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