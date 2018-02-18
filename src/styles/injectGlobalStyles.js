import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import {
	FONT_REGULAR,
	FONT_LIGHT,
	FONT_THIN,
	FONT_ULTRALIGHT,
	FONT_FAMILY_REGULAR,
} from './fonts';

import NeueHaasUnica_Bold_eot from 'assets/fonts/neuehaasunica/2F2779_0_0.eot';
import NeueHaasUnica_Bold_woff2 from 'assets/fonts/neuehaasunica/2F2779_0_0.woff2';
import NeueHaasUnica_Bold_woff from 'assets/fonts/neuehaasunica/2F2779_0_0.woff';
import NeueHaasUnica_Bold_ttf from 'assets/fonts/neuehaasunica/2F2779_0_0.ttf';

import NeueHaasUnica_Bold_Italic_eot from 'assets/fonts/neuehaasunica/2F2779_1_0.eot';
import NeueHaasUnica_Bold_Italic_woff2 from 'assets/fonts/neuehaasunica/2F2779_1_0.woff2';
import NeueHaasUnica_Bold_Italic_woff from 'assets/fonts/neuehaasunica/2F2779_1_0.woff';
import NeueHaasUnica_Bold_Italic_ttf from 'assets/fonts/neuehaasunica/2F2779_1_0.ttf';

import NeueHaasUnica_Italic_eot from 'assets/fonts/neuehaasunica/2F2779_2_0.eot';
import NeueHaasUnica_Italic_woff2 from 'assets/fonts/neuehaasunica/2F2779_2_0.woff2';
import NeueHaasUnica_Italic_woff from 'assets/fonts/neuehaasunica/2F2779_2_0.woff';
import NeueHaasUnica_Italic_ttf from 'assets/fonts/neuehaasunica/2F2779_2_0.ttf';

import NeueHaasUnica_Light_eot from 'assets/fonts/neuehaasunica/2F2779_3_0.eot';
import NeueHaasUnica_Light_woff2 from 'assets/fonts/neuehaasunica/2F2779_3_0.woff2';
import NeueHaasUnica_Light_woff from 'assets/fonts/neuehaasunica/2F2779_3_0.woff';
import NeueHaasUnica_Light_ttf from 'assets/fonts/neuehaasunica/2F2779_3_0.ttf';

import NeueHaasUnica_Regular_eot from 'assets/fonts/neuehaasunica/2F2779_4_0.eot';
import NeueHaasUnica_Regular_woff2 from 'assets/fonts/neuehaasunica/2F2779_4_0.woff2';
import NeueHaasUnica_Regular_woff from 'assets/fonts/neuehaasunica/2F2779_4_0.woff';
import NeueHaasUnica_Regular_ttf from 'assets/fonts/neuehaasunica/2F2779_4_0.ttf';

import NeueHaasUnica_Thin_eot from 'assets/fonts/neuehaasunica/2F2779_5_0.eot';
import NeueHaasUnica_Thin_woff2 from 'assets/fonts/neuehaasunica/2F2779_5_0.woff2';
import NeueHaasUnica_Thin_woff from 'assets/fonts/neuehaasunica/2F2779_5_0.woff';
import NeueHaasUnica_Thin_ttf from 'assets/fonts/neuehaasunica/2F2779_5_0.ttf';

import NeueHaasUnica_UltraLight_eot from 'assets/fonts/neuehaasunica/2F2779_6_0.eot';
import NeueHaasUnica_UltraLight_woff2 from 'assets/fonts/neuehaasunica/2F2779_6_0.woff2';
import NeueHaasUnica_UltraLight_woff from 'assets/fonts/neuehaasunica/2F2779_6_0.woff';
import NeueHaasUnica_UltraLight_ttf from 'assets/fonts/neuehaasunica/2F2779_6_0.ttf';

