import React from "react";
import { InputDiv } from "./I__style";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <InputDiv>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </InputDiv>
  );
};

export default Input;
