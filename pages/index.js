import { MainContext } from '@/contexts/MainContext/mainContext';
import Desktop from '@/src/components/Desktop/desktop';
import FirstWindow from '@/src/components/FirstWindow/firstWindow'
import React, { useContext } from 'react'

const MeuApp = () => {

	const { fwdisplay } = useContext(MainContext);

	if(fwdisplay == false){
        document.getElementById('first-window').style.display = 'none';
        document.getElementById('desktop').style.display = 'flex';
	}

	return (
		<>
			<FirstWindow />
			<Desktop />
		</>
	);
};

export default MeuApp;