import React from 'react';
import style from "./ProfileInfo.module.css";
import Joker1 from "./../../../assets/images/joker/Joker1.jpg";
import Joker4 from "./../../../assets/images/joker/Joker4.png";
import UserImage1 from "./../../../assets/images/JoaquinPhoenix/JoaquinPhoenix1.jpg";
import UserImage2 from "./../../../assets/images/JoaquinPhoenix/JoaquinPhoenix2.jpg";
import UserImage3 from "./../../../assets/images/JoaquinPhoenix/JoaquinPhoenix3.jpg";





const ProfileInfo = () => {
     return (
        <div className={style.profileInfo}>
       <div className={style.container}>
      
       <div className={style.headerContaing}>
       <div className={style.wrapyHeaderImage}>
             <img src='https://c4.wallpaperflare.com/wallpaper/688/1010/457/landscape-wallpaper-preview.jpg' 
                alt="image" className={style.headerImage} />
       </div>
        </div>
        
        <div className={style.body}>
           <div className={style.wrapBodyImage}> <img src={UserImage1} alt="User1" className={style.bodyImage}/></div>
           </div>
           <div className={style.stats}>
            <h3 className={style.mainHeading}>Joaquin Phoenix</h3> 
            <div className={style.bodyStats}>Frends 35k</div>
            </div>
        <div className={style.bodyInfo}>
            <p>Хоаки́н Рафаэ́ль Фе́никс (англ. Joaquin Raphael Phoenix, род. 28 октября 1974, Сан-Хуан, Пуэрто-Рико) — американский актёр, продюсер, музыкант и клипмейкер. Младший брат актёра Ривера Феникса.</p>
            <p>Всемирную известность Фениксу принесла роль римского императора Коммода в фильме «Гладиатор». В 2012 году получил признание кинокритиков за роль Фредди Куэлла в фильме «Мастер», за которую был номинирован на премию «Оскар» в категории «Лучшая мужская роль». Также известен по фильму «Джокер».</p>
        </div>
        
<div className={style.card}>
    <span className={style.cardHeading}>Gallery </span>
    <div className={style.cardList}>
     <span><img src={Joker4} alt="image" className={style.cardListImage} /></span>
     <span><img src={UserImage2} alt="image" className={style.cardListImage} /></span>
     <span><img src={UserImage3} alt="image" className={style.cardListImage} /></span>
    </div>
    </div>
        </div>
    </div>
    )
}

export default ProfileInfo;