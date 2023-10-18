import React from 'react'
import LogoContainer from './LogoContainer'
import StepperComponent from './Stepper/StepperComponent'


const AudAppHeader = () => {
  return (
    <div className='aud-app-header'>
     <LogoContainer width="200px" height="40px"/>
      <StepperComponent/>
    </div>
  )
}

export default AudAppHeader
