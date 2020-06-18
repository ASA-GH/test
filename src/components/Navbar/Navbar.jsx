import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import Button from '../Widget/button/Button';
const Navbar = (props) => {
     return (
         <div className='buttonGroupNav'>

            <NavLink to="/" exact>
                 <Button wrapperNav>HOME</Button>
            </NavLink>
            <NavLink to="/profile" exact>
                 <Button wrapperNav>PROFILE</Button>
            </NavLink>
            <NavLink to="/news" exact>
                <Button wrapperNav>NEWS</Button>
            </NavLink>
            <NavLink to="/music" exact>
                <Button wrapperNav>MUSIC</Button>
            </NavLink>
            <NavLink to="/settings" exact>
                <Button wrapperNav>SETTINGS</Button>
            </NavLink>
         </div>
     )
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