import styled from 'styled-components';

export const LooperContainer = styled.div`
	display: grid;
	width: 90%;
	grid-gap: 1rem;
	margin-left: auto;
	margin-right: auto;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	transition: 0.2s;

	@media (min-width: 800px) {
		width: 60vw;
	}

	@media (min-width: 1600px) {
		width: 50vw;
	}
`;
