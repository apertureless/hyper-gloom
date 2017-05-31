'use strict';
const foregroundColor = '#F1EFF7';
const backgroundColor = '#292B43';
const red = '#E94770';
const green = '#42DFA1';
const yellow = '#FDBB6F';
const blue = '#7CA7F7';
const magenta = '#FB667C';
const cyan = '#6DD9EE';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#97979b',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}

		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		.tab_active:before {
			border-color: rgba(255, 106, 193, 0.25);
		}

		.term_fit:not(.term_term) {
			opacity: 0.6;
		}

		.term_fit.term_active {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
			will-change: opacity;
		}

		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: rgba(255, 106, 193, 0.4);
			transform: scaleX(0);
		}

		.tab_first {
			border-left-color: transparent !important;
		}

		.tab_tab:not(.tab_active) {
			color: #666;
		}

		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0.0, 0.0, 0.2, 1);
		}
	`
});
