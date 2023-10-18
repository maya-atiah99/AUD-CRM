import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const PhoneNumber = ({ label, required, value, setValue, placeholder,width }) => {

    return (
      <div style={{width:width}}>
        <label htmlFor={label}>{label}</label>
       <PhoneInput
       name='phone'
       placeholder=''
       value={value || 'AE'}  
       onChange={setValue}
       defaultCountry='AE'
       autoComplete='off'/>
      </div>
    );
  };

export default PhoneNumber
