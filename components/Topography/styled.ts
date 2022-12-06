import styled, { keyframes } from 'styled-components'

const waterfall = keyframes`
    from {
        transform: translate(0, 0%);
    }
    to {
        transform: translate(0, -100%);
    }
`

export const MainWrapper = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    width: 20%;
    height: 600px;
    flex-wrap: wrap;
    overflow: hidden;
    margin-right: 10%;
`

export const RepeatSvg = styled.svg`
    position: relative;
    width: 300px;
    height: 300px;
    animation: linear ${waterfall} 20s infinite;
    & > path {
        fill: var(--primary);
        fill-opacity: 0.2;
    }
`
