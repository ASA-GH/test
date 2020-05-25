import React from 'react';
import s from './Card.module.css';

/*
let styleCard = {
  width: '500', 
  height: '500'
};
*/

let Card = ({InnerCard = 0}, {styleCard}) => {

  return(
    
    <div className={s.Card} style = {styleCard} >
      <InnerCard />
    </div>
)
}

export default Card;