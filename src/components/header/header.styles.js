import styled from 'styled-components';

export const HeaderContainer = styled.div`
	height: fit-content;
	margin-bottom: 40px;
	text-align: center;
	/* background-color: #7805f7; */
	img {
		height: 100px;
		width: 100px;

		&:hover {
			cursor: pointer;
			transform: scale(1.1);
			transition: 0.2s;
		}
	}
`;
