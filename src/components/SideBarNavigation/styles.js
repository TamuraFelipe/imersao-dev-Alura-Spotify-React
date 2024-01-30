import styled from 'styled-components';

export const NavContainer = styled.ul`
    margin-top: 10px;
    li {
        padding: 12px 0;
        a {
            display: flex;
            align-items: center;
            gap: 20px;
            color: var(--color-darkgray);
            text-decoration: none;
            font-weight: bold;
            transition: color .5s;
            &:hover {
                color: var(--white);
            }
        }
    }
    @media (max-width: 560px) {
        overflow: hidden;
    }
`