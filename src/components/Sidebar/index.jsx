import React from 'react'

import logo from '../../assets/icons/logo-spotify.png';
import logoMobile from '../../assets/icons/spotify_green.png';

import Logo from '../Logo/index.jsx'
import SidebarNavigation from '../SideBarNavigation/index.jsx';
import SidebarLibrary from '../SideBarLibrary/index.jsx';

import {
    SidebarContainer,
    NavigationContainer
} from './styles.js'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <NavigationContainer>
          <Logo 
          img={logo}
          imgMobile={logoMobile}
          />
            
          <SidebarNavigation />
        </NavigationContainer>
        <SidebarLibrary />
    </SidebarContainer>
  )
}

export default Sidebar