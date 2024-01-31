import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: var(--bg-dark);
    border-radius: 8px;
    padding: 20px;
`
export const MainNavigation = styled.div`
    background-color: var(--bg-dark);
    border-radius: 8px;
    
`;
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    @media (max-width: 560px) {
        flex-direction: column;
    }
`
export const NavigationArrows = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
    @media (max-width: 560px) {
        display: none;
    }
`
export const NavigationSearch = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 8px 16px;
    margin-right: auto;
    background-color: var(--bg-darkgray);
    border-radius: 99999px;
    max-width: 390px;
    width: 100%;
    border: 1px solid transparent;
    &:focus-within {
        border: 1px solid var(--white);
    }
    input {
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 12px 0;
        margin-left: 16px;
        font-size: var(--font-lg);
        color: var(--white);
    }
    @media (max-width: 560px) {
        width: 100%;
        margin-bottom: 36px;
    }
`
export const NavigationActions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    .btn-link {
        font-size: var(--font-xl);
        color: var(--white);
        font-weight: bold;
        transition: all .5s;
        &:hover {
            text-decoration: underline;
        }
    }
`
