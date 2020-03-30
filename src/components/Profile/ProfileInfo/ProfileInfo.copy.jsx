import React from 'react';
import style from "./ProfileInfo.module.css";
import Joker1 from "./../../../assets/images/joker/Joker1.jpg";
import Joker4 from "./../../../assets/images/joker/Joker4.png";
import UserImage from "./../../../assets/images/JoaquinPhoenix/JoaquinPhoenix1.jpg";

const ProfileInfo = () => {
     return (
        <div className={style.profileInfo}>
       <div className={style.container}>
       <div className={style.headerContaing}>
                <img src='https://c4.wallpaperflare.com/wallpaper/688/1010/457/landscape-wallpaper-preview.jpg' alt="image" className={style.headerImage} />
            <div className={style.header}>
                <svg fill= "#ffffff" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" className={style.headerIcon}>
                    <path d="M0 oh24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
                <svg fill="#ffffff" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" className={style.uFloatRight, style.headerIcon}>
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 
                    4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            <h1 className={style.mainHeading}>Joaquin Phoenix</h1>
            <span className={style.tag}>Actor</span>
            <span className={style.tag}>Producer</span>
            <div className={style.stats}>
                <span className={style.statModule}>Movies <span className={style.statNumber}>56</span></span>
                <span className={style.statModule}>Plays <span className={style.statNumber}>29</span></span>
                <span className={style.statModule}>Musicals <span className={style.statNumber}>11</span></span>
            </div>
        </div>
        "--End header--"
        </div>
        <div className={style.overlayHeader}></div>
        <div className={style.body}>
            <img src={UserImage} alt="User1" className={style.bodyImage}/>
        <div className={style.bodyActionButton, style.uFlexCenter}>
            <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            </div>
            <span className={style.bodyStats}>Followers <span>35k</span></span>
            <span className={style.bodyStats}>Following <span>1.9k</span></span>
        <div className={style.UClearfix}></div>
        <div className={style.bodyInfo}>
            <p>Хоаки́н Рафаэ́ль Фе́никс (англ. Joaquin Raphael Phoenix, род. 28 октября 1974, Сан-Хуан, Пуэрто-Рико) — американский актёр, продюсер, музыкант и клипмейкер. Младший брат актёра Ривера Феникса.</p>
            <p>Всемирную известность Фениксу принесла роль римского императора Коммода в фильме «Гладиатор». В 2012 году получил признание кинокритиков за роль Фредди Куэлла в фильме «Мастер», за которую был номинирован на премию «Оскар» в категории «Лучшая мужская роль». Также известен по фильму «Джокер».</p>
        </div>
        <div className={style.bodyMore}>
        <span></span>
        <span></span>
        <span></span>
        </div>
<div className={style.card, style.UClearfix}>
    <span className={style.cardHeading}>Movies </span>
    <span className={style.cardMore}>
        <svg fill="#777777" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 
            2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9-2-2-2z"/>
        </svg>
         </span>
    <ul className={style.cardList}>
     <li>< img src={Joker4} alt="image" className={style.cardListImage} /></li>
     <li>< img src={Joker4} alt="image" className={style.cardListImage} /></li>
     <li>< img src={Joker4} alt="image" className={style.cardListImage} /></li>
    </ul>
    </div>
</div>
        
        </div>
    </div>
    )
}

export default ProfileInfo;