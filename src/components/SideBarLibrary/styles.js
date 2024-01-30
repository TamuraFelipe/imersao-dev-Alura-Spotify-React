import styled from 'styled-components';

export const LibraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--bg-dark);
    border-radius: 8px;
    padding: 4px 8px;
    color: var(--color-darkgray);
    font-weight: 600;
    .library__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 10px;
        button {
            display: flex;
            align-items: center;
            font-weight: 700;
            gap: 20px;
            align-items: center;
            color: var(--color-darkgray);
            cursor: pointer; 
            transition: color .5s;
            svg {
                path {
                    fill: var(--color-darkgray);
                    transition: fill .5s;
                }
            }
            &:hover {
                color: var(--white);
                fill: var(--white);
            }
            &:hover {
                svg {
                    path {
                        color: var(--white);
                        fill: var(--white);
                    }
                }
            }
        }
    }
    .library__actions {
        background-color: var(--bg-darkgray);
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 20px;
        .text {
            display: block;
            color: var(--white);
            margin-bottom: 14px;
        }
        .title {
            font-weight: bold;
            font-size: var(--font-xl);
        }
        .subtitle {
            margin-bottom: 28px;
            font-weight: 500;
            font-size: var(--font-md);
        }
    }
    .cookies {
        margin: 25px 20px;
        a {
            color: var(--color-darkgray);
            font-weight: 500;
            font-size: var(--font-sm);
            text-decoration: none;
            transition: all .5s;
            &:hover {
                text-decoration: underline;
                color: var(--white);
            }
        }
    }
    .languages__btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: transparent;
        border: 1px solid var(--color-darkgray);
        color: var(--white);
        font-weight: bold;
        margin: 8px;
        padding: 8px;
        border-radius: 99999px;
    }

    @media (max-width: 560px){
        overflow: hidden;
        padding-bottom: 16px;

        .library__actions {
            padding: 8px;
            .text,
            .btn {
                display: none;
            }
        }
        .cookies {
            margin: 0 0 24px;
        }
        .languages__btn {
            display: none;
        }
        
    }
`