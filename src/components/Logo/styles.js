import styled from 'styled-components';

export const LogoContainer = styled.div`

    img {
        display: block;
        width: 80px;
    }
    @media (max-width: 560px) {
        img {
            width: 50px;
            margin-left: -16px;
        }
    }
`