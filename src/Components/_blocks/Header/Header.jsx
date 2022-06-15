import React, {useState} from 'react';
import cl from './Header.module.css'

const Header = () => {
    const [bol, setBol] = useState(false)


    return (
        <header>
            <ul className={cl.list_header}>
                <li href="/" className = {cl.logo}>minimalizm</li>
                {
                    bol ? <span  className={cl.avatar}>Аватар</span> : <button onClick={() => setBol(prevState => !prevState)} className={cl.log}>Log in</button>
                }
            </ul>
        </header>
    );
};

export default Header;