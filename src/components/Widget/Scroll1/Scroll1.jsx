import React from 'react';
import style from "./Scroll1.module.css";

const Scroll1 = () => {
    return (
        <div className={style.wrapWidgetScroll1}>
        <div className={style.widgetScroll1}>
        <div className={`${style.singleBox1} ${style.box1}`}>50%</div> </div>  
        <div className={style.widgetScroll1}>
        <div className={`${style.singleBox1} ${style.box2}`}>70%</div></div> 
        <div className={style.widgetScroll1}>
        <div className={`${style.singleBox1} ${style.box3}`}>35%</div></div> 
         
         </div>
)
}

export default Scroll1;