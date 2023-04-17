import { MainContext } from '@/contexts/MainContext/mainContext';
import React from 'react'
import { useContext } from 'react'

const DesktopFooter = () => {

	const { cronos } = useContext(MainContext);

    // if(cronos.segundos < 10){
    //     cronos.segundos = '0' += cronos.segundos;
    // }

	return (
		<footer id='desktop-footer'>
            <div id='timer'>
                <p id='footer-dia'>Dia {cronos.inTimeDate.getDate()} de {cronos.mes} de {cronos.ano}</p>
                <p id='footer-horario'>{cronos.dia}, {cronos.hora}:{cronos.minutos}</p>
            </div>
            <div id='weather'>
                <p>Clima tranquilo no Rio de Janeiro</p>
                <img src='../teste.png' alt='Tempo' />
            </div>
		</footer>
	);
};

export default DesktopFooter;