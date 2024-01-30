/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {
    Btn,

} from './styles.js';

const Button = ({src, className, title}) => {
  return (
    <Btn className={className}>
        <img src={src} />
        {title}
    </Btn>
  )
}

export default Button;
