import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header_block}>
            <img src="https://static.wixstatic.com/media/aede2c_8b8d716c2b2b4480ab78ae889b1b6e2d~mv2.png/v1/fill/w_338,h_340,al_c,q_85,usm_0.66_1.00_0.01/Partizan_logo.webp" alt="logo" />
        </header>
    );
}

export default Header;