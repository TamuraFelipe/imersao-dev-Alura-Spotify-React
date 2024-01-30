/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {
  BtnArrow,

} from './styles.js';

const ButtonArrow = ({src, className}) => {
  return (
    <BtnArrow className={className}>
        <img src={src} />
    </BtnArrow>
  )
}

export default ButtonArrow;
