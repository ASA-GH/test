import React from 'react';
import './Login.css';
import Card from  '../../components/Widget/Card/Card'




/*
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
}*/
const Login = (props) => {
    return (
        <Card wrapperLogin>
           <div className='titleLogin'>Sign up</div> 
          {/*<LoginForm />*/}
          <div/>
        </Card>
    )    
     
}

export default Login;