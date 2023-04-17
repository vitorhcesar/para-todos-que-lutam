import React, { createContext, useContext, useEffect, useState } from 'react'

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

	// Área designada para o tempo	
	const dateGeral = {
		semana: new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-fera', 'Sábado'),
		meses: new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'),
		inTimeDate: new Date(),
		dia: '',
		mes: '',
		ano: '',
		hora: '',
		minutos: '',
		segundos: '',
		refresh: () => {
			dateGeral.inTimeDate = new Date();
			
			dateGeral.dia = dateGeral.semana[dateGeral.inTimeDate.getDay()];
			dateGeral.mes = dateGeral.meses[dateGeral.inTimeDate.getMonth()];
			dateGeral.ano = dateGeral.inTimeDate.getFullYear();
			dateGeral.hora = dateGeral.inTimeDate.getHours();
			dateGeral.minutos = dateGeral.inTimeDate.getMinutes();
			dateGeral.segundos = dateGeral.inTimeDate.getSeconds();
		}
	};

	const [ cronos, setCronos ] = useState(dateGeral);

	useEffect(() => {
		const interval = setInterval(() => {
            dateGeral.refresh();
			setCronos(dateGeral);
		}, 1000);
	});

	return <MainContext.Provider value={{fwdisplay, setFwDisplay, toggleOnFolderDisplay, turnOffWindowDisplay, openURL, cronos, setCronos}}>{children}</MainContext.Provider>;
};