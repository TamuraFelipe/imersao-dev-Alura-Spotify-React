import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 8px;
    grid-column: 1 / 3;
`
export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(174,40,150);
    background: -moz-linear-gradient(90deg, rgba(174,40,150,1) 0%, rgba(81,154,244,1) 97%);
    background: -webkit-linear-gradient(90deg, rgba(174,40,150,1) 0%, rgba(81,154,244,1) 97%);
    background: linear-gradient(90deg, rgba(174,40,150,1) 0%, rgba(81,154,244,1) 97%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ae2896",endColorstr="#519af4",GradientType=1);
    padding: 16px;
    gap: 16px;

    .title {
        display: block;
        font-weight: bold;
        color: var(--white);
        margin-bottom: 16px;
    }
    .subtitle {
        display: block;
        font-size: var(--font-xl);
        font-weight: 500;
        color: var(--white);
    }
    .btn {
        padding: 20px 24px;
        font-weight: bold;
    }
`