export default function() {
	return injectGlobal`
		${normalize()};

		/**
		* @license
		* MyFonts Webfont Build ID 3090297, 2015-09-13T06:38:57-0400
		*
		* The fonts listed in this notice are subject to the End User License
		* Agreement(s) entered into by the website owner. All other parties are
		* explicitly restricted from using the Licensed /fonts/neuehaasunica(s).
		*
		* You may obtain a valid license at the URLs below.
		*
		* Webfont: NeueHaasUnicaPro-Bold by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/bold/
		*
		* Webfont: NeueHaasUnicaPro-BoldItalic by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/bold-italic/
		*
		* Webfont: NeueHaasUnicaPro-Italic by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/italic/
		*
		* Webfont: NeueHaasUnicaPro-Light by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/light/
		*
		* Webfont: NeueHaasUnicaPro-Regular by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/regular/
		*
		* Webfont: NeueHaasUnicaPro-Thin by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/thin/
		*
		* Webfont: NeueHaasUnicaPro-UltraLight by Linotype
		* URL: http://www.myfonts.com/fonts/linotype/neue-haas-unica/ultra-light/
		*
		*
		* License: http://www.myfonts.com/viewlicense?type=web&buildid=3090297
		* Licensed pageviews: 250,000
		* /fonts/neuehaasunica copyright: Copyright &#x00A9; 2015 Monotype Imaging Inc.  All rights reserved.
		*
		* © 2015 MyFonts Inc
		*/

		/* @import must be at top of file, otherwise CSS will not work */
		@import url('//hello.myfonts.net/count/2f2779');

		@font-face {
			font-family: ${FONT_REGULAR};
			font-weight: normal;
			font-style: normal;
			src: url('${NeueHaasUnica_Regular_eot}');
			src: url('${NeueHaasUnica_Regular_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_Regular_woff2}') format('woff2'),
				url('${NeueHaasUnica_Regular_woff}') format('woff'),
				url('${NeueHaasUnica_Regular_ttf}') format('truetype');
		}

		@font-face {
			font-family: ${FONT_REGULAR};
			font-weight: normal;
			font-style: italic;
			src: url('${NeueHaasUnica_Italic_eot}');
			src: url('${NeueHaasUnica_Italic_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_Italic_woff2}') format('woff2'),
				url('${NeueHaasUnica_Italic_woff}') format('woff'),
				url('${NeueHaasUnica_Italic_ttf}') format('truetype');
		}

		@font-face {
			font-family: ${FONT_REGULAR};
			font-weight: bold;
			font-style: normal;
			src: url('${NeueHaasUnica_Bold_eot}');
			src: url('${NeueHaasUnica_Bold_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_Bold_woff2}') format('woff2'),
				url('${NeueHaasUnica_Bold_woff}') format('woff'),
				url('${NeueHaasUnica_Bold_ttf}') format('truetype');
		}

		@font-face {
			font-family: ${FONT_REGULAR};
			font-weight: bold;
			font-style: italic;
			src: url('${NeueHaasUnica_Bold_Italic_eot}');
			src: url('${NeueHaasUnica_Bold_Italic_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_Bold_Italic_woff2}') format('woff2'),
				url('${NeueHaasUnica_Bold_Italic_woff}') format('woff'),
				url('${NeueHaasUnica_Bold_Italic_ttf}') format('truetype');
		}

		@font-face {
			font-family: ${FONT_LIGHT};
			src: url('${NeueHaasUnica_Light_eot}');
			src: url('${NeueHaasUnica_Light_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_Light_woff2}') format('woff2'),
				url('${NeueHaasUnica_Light_woff}') format('woff'),
				url('${NeueHaasUnica_Light_ttf}') format('truetype');
		}

		@font-face {
			font-family: ${FONT_THIN};
			src: url('${NeueHaasUnica_Thin_eot}');
			src: url('${NeueHaasUnica_Thin_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_Thin_woff2}') format('woff2'),
				url('${NeueHaasUnica_Thin_woff}') format('woff'),
				url('${NeueHaasUnica_Thin_ttf}') format('truetype');
		}

		@font-face {
			font-family: ${FONT_ULTRALIGHT};
			src: url('${NeueHaasUnica_UltraLight_eot}');
			src: url('${NeueHaasUnica_UltraLight_eot}?#iefix')
					format('embedded-opentype'),
				url('${NeueHaasUnica_UltraLight_woff2}') format('woff2'),
				url('${NeueHaasUnica_UltraLight_woff}') format('woff'),
				url('${NeueHaasUnica_UltraLight_ttf}') format('truetype');
		}

		*,
		*:before,
		*:after {
			box-sizing: border-box;
		}

		html {
			font-size: 16px;
			font-family: ${FONT_FAMILY_REGULAR};
			font-weight: normal;
			-webkit-font-smoothing: antialiased;
			background-color: #fff;
			color: #000;
		}

		#root {
			width: 100vw;
			height: 100vh;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		h1, h2, h3, h4, h5, h6 {
			margin: 0;
			font-weight: inherit;
		}

		p {
			margin: 0;
		}

		ul, ol {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		table {
			border-collapse: collapse;
		}

		button {
			font: inherit;
			color: inherit;
			border-radius: 0;
		}

		input, textarea {
			font: inherit;
		}

		input[type="number"] {
			appearance: textfield;

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				appearance: none;
				margin: 0;
			}
		}

		#adalIdTokenFrame {
			top: 0;
		}
	`;
}
