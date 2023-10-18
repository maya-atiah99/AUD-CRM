import React from 'react'

const AUDButton = ({ text, handleOnCLick, icon }) => {
  return (
    <div >
  <button onClick={()=>handleOnCLick()} className="aud-button">
      {icon && <img src={icon} alt="Icon" className="button-icon" />}
      {text}
    </button>

    </div>
  )
}

export default AUDButton
