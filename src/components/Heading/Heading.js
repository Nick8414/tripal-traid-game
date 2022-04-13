import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Heading.module.css';

const Heading = ({ children, level = 1, className }) => {
	const el = `h${level}`;
	return React.createElement(el, {
		className: cn(s.root, className)
	}, children);
}

Heading.propTypes = {
	level: PropTypes.oneOf([ 1, 2, 3, 4, 5]).isRequired,
	className: PropTypes.string,
	children: PropTypes.node,
}

export default Heading;