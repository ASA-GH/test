import React from 'react';
import './News.css';
/*import Button1 from "./../Widget/Button1/Button1"
import Button4 from "./../Widget/Button4/Button4"
import Scroll1 from "./../Widget/Scroll1/Scroll1"
import Scroll5 from "./../Widget/Scroll5/Scroll5"
import Login1 from "./../Widget/Login1/Login1"*/
import Card from "./../Widget/Card/Card"

let News = (props) =>{
   /* let car = {
        name: 14
    }*/
    return(
        <div className='wrapperNews'>
       <Card wrapperMessagesomeDialogs />
       <Card wrapperContactsDialogs />
         </div>



    ) 
    
    
   /* <div className={style.newsTest}>
        <div className={style.newsTest1}>
           <div className={style.newsTest1Div}>
               <Button1 />
               <Button1 />
               <Button1 />
           </div>  
           </div>
        <div className={style.newsTest2}>
        <div className={style.newsTest2Div}>
        <div className={style.newsTest3Div}>
        <Scroll1 />
        </div>
        </div>
        </div>
        <div className={style.newsTest3}>
        <div className={style.newsTest3Div}>    
        <Login1 />
        </div>
        </div>
        <div className={style.newsTest4}>
           <div className={style.newsTest4Div}>
               <Button4 />
               <Button4 />
               <Button4 />
           </div>  
           </div>
        <div className={style.newsTest5}>
        <div className={style.newsTest5Div}>
        <Scroll5 />
        </div>
        </div>   
        <div className={style.newsTest6}>
        <div className={style.newsTest6Div}>

{car.name == '14' ? 'y' : 'n'}


</div>           
        </div>  
    </div> */
}
export default News;