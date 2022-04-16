import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Heading.module.scss';

const Heading = ({ children, level = 1, className, backLine }) => {
	const el = `h${level}`;
	return React.createElement(el, {
		className: cn(s.root, className, {[s.backline] : backLine})
	}, children);
}

Heading.defaultProps = {
	backLine: false
}

Heading.propTypes = {
	level: PropTypes.oneOf([ 1, 2, 3, 4, 5]),
	className: PropTypes.string,
	children: PropTypes.node,
	backLine: PropTypes.bool,
}

export default Heading;