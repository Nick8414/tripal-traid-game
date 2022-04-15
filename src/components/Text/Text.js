import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Text.module.css';

const Text = ({ element, className, strong, italic, disabled, children }) => {
	console.log(s);
	
	return React.createElement(element, {
		className: cn(s.root, className, {[s.disabled]: disabled, [s.italic]: italic, [s.strong]: strong}),// ??
	}, children);
}

Text.defaultProps = {
  element: 'div',
	className: null,
	strong:  false,
	italic: false,
	disabled: false,
};

Text.propTypes = {
	element: PropTypes.oneOf( ['div', 'p', 'span']),
	className: PropTypes.string,
	strong: PropTypes.bool,
	italic: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node,
}

export default Text;
