import styled from 'styled-components';

export const LooperContainer = styled.div`
	display: grid;
	width: 90%;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 1rem;
	margin-left: auto;
	margin-right: auto;
	@media (min-width: 800px) {
		width: 60vw;
	}
`;
