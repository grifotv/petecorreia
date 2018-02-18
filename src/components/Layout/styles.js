import styled, { css } from 'styled-components';
import { MAX_WIDTH } from 'styles/layout';

const Layout = {};

Layout.Contain = styled.div`
	width: 100%;
	max-width: ${MAX_WIDTH};
	padding-left: 1.5em;
	padding-right: 1.5em;
	margin-left: auto;
	margin-right: auto;

	${props =>
		props.verticalPadding &&
		css`
			padding-top: 1.5em;
			padding-bottom: 1.5em;
		`} @media (min-width: 30em) {
		padding-left: 2.5em;
		padding-right: 2.5em;

		${props =>
			props.verticalPadding &&
			css`
				padding-top: 2.5em;
				padding-bottom: 2.5em;
			`};
	}
`;

export default Layout;
