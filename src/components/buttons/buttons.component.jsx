import React from 'react';
//fontAwesome Icons
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
//styles
import { ButtonsContainer, StyledButton, StyledIcon } from './buttons.styles';

//playing animation when instrument is playing
const isPlayingAnimation = () => {
	return (
		<lottie-player
			src='https://assets3.lottiefiles.com/private_files/lf30_qny8j0bg.json'
			background='transparent'
			speed='1'
			style={{ width: '30px', height: '30px' }}
			loop
			autoplay></lottie-player>
	);
};

const Buttons = ({ name, isOn, handleClick, main }) => {
	return (
		<ButtonsContainer>
			<StyledButton value={main ? 'playMain' : 'play'} name={name} onClick={(e) => handleClick(e.currentTarget)}>
				{isOn ? isPlayingAnimation() : <StyledIcon icon={faPlay} size='2x' />}
			</StyledButton>
			<StyledButton value={main ? 'pauseMain' : 'pause'} name={name} onClick={(e) => handleClick(e.currentTarget)}>
				<StyledIcon icon={faPause} size='2x' name='pause' playing={isOn ? 1 : 0} />
			</StyledButton>
		</ButtonsContainer>
	);
};

export default Buttons;
