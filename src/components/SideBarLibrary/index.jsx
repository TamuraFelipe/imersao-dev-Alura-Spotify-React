import React from 'react'

import Button from '../Button';

import {
  LibraryContainer,

} from './styles.js'

const SidebarLibrary = () => {
  return (
    <LibraryContainer>
        <div className="library__content">
            <button>
                <span className="fa fas fa-book"></span>
                <span>Minha Biblioteca</span>
            </button>
            <button>
                <span className="fa fa-plus"></span>
            </button>
        </div>
        
        <div className="library__actions">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É muito fácil, nós iremos ajudar!</span>
            <Button className='btn' title='Criar playlist'/>
            <button className="btn-mobile"><span className="fa fa-play"></span></button>
        </div>
        <div className="library__actions">
            <span className="text title">Encontre alguns podcasts para seguir</span>
            <span className="text subtitle">Nós iremos manter os episódios atualizados</span>
            <Button className='btn' title='Encontre podcast'/>
            <button className="btn-mobile"><span className="fa fa-plus"></span></button>
        </div>

        <div className="cookies">
            <a href="0">
                Cookies
            </a>
        </div>

        <div className="languages">
            <button className="languages__btn">
                <span className="fa fa-globe"></span>
                <span>Português <small>(Brasil)</small></span>
            </button>
            <button className="btn-mobile"><span className="fa fa-globe"></span></button>
        </div>
    </LibraryContainer>
  )
}

export default SidebarLibrary;