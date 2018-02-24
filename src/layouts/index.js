import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Fixed, Provider } from 'rebass';
import injectGlobalStyles from 'styles/injectGlobalStyles';
import { FONT_FAMILY_REGULAR } from 'styles/typography';
import Logo from 'components/Logo';

injectGlobalStyles();

const TemplateWrapper = ({ children }) => (
	<Provider
		theme={{
			fonts: {
				sans: FONT_FAMILY_REGULAR,
			},
		}}
	>
		<div>
			<Helmet
				title="Pete Correia"
				meta={[
					{
						name: 'description',
						content: 'Head of Technology, London — Fathom',
					},
					{
						name: 'keywords',
						content: 'javascript, engineering, design, data-viz',
					},
				]}
			/>
			<Fixed m={2} p={3} zIndex={1} top={0} left={0}>
				<Logo />
			</Fixed>
			{children()}
		</div>
	</Provider>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
