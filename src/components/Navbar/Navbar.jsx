import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <span> </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>PROFILE</NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}> 
                <NavLink to="/dialogs" activeClassName={s.activeLink}>MESSAGES</NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>FRIEND</NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/news" activeClassName={s.activeLink}>NEWS</NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/music" activeClassName={s.activeLink}>MUSIC</NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/settings" activeClassName={s.activeLink}>SETTINGS</NavLink>
            </span>
            <span> </span>
        </nav>
    )
}

export default Navbar;