import React from "react";
import PropTypes from "prop-types";

import cn from "classnames";

import s from './Input.module.scss'

export default function Input({type, className, labelName, idFor, color, name, value, onChange,  required, error}) {
  return (
    <div className={cn(s.root, className, s[color])}>
      <input type={type} id={idFor} name={name} value={value} required={required} onChange={onChange} />
      <label htmlFor={idFor}>{labelName}</label>
      <div className={s.bar}></div>
			{ error && <div className={s.error}> {error} </div> }
    </div>
  );
}

Input.defaultProps = {
	required: false,
	type: 'text',
	value: '',
}

Input.propTypes = {
	required: PropTypes.bool,
	type: PropTypes.string,
	className: PropTypes.string,
	labelName: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	color: PropTypes.oneOf(['default', 'white']), //style
}
