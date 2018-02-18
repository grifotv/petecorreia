import React from 'react';
import LogoImageSrc from 'assets/images/logo/logo.png';
import VisuallyHidden from '../VisuallyHidden';
import {
	GlobalNav,
	Logo,
	LogoImage,
	LogoLink,
	Nav,
	NavLink,
	Wrapper,
} from './styles';

const PageHeader = ({ children, ...props }) => (
	<Wrapper {...props}>
		<GlobalNav>
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
		</GlobalNav>
		{children}
	</Wrapper>
);

export default PageHeader;
