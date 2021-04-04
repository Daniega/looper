import React, { useState, useEffect, useContext } from 'react';
//components
import Instrument from '../instrument/instrument.component';
import MainControls from '../main-controls/main-controls.component';
//Context API
import { InstrumentsContext } from '../../InstrumentsContext';
//styles
import { LooperContainer } from './looper.styles';

//helper array for "instrumentsAreOn" state
const defaultArray = [false, false, false, false, false, false, false, false, false];

const Looper = () => {
	const [instruments] = useContext(InstrumentsContext); //Context API to get state of Instruments from instrumentsContext
	const [instrumentsAreOn, setInstrumentsAreOn] = useState(defaultArray); //which instruments are on?
	const [isLooperPlaying, setisLooperPlaying] = useState(false); //main control play or pause looper
	const [timeStartedPlaying, setTimeStartedPlaying] = useState(0); //time the instrument started playing
	const [playingCount, setPlayingCount] = useState(0); //how many instruments are playing

	useEffect(() => {
		for (let i = 0; i < instruments.length; i++) {
			if (isLooperPlaying) {
				if (instrumentsAreOn[i]) {
					instruments[i].audio.currentTime = timeStartedPlaying;
					instruments[i].audio.play();
				} else {
					instruments[i].audio.pause();
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLooperPlaying]);

	useEffect(() => {
		//set instruments sound property to loop
		for (let i = 0; i < instruments.length; i++) {
			instruments[i].audio.loop = true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//prop => click event, handle logic of click events
	const handleButtonClick = (event) => {
		const name = event.getAttribute('name');
		const value = event.getAttribute('value');
		//if main control buttons were clicked
		if (name === 'main') {
			//buttons on main control were clicked
			switch (value) {
				case 'pauseMain': //pause button was clicked
					setStateToDefault();
					for (let i = 0; i < instruments.length; i++) {
						instruments[i].audio.pause();
					}
					break;
				case 'playMain': //play button was clicked
					setisLooperPlaying(true);
					break;
				default:
					break;
			}
		} else {
			// instrument buttons were clicked
			const index = getInstrumentIndex(name);
			const isOn = instrumentsAreOn[index];
			//if play button was clicked
			if (value === 'play') {
				if (instrumentsAreOn[index]) return; //handle random click on play instrument when it's alreat on
				setInstrumentsAreOn(turnOnInstrument(index));
				if (isLooperPlaying) {
					instruments[index].audio.currentTime = getCurrentTime();
					instruments[index].audio.play();
				}
				setPlayingCount(playingCount + 1);
			} else {
				//pause button was clicked
				if (isOn) {
					//if instrument is on
					if (isLooperPlaying) {
						//if looper is on
						instruments[index].audio.pause(); //pause audio of the instrument
						setInstrumentsAreOn(turnOffInstrument(index)); //set state of instrument to false
						if (playingCount === 1) {
							//if it's the last instrument playing
							setStateToDefault();
						}
					}
					setPlayingCount(playingCount - 1);
					setInstrumentsAreOn(turnOffInstrument(index));
				}
			}
		}
	};
	//prop => instrument name, return => index of instrument
	const getInstrumentIndex = (name) => {
		const index = instruments.findIndex((instrument) => instrument.name === name);
		return index;
	};
	//prop => instrument index, return => new Array where newArr[index] = true;
	const turnOnInstrument = (index) => {
		let newArr = [...instrumentsAreOn];
		newArr[index] = true;
		return newArr;
	};
	//prop => instrument index, return => new Array where newArr[index] = false
	const turnOffInstrument = (index) => {
		let newArr = [...instrumentsAreOn];
		newArr[index] = false;
		return newArr;
	};
	//if instrument is on return the instruments currentTime
	const getCurrentTime = () => {
		for (let i = 0; i < instruments.length; i++) {
			if (instrumentsAreOn[i]) return instruments[i].audio.currentTime;
			else return 0;
		}
	};
	const setStateToDefault = () => {
		setisLooperPlaying(false);
		setInstrumentsAreOn(defaultArray);
		setTimeStartedPlaying(0);
		setPlayingCount(0);
	};

	return (
		<div>
			<LooperContainer>
				{instruments.map((instrument, index) => (
					<Instrument instrument={instrument} isOn={instrumentsAreOn[index]} key={index} handleButtonClick={handleButtonClick} />
				))}
			</LooperContainer>
			<div>
				<MainControls isPlaying={isLooperPlaying} handleClick={handleButtonClick} />
			</div>
		</div>
	);
};

export default Looper;
