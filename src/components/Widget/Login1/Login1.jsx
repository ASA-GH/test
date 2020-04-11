import React from 'react';
import style from "./Login1.module.css";

const Login1 = () => {
    return (
        <div className={style.wrapLogin1}>
            <div className={style.titleLogin1}>Sign up</div>
            <div className={style.inputFieldLogin1}>Email Address </div>
            <div className={style.inputFieldLogin1}>Password</div>
            <div className={style.button1Login1}>Log in</div>
            <div className={style.socialsLogin1}>
             <div></div>   
             <div className={style.socialsAllLogin1}>S</div> 
             <div className={style.socialsAllLogin1}>S</div>
             <div className={style.socialsAllLogin1}>S</div>
             <div></div>
            </div>
            <div className={style.button2Login1}>Restore password ?</div>
            
         </div>
)
}

export default Login1;