import React from 'react'

const DateTime =({ label, required, value, setValue, type, placeholder,width }) => {
    return (
      <div className='textBox-container' style={{width:width}}>
  <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
        <input
          type="date"
          id={label}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=''
          className='text-input'
        />
      </div>
    );
  };

export default DateTime
