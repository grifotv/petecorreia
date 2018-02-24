import styled, { css } from 'styled-components';
import { LAYOUT_WIDTH_MAX } from 'styles/layout';

export const Contain = styled.div`
	width: 100%;
	max-width: ${LAYOUT_WIDTH_MAX};
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
