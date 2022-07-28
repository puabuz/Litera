import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.discription_block}>
                <img className={s.img_content} src="https://thumbs.dreamstime.com/z/%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D1%80%D1%83%D0%BA%D0%BE%D0%B9-%D1%83%D0%BB%D0%B8%D1%86%D1%8B-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-doodle-%D0%BF%D0%BB%D0%B0%D0%BD-165474477.jpg" alt="" />
                <div>
                    <img className={s.ava_profile} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXOjE9O4g_adUJb_myxC_75UfPLNlkUBGggDZkvEtAY7izOa_e8ukhbJnN7xUFx_rGOk&usqp=CAU" alt="" />
                </div>
            </div>
        </div>

    );
}

export default ProfileInfo;


