import styled from 'styled-components';

export const CardsContainer = styled.div`
    background-color: var(--bg-dark);
    border-radius: 8px;
    padding: 20px;
    margin-top: 8px;
    .title {
        color: var(--white);
        font-size: var(--font-title);
        font-weight: bold;
        margin-bottom: 36px;
        display: block;
    }
`
export const CardsList = styled.div`

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, 180px);
        grid-gap: 24px;
        max-height: 540px;
        overflow-y: auto;
        p {
            color: var(--white);
            font-size: var(--font-xl);
            font-weight: bold;
        }
        @media (max-width: 425px) {
            grid-template-columns: 1fr;
        }
    }
`