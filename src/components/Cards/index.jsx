/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'

import Card from '../Card/index.jsx'

import {
    CardsContainer,
    CardsList,

} from './styles.js'

const Cards = ({dataSearch}) => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null)

    useEffect( () => {
        fetch(`https://my-json-server.typicode.com/tamurafelipe/jsonfake/artists?name_like=${dataSearch}`)
        .then( response => response.json())
        .then( data => {
            setSearch(data);
        })
    }, [dataSearch])    
    
    useEffect( () => {
        fetch('https://my-json-server.typicode.com/tamurafelipe/jsonfake/artists')
        .then( response => response.json())
        .then( data => setData(data))
    }, [])
    
  return (
    <CardsContainer>
        <div className="main__content__header">
            <span className="title">Spotify Playlist</span>
        </div>
        <CardsList>
            <div className="cards">
            {
                (dataSearch !== undefined && (dataSearch ? search : data)) ? (
                    (dataSearch ? search : data).length > 0 ? (
                    (dataSearch ? search : data).map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                    ) : (
                    <p>Nenhum artista encontrado!</p>
                    )
                ) 
                : 
                (
                    <p>{dataSearch !== undefined ? 'Artista não encontrado!' : 'Sem dados disponíveis.'}</p>
                )
            }
            </div>
        </CardsList>
    </CardsContainer>
  )
}

export default Cards