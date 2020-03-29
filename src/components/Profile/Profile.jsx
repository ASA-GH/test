import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
//import ProfileInfo from "./ProfileInfo/ProfileInfo.html";
const Profile = () => {
    return (
        <div className={styles.profileWrapper}>
        <div className={styles.profileInfoWrapper}>  
            <ProfileInfo />  
        </div>
        <div className={styles.myPostsWrapper}>    
            <MyPostsContainer />
        </div>
        </div>
    )
}

export default Profile;