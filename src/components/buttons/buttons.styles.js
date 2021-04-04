import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonsContainer = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 10px;
	@media (min-width: 800px) {
		width: 60%;
		max-width: 200px;
	}
`;

export const StyledButton = styled.div`
	transition: 0.2s;

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		transition: 0.2s;
	}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: ${(props) => (props.playing ? '#983732' : 'white')};
	transition: 0.2s;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
