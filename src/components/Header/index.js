import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import LogoImageSrc from 'assets/images/logo/logo.png';
import { MAX_WIDTH } from 'styles/layout';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: ${MAX_WIDTH};
	padding: 40px;
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
`;

const LogoImage = styled.img`
	width: 50px;
	margin: 0;
`;

const Header = () => (
	<Wrapper>
		<Content>
			<Logo>
				<LogoLink to="/">
					<LogoImage src={LogoImageSrc} alt="Pete Correia logo" />
					<VisuallyHidden>Logo</VisuallyHidden>
				</LogoLink>
			</Logo>
			<nav>Nav</nav>
		</Content>
	</Wrapper>
);

export default Header;
