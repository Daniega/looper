import React, { useState, createContext } from 'react';

export const InstrumentsContext = createContext();
//Context API for instruments
export const InstrumentsProvider = (props) => {
	const [instruments, setInstruments] = useState([
		{ name: 'Bass Warwick', audio: new Audio(`sounds/bassWarwick.mp3`) },
		{ name: 'Drums And Snares', audio: new Audio(`sounds/drumsAndSnares.mp3`) },
		{ name: 'Electric Guitar', audio: new Audio(`sounds/electricGuitar.mp3`) },
		{ name: 'Future Funk', audio: new Audio(`sounds/futureFunk.mp3`) },
		{ name: 'Groove Darbuka', audio: new Audio(`sounds/grooveDarbuka.mp3`) },
		{ name: 'Maze Politics', audio: new Audio(`sounds/mazePolitics.mp3`) },
		{ name: 'Organ Synth', audio: new Audio(`sounds/organSynth.mp3`) },
		{ name: 'PAS3 Groove', audio: new Audio(`sounds/pas3Groove.mp3`) },
		{ name: 'Stutter Beats', audio: new Audio(`sounds/stutterBreakBeats.mp3`) },
	]);

	return <InstrumentsContext.Provider value={[instruments, setInstruments]}>{props.children}</InstrumentsContext.Provider>;
};
