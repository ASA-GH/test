import React from 'react';
import './Music.css'
import Card from './../Widget/Card/Card'


const  Music = (props) => {
 return(
    <div className='wrapperMusic'>
    <div className='wrapperColumnOneMusic'>
   <Card wrapperAlbumMusic />
   <Card wrapperUnderTheProfileMusic />
   </div>
   <Card wrapperTrackListMusic />
     </div>
);

}

    export default Music;