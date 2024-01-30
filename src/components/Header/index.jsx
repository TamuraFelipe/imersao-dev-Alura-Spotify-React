/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './styles.js';

import Button from "../Button/index.jsx";
import ButtonArrow from "../Button_arrows/index.jsx";

import arrowLeft from '../../assets/icons/small-left.png';
import arrowRight from '../../assets/icons/small-right.png';
import loupe from '../../assets/icons/search.png';

import {
    MainContainer,
    MainNavigation,
    Navigation,
    NavigationArrows,
    NavigationSearch,
    NavigationActions,

} from './styles.js'
import Input from "../Input/index.jsx";

const Header = ({onSearch, valueSearch}) => {
    
    return (
        <MainContainer>
            <MainNavigation>
                <Navigation>
                    <NavigationArrows>
                        <ButtonArrow src={arrowLeft}/>
                        <ButtonArrow src={arrowRight}/>
                    </NavigationArrows>
                    <NavigationSearch>
                        <img src={loupe} alt="" />
                        <Input 
                        type="text" 
                        text="O que você quer ouvir" 
                        id="search"
                        value={valueSearch}
                        search={onSearch}
                        />
                    </NavigationSearch>
                    <NavigationActions>
                        <a className="btn-link" href="0">Inscreva-se</a>
                        <Button className="btn" title='Entrar' />
                    </NavigationActions>
                </Navigation>
            </MainNavigation>
        </MainContainer>
    );
}

export default Header;
