import { MainContext } from '@/contexts/MainContext/mainContext';
import React, { useContext } from 'react'

const Folder = ({ title, index, type }) => {

  const { toggleOnFolderDisplay } = useContext(MainContext);
  if(type == 'note'){
	return(
		<button onClick={() => toggleOnFolderDisplay(index)} id={index} className='folder-desk'>
			<img className='note-icon' src='../note.png' />
			<h2>{title}</h2>
		</button>
	);
  }

  if(type == 'folder'){
    return (
		<button onClick={() => toggleOnFolderDisplay(index)} id={index} className='folder-desk'>
			<img className='folder-icon' src='../folder-icon.png' />
			<h2>{title}</h2>
		</button>
    );
  }
};

export default Folder;