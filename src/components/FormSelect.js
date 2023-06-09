import React from "react";

const FormSelect = ({ labelText, options, name, handleChange, value }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1">{labelText}</label>
      <select
        className="input-field"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
