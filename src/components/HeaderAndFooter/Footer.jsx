import React from 'react';
import  './HeaderAndFooter.css';
import musicAlbum from '../../assets/images/musicImages/littleBig.jpg';
import Card from '../Widget/Card/Card.jsx';
import Image from '../Widget/image/Image';
import ButtonCircular from '../Widget/button/ButtonCircular';
const Footer = (props) => {

  return (
    <Card wrapperHeaderAndFooter>
     <Image src={ musicAlbum }  width={'60px'}  height={'60px'} centerGrid />
     <div className='trackScale'/>
     <ButtonCircular wrapperNav></ButtonCircular>
     <ButtonCircular wrapperNav></ButtonCircular>
     <ButtonCircular wrapperNav></ButtonCircular>
    </Card>  
      

      )
    };
    
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


export default Footer;