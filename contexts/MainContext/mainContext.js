import React, { createContext, useContext, useState } from 'react'

export const MainContext = createContext({});

export const ContextProvider = ({ children }) => {

  const [fwdisplay, setFwDisplay] = useState(true);

  const [currentID, setCurrentID] = useState(undefined);

  function turnOffWindowDisplay(){
    if(currentID == 0){
      document.getElementById('one').style.display = 'none';
    } else if(currentID == 1){
      document.getElementById('two').style.display = 'none';
    } else if(currentID == 2){
      document.getElementById('three').style.display = 'none';
    }
  }

  function toggleOnFolderDisplay(id){
    console.log('Chamando o toggle on na id' + id);
    if(id == 0){
      document.getElementById('one').style.display = 'flex';
      setCurrentID(0);
    } else if(id == 1){
      document.getElementById('two').style.display = 'flex';
      setCurrentID(1);
    } else if(id == 2){
      document.getElementById('three').style.display = 'flex';
      setCurrentID(2);
    }
  }

  function openURL(link){
    open(link, '_blank');
  }

  return <MainContext.Provider value={{fwdisplay, setFwDisplay, toggleOnFolderDisplay, turnOffWindowDisplay, openURL}}>{children}</MainContext.Provider>;
};