import React from 'react';
import style from './ProfileInfo.module.css';
import Joker1 from './../../../assets/images/joker/Joker1.jpg';
import Joker4 from './../../../assets/images/joker/Joker4.png';

const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
       <div className={style.container}>
       <div className={style.headerContaing}>
                <img src='https://static.zerochan.net/108.%28artist%29.full.135048.jpg' alt="image" className={style.headerImage} />
            <div className={style.header}>
            <h1 className={style.mainHtading}>Hugh Jackman</h1>
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
            <img srs={Joker1} alt="User" className={style.bodyImage}/>
    {/*<div className={bodyActionButton u-flex-center}>
            </div>*/}
            <span className={style.bodyStats}>Followers <span>35k</span></span>
            <span className={style.bodyStats}>Following <span>1.9k</span></span>
        <div className={style.UClearfix}></div>
        <div className={style.bodyInfo}>
            <p>Хью́ Майкл Дже́кман — австралийский актёр, певец и продюсер. Стал известен широкой публике по роли супергероя-мутанта Росомахи в серии фильмов «Люди Икс».</p>
            <p>Вершиной его актёрского мастерства подавляющим большинством критиков признана работа в детективном триллере «Пленницы» (2013). 
               Также широко известен по фильмам «Кейт и Лео», «Пароль „Рыба-меч“», «Ван Хельсинг», «Фонтан», «Престиж», «Живая сталь», «Отверженные», «Робот по имени Чаппи» и «Австралия».</p>
        </div>
        <div className={style.bodyMore}>
        <span></span>
        <span></span>
        <span></span>
        </div>
<div className={style.cardUClearfix}></div>
    <span className={style.cardHeading}>Movies </span>
    <span className={style.cardMore}>SVG </span>
    <ul className={style.cardList}>
     <li>< img srs={Joker4} alt="image"/></li>
     <li>< img srs={Joker4} alt="image"/></li>
     <li>< img srs={Joker4} alt="image"/></li>
    </ul>
</div>
        </div>
    </div>
    )
}

export default ProfileInfo;