import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    /* return (
       <nav className={style.nav}>

            <span className={`${style.item} ${style.active}`}>
                <NavLink to="/home" activeClassName={style.activeLink}>HOME</NavLink>
            <span className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink}>PROFILE</NavLink>
            </span>
            <span className={`${style.item} ${style.active}`}> 
                <NavLink to="/dialogs" activeClassName={style.activeLink}>MESSAGES</NavLink>
            </span>
            <span className={`${style.item} ${style.active}`}>
                <NavLink to="/users" activeClassName={style.activeLink}>FRIEND</NavLink>
            </span>
            <span className={`${style.item} ${style.active}`}>
                <NavLink to="/news" activeClassName={style.activeLink}>NEWS</NavLink>
            </span>
            <span className={`${style.item} ${style.active}`}>
                <NavLink to="/music" activeClassName={style.activeLink}>MUSIC</NavLink>
            </span>
            <span className={`${style.item} ${style.active}`}>
                <NavLink to="/settings" activeClassName={style.activeLink}>SETTINGS</NavLink>
            </span>
        </nav>
        
    )*/
};

export default Navbar;