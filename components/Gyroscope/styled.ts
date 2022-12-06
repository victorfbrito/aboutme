import styled, { keyframes } from 'styled-components'

interface Ring {
    speed: number
    delay: number
    index: number
}

const rotation_directions = [
    keyframes`
        100% {
            transform: rotate3d(0,1,0,180deg);
        }
    `,
    keyframes`
        100% {
            transform: rotate3d(1,0,0,180deg);  
        }
    `,
    keyframes`
        100% {
            transform: rotate3d(1,1,0,180deg); 
        }
    `
]

export const MainWrapper = styled.div`
` 

export const Ring = styled.p<Ring>`
    width: 100px; height: 100px;
    border-radius: 50%;
    border: 1px solid var(--primary);
    opacity: 0.1;
    position: absolute;
    top: 50%; left: 50%;
    margin: -50px 0 0 -50px;

    animation: ${props => rotation_directions[props.index]} ${props => props.speed}s infinite;
    animation-delay: :${props => props.delay}s;
`
