import React, { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
// console.log(props);
    let newPostElement = createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    // ВЫВОДИМ ПОСТЫ--------------------------------------------

    let postsElements =
        props.posts.map((p, i) => {
            return <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount} />
        });

    //----------------------------------------------------------

    return (

        <div className={s.posts_block}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        onChange={onPostChange}
                        className={s.area_style}
                        name="" id="" cols="30" rows="10"
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Отправить</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;