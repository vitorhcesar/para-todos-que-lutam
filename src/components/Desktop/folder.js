import { MainContext } from '@/contexts/MainContext/mainContext';
import React, { useContext } from 'react'

const Folder = ({ title, index }) => {

  const { toggleOnFolderDisplay } = useContext(MainContext);

  return (
    <button onClick={() => toggleOnFolderDisplay(index)} id={index} className='folder-desk'>
      <img className='folder-icon' src='../folder-icon.png' />
      <h2>{title}</h2>
    </button>
  );
};

export default Folder;