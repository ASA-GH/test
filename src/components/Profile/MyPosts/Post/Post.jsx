import React from 'react';
import s from "./Post.module.css";
import postImages from "../../../../assets/images/JoaquinPhoenix/JoaquinPhoenix1.jpg";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={postImages} />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;