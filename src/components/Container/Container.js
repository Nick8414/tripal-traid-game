import React from 'react'

import PropTypes from 'prop-types';

import s from './Container.module.scss';

export const Container = ({ children, className }) => {
	return (
		<div className={s.root + ' ' + className}>
			{ children }
		</div>
	)
}

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

