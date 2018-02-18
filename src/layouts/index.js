import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import injectGlobalStyles from 'styles/injectGlobalStyles';

injectGlobalStyles();

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
