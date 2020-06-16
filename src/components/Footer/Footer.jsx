import React from 'react';
import  './Footer.css';
import musicAlbum from '../../assets/images/musicImages/littleBig.jpg';
import Card from './../Widget/Card/Card.jsx';
import Image from './../Widget/image/Image';
import ButtonCircular from './../Widget/button/ButtonCircular';
const Footer = (props) => {

  return (
    <Card wrapperFooter>
     <Image src={ musicAlbum }  width={'60px'}  height={'60px'} centerGrid />
     <div>
     <ButtonCircular  wrapperMusicFooter backgroundColort></ButtonCircular>
     <ButtonCircular wrapperNav backgroundColort></ButtonCircular>
     <ButtonCircular wrapperMusicFooter backgroundColort></ButtonCircular>
     </div>
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