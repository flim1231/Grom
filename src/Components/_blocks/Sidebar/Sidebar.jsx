import React from 'react';
import cl from './Sidebar.module.css'


const Sidebar = () => {
    return (
        <div className={cl.side_bar}>
            <ul className={cl.list_side}>
                <a href='/'><li className={cl.home}>Главная</li></a>
                <a href='/about'><li className={cl.about}>Другое</li></a>
            </ul>
        </div>
    );
};

export default Sidebar;