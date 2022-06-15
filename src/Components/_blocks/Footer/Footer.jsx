import React from 'react';
import cl from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={cl.listed}>
                <ul className={cl.list_1}>
                    <a href='/'><li>ГЛАВНАЯ</li></a>
                    <a href='/'><li>ДРУГОЕ</li></a>
                    <a href='/'><li>НАСТРОЙКИ</li></a>

                </ul>

                <ul className={cl.list_2}>
                    <a href='/'><li>ЛАЙФХАКИ</li></a>
                    <a href='/'><li>ДРУЗЬЯ</li></a>
                    <a href='/'><li>ТУРЫ</li></a>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;