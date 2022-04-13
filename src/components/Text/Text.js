import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Text.module.css';

const Text = ({ element, className, strong, italic, disabled, children }) => {
	let option = "";
	const options = {
		italic: <i>{children}</i>,
		strong: <strong>{children}</strong>,
		italicStrong: <strong><i>{children}</i></strong>,
		default: children
	}
	
	if (strong && italic) {
		option = 'italicStrong'
	} else if (strong) {
		option = 'strong'
	} else if (italic) {
		option = 'italic'
	} else {
		option = 'default'
	}
	
	const childElement = options[option]

	return React.createElement(element, {
		className: cn(s.root, className, {[s.disabled]: disabled}),
	}, childElement);
}

Text.defaultProps = {
  element: 'div',
	className: null,
	strong:  false,
	italic: false,
	disabled: false,
};

Text.propTypes = {
	element: PropTypes.oneOf( ['div', 'p', 'span']).isRequired,
	className: PropTypes.string,
	strong: PropTypes.bool,
	italic: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node,
}

export default Text;
