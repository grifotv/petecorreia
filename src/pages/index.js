import React from 'react';
import Link from 'gatsby-link';
import { Box, Container, Flex, Heading, Lead, Measure } from 'rebass';
import styled from 'styled-components';
import { FONT_FAMILY_ULTRALIGHT } from 'styles/typography';

const Title = styled(Heading)`
	font-family: ${FONT_FAMILY_ULTRALIGHT};
	font-weight: normal;
`;

const IndexPage = () => (
	<Container>
		<Flex alignItems="center" mb={4} style={{ minHeight: '60vh' }}>
			<Box flex="1 0 auto">
				<Title mt={6} mb={4} fontSize={[9, 9, '184px']}>
					Simplify
				</Title>
				<Measure mb={2}>Head of Technology, London</Measure>
				<Measure>Fathom</Measure>
			</Box>
		</Flex>
		<Measure>
			By combining code, design, and leadership skills, I’ve helped startups,
			agencies and large corporations turn their visions into award-winning
			digital products and interactive installations.
		</Measure>
		<Box mt={5} mb={4}>
			<Lead>Past</Lead>
		</Box>
	</Container>
);

export default IndexPage;
