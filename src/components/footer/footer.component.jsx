import React from 'react';
//styles
import { FooterContainer } from './footer.styles';

const Footer = () => {
	const getCurrentYear = new Date().getFullYear();
	return (
		<FooterContainer>
			<span>By Daniel Gaishuber {getCurrentYear}</span>
		</FooterContainer>
	);
};

export default Footer;
