import React from "react";

import RadioButton from "../../components/Inputs/RadioButton";

const RadioButtonGroup = ({
  label,
  required,
  options,
  selectedValue,
  name,
  onRadioChange,
}) => {
  return (
    <div className='radio-buttons-container'>
      <label htmlFor={label} className='radioBtn-label'>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          handleOnChange={() => onRadioChange(name, option.value)}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
