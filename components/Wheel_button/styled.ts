import styled, { keyframes } from 'styled-components'

interface LetterProps {
    radius: number
    origin?: number
    ea?: string
}

interface TextProps {
    radius: number
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`

export const MainWrapper = styled.a<LetterProps>`
    width: ${props => (props.radius*2) + 25}px;
    height: ${props => (props.radius*2) + 25}px;
    font-weight: 200px;
    position: absolute;
    transition: font-weight .2s ease-in-out;
    &:hover {
        font-weight: 900;
        animation-play-state: paused;
        color: var(--active);
    }
` 

export const AnimationWrapper = styled.div<TextProps>`
    text-align: center;
    animation:20s ${rotate} infinite linear;
    width: ${props => (props.radius*2) + 25}px;
    height: ${props => (props.radius*2) + 25}px;
` 

export const circleText = styled.div`
    /*allows for centering*/ 
    display: inline-block;
    /*adjust as needed*/ 
    margin-bottom: 25px; 
`

export const circleLetter = styled.p<LetterProps>`
    height:${props => props.radius}px;
    text-transform: uppercase;
    position:absolute;
    transform:rotate(${props => props.origin}deg);
    transform-origin:0 100%;
`
