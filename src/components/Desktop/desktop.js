import React from 'react'
import Folder from './folder';
import FolderWindow from '../WindowsDefault/folderWindow';

const Desktop = () => {
  return (
    <section id='desktop'>
        <video autoPlay muted loop id='back-video'>
            <source src='../back-bible.mp4' />
        </video>
        <section id='desktop-content'>
            <Folder index={0} title='Sobre o projeto' />
            <Folder index={1} title='Dados do dev' />
            <Folder index={2} title='Devocional' />
            <FolderWindow contentID='content-one' index='one' title='Sobre o projeto' />
            <FolderWindow contentID='content-two' index='two' title='Dados do dev' />
            <FolderWindow contentID='content-three' index='three' title='Devocional' />
        </section>
    </section>
  );
};

export default Desktop;