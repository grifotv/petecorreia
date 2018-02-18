import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import { timingFunctions } from 'polished';
import Layout from 'components/Layout';

export const Wrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
`;

export const Content = styled(Layout.Contain).attrs({ verticalPadding: true })`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

export const LogoLink = styled(Link)`
	display: block;
	width: 50px;
	height: 50px;
	transition: transform 135ms ${timingFunctions('easeOutQuad')};

	&:hover {
		transform: scale(1.05);
	}
`;

export const LogoImage = styled.img`
	width: 50px;
	margin: 0;
`;

export const Nav = styled.nav`
	display: flex;
`;

export const NavLink = styled(Link).attrs({ activeClassName: 'active' })`
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
