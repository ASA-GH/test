import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className={s.nav}>
            <span className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile   </NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages   </NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users   </NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/news" activeClassName={s.activeLink}>News   </NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music  </NavLink>
            </span>
            <span className={`${s.item} ${s.active}`}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </span>
        </header>
    )
}

export default Navbar;