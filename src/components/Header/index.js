import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
`;

const Header = () => (
	<Wrapper>
		<VisuallyHidden>Logo</VisuallyHidden>
	</Wrapper>
);

export default Header;
