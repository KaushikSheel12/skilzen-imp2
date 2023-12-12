import React from 'react';

const InputField = ({ label, value, min, max, step, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  );
};

export default InputField;
