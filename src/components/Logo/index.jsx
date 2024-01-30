import React from 'react'

import {
  LogoContainer,
} from './styles.js'

const Logo = ({img, imgMobile}) => {
  return (
    <LogoContainer>
      <a href="0">
        <figure>
          <picture>
              <source width='100' media="(max-width: 560px)" srcSet={imgMobile} />
              <img src={img} alt="Logo Spotify" />
          </picture>
        </figure>
      </a>
    </LogoContainer>
  )
}

export default Logo
