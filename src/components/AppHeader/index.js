import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import { timingFunctions } from 'polished';
import LogoImageSrc from 'assets/images/logo/logo.png';
import Layout from 'components/Layout';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
`;

const Content = styled(Layout.Contain).attrs({ verticalPadding: true })`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

const LogoLink = styled(Link)`
	display: block;
	width: 50px;
	height: 50px;
	transition: transform 135ms ${timingFunctions('easeOutQuad')};

	&:hover {
		transform: scale(1.05);
	}
`;

const LogoImage = styled.img`
	width: 50px;
	margin: 0;
`;

const Nav = styled.nav`
	display: flex;
`;

const NavLink = styled(Link).attrs({ activeClassName: 'active' })`
	margin-right: 24px;
	font-size: 14px;

	&:last-child {
		margin-right: 0;
	}

	${props =>
		!props.noActiveStyles &&
		css`
			&.active {
				text-decoration: underline;
			}
		`};

	@media (min-width: 30.0625em) {
		margin-right: 72px;
		font-size: 18px;
	}
`;

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
