import React from 'react';
//components
import Buttons from '../buttons/buttons.component';
//styles
import { MainControlsContainer, MainControlsTitle } from './main-controls.styles';

//Component for Main play-pause Controls
const MainControls = ({ handleClick, isPlaying }) => {
	return (
		<MainControlsContainer playing={isPlaying}>
			<MainControlsTitle>
				<h3>Main Control</h3>
			</MainControlsTitle>
			<Buttons main handleClick={handleClick} name='main' isOn={isPlaying} />
		</MainControlsContainer>
	);
};

export default MainControls;
