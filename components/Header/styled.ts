import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.a`
font-family: var(--action-font-family);
// font-size: var(--action-font-size);
font-weight: var(--action-font-weight);
text-transform: uppercase;
background-color: black;
color: var(--action);
display: flex;
width: 100%;
height: 4vh;
align-items: center;
& > p {
    margin: 0;
    white-space: nowrap;
    font-size: 4vh;
}
`
