import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div>
            My Posts
            <div>
                <div>
                    <textarea className={s.area_style} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message='Мой первый пост' like='15'/>
                <Post message='Мой второй пост' like='20'/>
            </div>
        </div>
    );
}

export default MyPosts;