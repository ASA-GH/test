import React from 'react';
import style from "./Scroll5.module.css";

const Scroll5 = () => {
    return (
        <div className={style.wrapWidgetScroll5}>
        <div className={style.widgetScroll5}>
        <div className={`${style.singleBox5} ${style.box1}`}>50%</div> </div>  
        <div className={style.widgetScroll5}>
        <div className={`${style.singleBox5} ${style.box2}`}>70%</div></div> 
        <div className={style.widgetScroll5}>
        <div className={`${style.singleBox5} ${style.box3}`}>35%</div></div> 
         
         </div>
)
}

export default Scroll5;