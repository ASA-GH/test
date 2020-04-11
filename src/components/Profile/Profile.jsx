import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Cardwrapperd from "./../Widget/Cardwrapperd/Cardwrapperd.jsx";
import styles from "./Profile.module.css";
import Button4 from "./../Widget/Button4/Button4.jsx"

const Profile = () => {
    return (
        <div className={styles.profileWrapper}>
        <div className={styles.profileInfoWrapper}><ProfileInfo /></div> 
             
        
    <div className={styles.myPostsWrapper}><MyPostsContainer /></div>    
    </div>
    )
}

export default Profile;