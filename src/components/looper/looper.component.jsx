import React from 'react';

import { LooperContainer } from './looper.styles';

import Instrument from '../instrument/instrument.component';

const instruments = [
	{ name: 'Bass Warwick', path: 'bassWarwick' },
	{ name: 'Drums And Snares', path: 'drumsAndSnares' },
	{ name: 'Electric Guitar', path: 'electricGuitar' },
	{ name: 'Future Funk', path: 'futureFunk' },
	{ name: 'Groove Darbuka', path: 'grooveDarbuka' },
	{ name: 'Maze Politics', path: 'mazePolitics' },
	{ name: 'Organ Synth', path: 'organSynth' },
	{ name: 'PAS3 Groove', path: 'pas3Groove' },
	{ name: 'Stutter Break Beats', path: 'stutterBreakBeats' },
];

const Looper = () => {
	return (
		<LooperContainer>
			{instruments.map((instrument, index) => (
				<Instrument title={instrument.name} key={index} audio={instrument.path} />
			))}
		</LooperContainer>
	);
};

export default Looper;
