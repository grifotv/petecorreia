import React from 'react';
import Link from 'gatsby-link';
import PageHeader from 'components/PageHeader';
import PageTitle from 'components/PageTitle';

import bgImage from '../assets/images/full-width/hero-home-bg.jpg';

const IndexPage = () => (
	<div>
		<PageHeader backgroundImage={bgImage}>
			<PageTitle>Simplify</PageTitle>
		</PageHeader>
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/page-2/">Go to page 2</Link>
	</div>
);

export default IndexPage;
