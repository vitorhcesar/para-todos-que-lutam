import { MainContext } from '@/contexts/MainContext/mainContext';
import React, { useContext } from 'react'
import Content from '../WindowContent/content';

const FolderWindow = ({ title, index, contentID }) => {

    const { turnOffWindowDisplay } = useContext(MainContext);

    return (
        <div id={index} className='folder-window'>
            <header>
                <nav className='fw-btns'>
                    <button onClick={() => turnOffWindowDisplay()} className='fw-btn-red'></button>
                    <button className='fw-btn-yellow'></button>
                    <button className='fw-btn-blue'></button>
                </nav>
                <p className='fw-title'>{title}</p>
            </header>
            <main>
                <Content index={contentID} />
            </main>
        </div>
    );
};

export default FolderWindow;