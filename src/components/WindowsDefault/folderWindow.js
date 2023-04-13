import { MainContext } from '@/contexts/MainContext/mainContext';
import React, { useContext } from 'react'

const FolderWindow = ({ title, index }) => {

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
                <p>Eu sou um conteúdo</p>
            </main>
        </div>
    );
};

export default FolderWindow;