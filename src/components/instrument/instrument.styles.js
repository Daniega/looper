import styled from 'styled-components';

export const InstrumentContainer = styled.div`
	background: #ddd;
	padding: 1rem;
	display: grid;
	place-items: center;
	height: fit-content;
	min-height: 100px;
	display: flex;
	flex-direction: column;
`;

export const InstrumentTitle = styled.div`
	text-align: center;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 800px) {
		width: 60%;
	}
`;
