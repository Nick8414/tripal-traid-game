import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Button.module.scss";

const Button = ({ children, className, white, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className={cn(s.button, className, {
        [s.white]: white,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
	children: 'Button',
	white: false,
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
	white: PropTypes.bool,
};

export default Button;
