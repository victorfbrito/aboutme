import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
    pointer-events: none;
    background-color: black;
    z-index: -10;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: end;
`

export const Background = styled.div`
    background: var(--background);
    width: 100vw;
    height: 100vh;
`