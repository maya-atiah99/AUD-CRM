import React from 'react'

const SectionTitle = ({title,dotted}) => {

  return (
    <div className='title-with-line'>
      
      <h4 className="title">{title}</h4>
      <div className={`${dotted ? "dotted-line" : 'line'}`}></div>
    </div >
  )
}

export default SectionTitle
