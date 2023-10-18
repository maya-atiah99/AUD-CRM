import React from 'react'

const DocumentUpload = ({text,file,limit,restriction,width}) => {
  return (
    <label className='file-input-container' style={{width:width}}>
      <img src='/images/Layer 25.svg' alt='layer'/>
      <input type="file" className='file-input' />
     <p className='p-style'> {text} </p> 
    </label>
  )
}

export default DocumentUpload
