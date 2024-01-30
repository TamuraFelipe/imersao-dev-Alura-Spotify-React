import styled from 'styled-components';

export const CardContainer = styled.a`
    background-color: #181818;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: background-color .5s;
    cursor: pointer;
    .card__img {
        position: relative;
        img {
            display: block;
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 16px;
        }
        &::before {
            content: "\u25B6"; 
            font-size: 20px; 
            color: var(--black);
            position: absolute;
            bottom: 15%;
            right: 5%;
            width: 45px;
            height: 45px;
            background-color: #1ed760;
            border-radius: 50%;
            z-index: 999;
            display: none;
            animation: showPlayUp .5s forwards;
        }
    }
    &:hover {
        background-color: var(--bg-darkgray);
    }
    &:hover {
        .card__img::before {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .card__title {
        color: var(--white);
        font-weight: 500;
        font-size: var(--font-xl);
        display: block;
        margin-bottom: 16px;
    }
    .card__describle {
        color: var(--white);
        font-size: var(--font-lg);
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Número de linhas que você deseja exibir */
        -webkit-box-orient: vertical;
    }
    
    
    
    @keyframes showPlayUp{
    from {
        opacity: 0;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, -5px, 0);
    }
}
`
