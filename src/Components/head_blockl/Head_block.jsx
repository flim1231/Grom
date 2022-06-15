import React from 'react';
import Footer from '../_blocks/Footer/Footer';
import Header from '../_blocks/Header/Header';
import Main from '../_blocks/Main/Main';
import Sidebar from '../_blocks/Sidebar/Sidebar';
import cl from './Head_block.module.css'


const Head_block = () => {
    return (
        <>
           <Header />
           <div className={cl.bl_side}>
            <div className={cl.block_side_main}>
                <Sidebar />
                <Main />
            </div>
           </div>


           <Footer />
        </>
    );
};

export default Head_block;