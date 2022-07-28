import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Aleksandr_Solzhenitsyn_1974crop.jpg" alt="" />
            {props.message}
            <div>
                <span>♡{props.likesCount}</span>
            </div>
        </div>

    );
}

export default Post;