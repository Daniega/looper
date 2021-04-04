import styled from 'styled-components';

export const InstrumentContainer = styled.div`
	background: ${(props) => (props.playing ? '#505a6e' : '#697690')};
	padding: 1rem;
	display: grid;
	place-items: center;
	height: fit-content;
	display: flex;
	flex-direction: column;
	min-height: 145px;
	position: relative;
	border-radius: 15px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	transition: 0.2s;
	&:hover {
		background: #505a6e;
	}
`;

export const InstrumentTitle = styled.div`
	text-align: center;
	h3 {
		color: white !important;
	}
`;
