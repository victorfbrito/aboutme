import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
    font-family: var(--p2-font-family);
    font-size: var(--p2-font-size);
    font-weight: var(--p2-font-weight);
    text-indent: 25px;
    margin-left: 65%;
    padding: 0 10px;
    margin-right: 5%;
    @media screen and (max-width: 850px) {
        display: none;
    }
`
