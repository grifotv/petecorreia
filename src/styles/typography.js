import { css } from 'styled-components';
import { BREAKPOINT_FINAL, BREAKPOINT_MAJOR } from './responsive';

// http://modularscale.com/scale/?px1=16&px2=60&ra1=1.5&ra2=0

export const FONT_REGULAR = 'NeueHaasUnica';
export const FONT_LIGHT = 'NeueHaasUnicaPro-Light';
export const FONT_THIN = 'NeueHaasUnicaPro-Thin';
export const FONT_ULTRALIGHT = 'NeueHaasUnicaPro-UltraLight';

export const FONT_FAMILY_REGULAR =
	'"NeueHaasUnica", "Helvetica Neue", helvetica, arial, sans-serif';
export const FONT_FAMILY_LIGHT =
	'"NeueHaasUnicaPro-Light", "Helvetica Neue", helvetica, arial, sans-serif';
export const FONT_FAMILY_THIN =
	'"NeueHaasUnicaPro-Thin", "Helvetica Neue", helvetica, arial, sans-serif';
export const FONT_FAMILY_ULTRALIGHT =
	'"NeueHaasUnicaPro-UltraLight", "Helvetica Neue", helvetica, arial, sans-serif';

export const TYPE_SIZE_BASE = '16px';
export const TYPE_SIZE_MOBILE = '14px';
export const TYPE_LINE_HEIGHT = '22px';
export const TYPE_SPACING = '24px';

export const TYPE_SIZE_TINY = '12.000px';
export const TYPE_SIZE_SMALL = '14.000px';
export const TYPE_SIZE_NORMAL = TYPE_SIZE_BASE;
export const TYPE_SIZE_MEDIUM = '17.778px';
export const TYPE_SIZE_LARGE = '24.000px';
export const TYPE_SIZE_XLARGE = '36.000px';
export const TYPE_SIZE_XXLARGE = '40.000px';
export const TYPE_SIZE_BIG = '81.000px';
export const TYPE_SIZE_HUGE = '121.500px';
export const TYPE_SIZE_GIGANTIC = '182.250px';

export const TYPE_HEADING_1 = TYPE_SIZE_XLARGE;
export const TYPE_HEADING_2 = TYPE_SIZE_LARGE;
export const TYPE_HEADING_3 = TYPE_SIZE_MEDIUM;
export const TYPE_HEADING_4 = TYPE_SIZE_NORMAL;
export const TYPE_HEADING_5 = TYPE_SIZE_SMALL;
export const TYPE_HEADING_6 = TYPE_SIZE_TINY;
export const TYPE_HEADING_BIG = TYPE_SIZE_BIG;
export const TYPE_HEADING_HUGE = TYPE_SIZE_HUGE;
export const TYPE_HEADING_GIGANTIC = TYPE_SIZE_GIGANTIC;

export function tracking(val) {
	return val / 1000 * 1 + 'em';
}

export function headingHuge(margins = true) {
	return css`
		font-size: ${TYPE_HEADING_GIGANTIC};
		line-height: 1.11em;
		letter-spacing: ${tracking(-60)};
		font-family: ${FONT_FAMILY_ULTRALIGHT};
		font-weight: normal;

		@media (max-width: ${BREAKPOINT_FINAL}) {
			font-size: ${TYPE_HEADING_HUGE};
		}

		@media (max-width: ${BREAKPOINT_MAJOR}) {
			font-size: ${TYPE_HEADING_BIG};
		}

		${margins &&
			css`
				margin-top: ${parseInt(TYPE_SPACING, 10) * 2};
				margin-bottom: ${TYPE_SPACING};

				&:first-child {
					margin-top: 0;
				}
			`};
	`;
}
