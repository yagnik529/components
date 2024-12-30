import React from "react";
import PropTypes from "prop-types";
import "./Spinner.css";

const Spinner = ({ size, color, thickness }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderWidth: thickness,
    borderColor: `${color} transparent transparent transparent`,
  };
  return <div className="spinner m-64" style={spinnerStyle}></div>;
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.string,
};

Spinner.defaultProps = {
  size: "40px",
  color: "#4caf50",
  thickness: "4px",
};

export default Spinner;
