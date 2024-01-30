import React from 'react'

import {
    InputContainer
} from './styles.js'

const Input = ({type, text, id, search, value}) => {
  
  function handleChange(event) {
    search(event.target.value)
  }

  return (
    <>
      <InputContainer 
      type={type}
      placeholder={text}
      id={id}
      value={value}
      onChange={handleChange}
      />
      
    </>
   )
}

export default Input
