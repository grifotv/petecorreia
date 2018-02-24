import styled from 'styled-components';
import { headingHuge } from 'styles/typography';

const PageTitle = styled.h1`
	${headingHuge()};
	font-weight: 300;
	margin-bottom: 32px;

	&:last-child {
		margin-bottom: 0;
	}

	@media (min-height: 600px) {
		margin-bottom: 64px;
	}
`;

export default PageTitle;
