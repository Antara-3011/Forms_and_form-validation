import React, { useState } from "react";
import "./forminput.css";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>

      {/* <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused}
      /> */}
      {inputProps.type === "select" ? (
        <select
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        >
          <option value="" disabled>
            {inputProps.placeholder}
          </option>
          {inputProps.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
