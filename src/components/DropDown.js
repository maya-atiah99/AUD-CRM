import React, { useState } from 'react'
import Select from 'react-select';
const DropDown = ({ label, isRequired, value, setValue, data, placeholder, width }) => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div className='textBox-container' style={{width:width}}>
        {/* {label && (
          <label htmlFor={label}>
            {label}
            {isRequired && <span className='required'>*</span>}
          </label>
        )
        }
        <select
          id={label}
          required={isRequired}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {data.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select> */}
         <label htmlFor={label}>
            {label}
            {isRequired && <span className='required'>*</span>}
          </label>
          <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
       
      />
      </div>
    );
  };
export default DropDown
