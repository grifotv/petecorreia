import { TYPE_SIZE_XXLARGE, TYPE_SIZE_LARGE } from './typography';

export const LAYOUT_WIDTH_MAX = '1024px';
export const LAYOUT_WIDTH_MIN = '320px';
export const LAYOUT_PADDING = TYPE_SIZE_XXLARGE;
export const LAYOUT_GUTTER = TYPE_SIZE_LARGE;
export const LAYOUT_CONTENT = 620 / parseInt(LAYOUT_WIDTH_MAX, 10) * 100 + '%';
export const LAYOUT_SIDEBAR = 364 / parseInt(LAYOUT_WIDTH_MAX, 10) * 100 + '%';
