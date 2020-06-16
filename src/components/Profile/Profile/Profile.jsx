import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

const Profile = () => {
    return (
        <div className='WrapperProfile'>
        <ProfileInfo /> 
        <MyPosts /> 
    </div>
    )
}

export default Profile;