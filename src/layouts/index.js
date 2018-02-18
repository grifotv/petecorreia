import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Pete Correia"
			meta={[
				{ name: 'description', content: 'Head of Technology, London — Fathom' },
				{
					name: 'keywords',
					content: 'javascript, engineering, design, data-viz',
				},
			]}
		/>
		{children()}
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
