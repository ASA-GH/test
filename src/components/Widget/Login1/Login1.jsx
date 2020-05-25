import React from 'react';
import style from './Login1.module.css';
import Card from  './../Card/Card'
const LoginForm = (props) => {
    return (
            <form>
            <div className={style.inputFieldLogin1}>
                <input placeholder = {"Login"} />
            </div>
            <div className={style.inputFieldLogin1}>
                <input placeholder = {"Password"} />
            </div>
            <button className={style.button1Login1}>Log in</button>
            <div className={style.checkboxLogin1} >
                <input type = {"checkbox"} /> remember me
            </div>
            <button className={style.button2Login1}>Restore password ?</button>
            </form>
)
}
const Login1 = (props) => {
    return (
        <div className={style.wrapLogin1}>
            <div className={style.titleLogin1}>Sign up</div>
            <LoginForm />
         </div>
    )    
     
}

export default Login1;