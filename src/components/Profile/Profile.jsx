import React from 'react';
import './Profile.css';
import Card from './../Widget/Card/Card'




const Profile = () => {
    return (
        <div className='wrapperProfile'>
        <div className='wrapperColumnOneProfile'>
       <Card wrapperProfileHome />
       <Card wrapperUnderTheProfileHome />
       </div>
       <Card wrapperMyPostProfile />
         </div>
    );



        /*
        <div className={styles.profileWrapper}>
        <div className={styles.profileInfoWrapper}><ProfileInfo /></div> 
        <div className={styles.profileSettingsWrapper}><ProfileSettings /></div> 
        <div className={styles.myPostsWrapper}><MyPostsContainer /></div>    
    </div>
    )*/
};

export default Profile;