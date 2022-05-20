import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {

    const activeChange = data => data.isActive ? s.active : s.item

    return (
        <nav className={s.nav_block}>
            <div className={s.item}>
                <NavLink to="/profile" className={activeChange}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={activeChange}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={activeChange}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={activeChange}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={activeChange}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;