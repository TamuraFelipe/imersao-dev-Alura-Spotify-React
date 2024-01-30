import React from 'react'

import {
    FooterContainer,
    FooterContent,

} from './styles.js'
import Button from '../Button'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterContent>
            <div>
                <span className="title">Prévia do Spotify</span>
                <span className="subtitle">Faça o login para ouvir músicas e podcasts ilimitados com anúncios ocasionais. Não precisa de cartão de crédito.</span>
            </div>
            
            <Button className='btn' title='Inscreva-se'/>
            
        </FooterContent>
    </FooterContainer>
  )
}

export default Footer