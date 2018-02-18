import React from 'react';
import Link from 'gatsby-link';
import AppHeader from 'components/AppHeader';

const IndexPage = () => (
	<div>
		<AppHeader />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/page-2/">Go to page 2</Link>
	</div>
);

export default IndexPage;
