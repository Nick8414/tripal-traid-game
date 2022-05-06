import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as AnchorIcon } from "./assets/link_icon.svg";

import s from "./AnchorLink.module.scss";

const normalizeAnchorName = (anchorName) => {
  if (typeof anchorName === "string") {
    return anchorName.trim().replace(/ +/g, "_");
  }
};

export default function AnchorLink({ anchorName }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleIconClick = () => {
    const uri = location.pathname + '#' +  normalizeAnchorName(anchorName);
    navigate(uri);
  };

  return (
    <div id={normalizeAnchorName(anchorName)} className={s.root} onClick={handleIconClick}>
      <AnchorIcon />
    </div>
  );
}

AnchorLink.propTypes = {
  anchorName: PropTypes.string,
};
