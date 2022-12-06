import styled, { keyframes } from 'styled-components'

const noiseAnimation = keyframes`
    0% {
    transform: translateX(0px,0px); }
    10% {
    transform: translate(-100px, 100px);
    }
    20% {
    transform: translate(150px, -100px);
    }
    30% {
    transform: translate(-100px,100px);
    }
    40% {
    transform: translate(100px, -150px);
    }
    50% {
    transform: translate(-100px, 200px);
    }
    60% {
    transform: translate(-200px, -100px);
    }
    70% {
    transform: translateY(50px, 100px);
    }
    80% {
    transform: translate(100px, -150px);
    }
    90% {
    transform: translate(0px, 200px);
    }
    100% {
    transform: translate(-100px, 100px);
    }
`

export const NoiseBg = styled.div`
    background-image: url("noisy.png");
    min-width: 300vw;
    min-height: 300vh;
    opacity: 0.2;
    animation: ${noiseAnimation} 1s steps(8,end) infinite both;
    z-index: 9999;
`

export const MainWrapper = styled.div`
    pointer-events: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`