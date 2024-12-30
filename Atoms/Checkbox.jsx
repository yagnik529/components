import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, label, checked, onChange, disabled }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox-input"
      />
      <label
        htmlFor={id}
        className={`checkbox-label ${disabled ? "disabled" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;
