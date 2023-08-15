import React from "react";
import { Autocomplete, Loader } from '@mantine/core';

const FormRow = ({ type, name, labelText, value, handleChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  );
};

export default FormRow;
