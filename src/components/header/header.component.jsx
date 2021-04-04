import React from 'react';
//styles
import { HeaderContainer } from './header.styles';

const Header = () => {
	return (
		<HeaderContainer>
			<a href='https://www.moveo.group/'>
				<img src='https://assets-global.website-files.com/5d7e2671cad517cbaeca14fd/5d81df792a306e2e5b5f8adf_moveo-logo.svg' alt='logo' />
			</a>
		</HeaderContainer>
	);
};

export default Header;
