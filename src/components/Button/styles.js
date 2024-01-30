import styled from 'styled-components';

export const Btn = styled.button`
    padding: 8px 20px;
    border-radius: 99999px;
    background-color: var(--white);
    color: var(--black);
    font-weight: bold;
    cursor: pointer;
    white-space: nowrap;
    width: auto;
    &:hover {
        border: 1px solid var(--white);
        margin-bottom: -2px;
    }
    .btn-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--black);
    }
    .btn-mobile {
        color: var(--white);
        display: none;
    }
`







