import React from 'react';
//styles
import { InstrumentContainer, InstrumentTitle } from './instrument.styles';
//components
import Buttons from '../buttons/buttons.component';

const Instrument = ({ instrument, isOn, handleButtonClick }) => {
	return (
		<div>
			<InstrumentContainer playing={isOn}>
				<InstrumentTitle>
					<h3>{instrument.name}</h3>
				</InstrumentTitle>
				<Buttons name={instrument.name} isOn={isOn} handleClick={handleButtonClick} />
			</InstrumentContainer>
		</div>
	);
};

export default Instrument;
