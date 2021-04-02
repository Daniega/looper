import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { InstrumentContainer, InstrumentTitle, ButtonsContainer } from './instrument.styles';

const Instrument = ({ title, audio }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [instrument] = useState({
		title,
		audio: new Audio(`sounds/${audio}.mp3`),
	});

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

	const handlePlay = () => {
		setIsPlaying(true);
		instrument.audio.play();
	};

	const handlePause = () => {
		setIsPlaying(false);
		instrument.audio.pause();
	};
	return (
		<div>
			<InstrumentContainer>
				<InstrumentTitle>
					<h3>{title}</h3>
				</InstrumentTitle>
				<ButtonsContainer>
					<div className='button' name='play' onClick={handlePlay}>
						{isPlaying ? isPlayingAnimation() : <FontAwesomeIcon icon={faPlay} size='2x' />}
					</div>
					<div className='button' name='pause' onClick={handlePause}>
						<FontAwesomeIcon icon={faPause} size='2x' name='pause' />
					</div>
				</ButtonsContainer>
			</InstrumentContainer>
		</div>
	);
};

export default Instrument;
