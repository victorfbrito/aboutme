import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
    text-indent: 25px;
    font-family: var(--p1-font-family);
    font-size: var(--p1-font-size);
    font-weight: var(--p1-font-weight);
    margin-left: 5%;
    padding: 0 10px;
    & > p {
        width: 60%;
        &:last-of-type {
            display:none;
            font-family: var(--p2-font-family);
            font-size: var(--p2-font-size);
            font-weight: var(--p2-font-weight);
            @media screen and (max-width: 850px) {
                display: block;
            }
        }
        @media screen and (max-width: 850px) {
            width: 90%;
        }
    }
`
