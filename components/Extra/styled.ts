import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.p`
    font-family: var(--p2-font-family);
    font-size: var(--p2-font-size);
    color: transparent;
    -webkit-text-stroke: 0.8px var(--primary);
    text-stroke: 0.8px var(--primary);
    margin-left: 15%;
    padding: 0 10px;
    width: 20%;
    text-align: right;
    opacity: calc(var(--bg-detail-opacity) + 0.2);
    
    @media (max-width: 850px) { 
        display: none;
    }
`
