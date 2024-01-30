import React, { useEffect } from 'react'

import {
  NavContainer,

} from './styles.js'

const SidebarNavigation = () => {
  
  useEffect(() => {
    const linkSearch = document.querySelector('#searchLink');
    const inputSearch = document.querySelector('#search');
    const handleClick = (event) => {
      event.preventDefault(); 
      inputSearch.focus();
    };
    if (linkSearch) {
      linkSearch.addEventListener('click', handleClick);
    }
    return () => {
      // Remover o evento ao desmontar o componente para evitar vazamentos de memória
      if (linkSearch) {
        linkSearch.removeEventListener('click', handleClick);
      }
    };
  }, []);
  
  
  return (
    <NavContainer>
      <li>
        <a href="/" id="home">
            <span className="fa fa-home"></span>
            <span>Home</span>
        </a>
      </li>
      <li>
          <a href="0" id="searchLink">
              <span className="fa fa-search"></span>
              <span>Search</span>
          </a>
      </li>
      <li>
          <a href="0">
              <span className="fa fa-compact-disc"></span>
              <span>Álbuns</span>
          </a>
      </li>
      <li>
          <a href="0">
              <span className="fa fa-star"></span>
              <span>Favoritos</span>
          </a>
      </li>
    </NavContainer>
  )
}

export default SidebarNavigation