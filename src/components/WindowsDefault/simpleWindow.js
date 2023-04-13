import React from 'react'

const SimpleWindow = ({ title, content }) => {
  return (
    <div className='simple-window'>
        <header>
            <nav className='sw-btns'>
                <button className='sw-btn-red'></button>
                <button className='sw-btn-yellow'></button>
                <button className='sw-btn-blue'></button>
            </nav>
            <p className='sw-title'>{title}</p>
        </header>
        <main>
            <p className='sw-content'>{content}</p>
        </main>
    </div>
  );
};

export default SimpleWindow;