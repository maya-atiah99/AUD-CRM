import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const PhoneNumber = ({ label, required, value, setValue,width }) => {

    return (
      <div style={{width:width}}>
           {label ? <label htmlFor={label}>{label}<span className="required">*</span></label> : "" } 
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
