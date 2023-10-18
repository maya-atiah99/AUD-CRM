import React from 'react'
import RadioButton from './RadioButton'

const RadioButtonGroup = ({ options, selectedValue, onRadioChange}) => {
  return (
    <div className='radio-buttons-container' >
        {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={onRadioChange}
        />
      ))}
    </div>
  )
}

export default RadioButtonGroup
