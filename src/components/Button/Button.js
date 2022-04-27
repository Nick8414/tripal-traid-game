import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Button.module.scss";

const Button = ({ children, className, color, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className={cn(s.root, className, s[color])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
	children: 'Button',
	color: 'default',
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
	color: PropTypes.oneOf(['default', 'black']),
};

export default Button;
