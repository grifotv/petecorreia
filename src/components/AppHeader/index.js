import React from 'react';
import LogoImageSrc from 'assets/images/logo/logo.png';
import VisuallyHidden from '../VisuallyHidden';
import {
	Wrapper,
	Content,
	Logo,
	LogoImage,
	LogoLink,
	Nav,
	NavLink,
} from './styles';

const AppHeader = () => (
	<Wrapper>
		<Content>
			<Logo>
				<LogoLink to="/">
					<LogoImage src={LogoImageSrc} alt="Pete Correia logo" />
					<VisuallyHidden>Logo</VisuallyHidden>
				</LogoLink>
			</Logo>
			<Nav>
				<NavLink exact noActiveStyles to="/#work">
					Work
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</Nav>
		</Content>
	</Wrapper>
);

export default AppHeader;
