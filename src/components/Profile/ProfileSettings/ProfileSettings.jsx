import React from 'react';
import style from './ProfileSettings.module.css';
import Card  from './../../Widget/Card/Card';
import Login1 from './../../Widget/Login1/Login1';
import Joker3 from './../../../assets/images/joker/Joker3.png'




const ProfileSettings = (props) => {

let test = {
    width: '500',
    height: '500'

}
 


    return (
        <div className={style.cardProfileSettings}>
            {/*<Card  styleCard = {{width:'500px', height:'500px'}} InnerCard = {Login1}/>*/}
            <Card  styleCard = {test} InnerCard = {Login1}/>
        </div>

        )
    }
    
    export default ProfileSettings;



       