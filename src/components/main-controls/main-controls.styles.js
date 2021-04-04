import styled from 'styled-components';

export const MainControlsContainer = styled.div`
	background: ${(props) => (props.playing ? '#505a6e' : '#697690')};
	margin: 1rem auto;
	display: grid;
	place-items: center;
	height: fit-content;
	display: flex;
	width: 90%;
	flex-direction: column;
	min-height: 100px;
	position: relative;
	border-radius: 15px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	transition: 0.2s;
	&:hover {
		background: #505a6e;
	}

	@media (min-width: 800px) {
		width: 60vw;
	}

	@media (min-width: 1600px) {
		width: 50vw;
	}
`;

export const MainControlsTitle = styled.div`
	text-align: center;
	h3 {
		color: white !important;
	}
`;
