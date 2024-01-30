import React from 'react'

import {
    CardContainer,
} from './styles.js'

const Card = ({data}) => {
  
  return (
    <CardContainer key={data.id}>
        <div className="card__img">
            <img src={data.urlImg} alt={data.name} />
        </div>
        <span className="card__title">{data.name}</span>
        <span className="card__describle">{data.describle}</span>
    </CardContainer>
  )
}

export default Card