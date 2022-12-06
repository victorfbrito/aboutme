import styled, { keyframes } from 'styled-components'

const IntroAnimation = keyframes`
    0% {
        padding-top: 100px;
    }
    100% {
        padding-top: 0;
    }
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    color: var(--primary);
    height: 80vh;
    margin-left: 10vw;
    width: 80vw;
    justify-content: center;
    align-items: right;
`

export const Title = styled.h1`
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    text-transform: uppercase;
    margin: 0;
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-self: flex-end;
    & > span {
        animation: 1.4s ease 0s 1 ${IntroAnimation};
        height: calc(var(--title-font-size) - 18px);
        margin-top: -18px;
        overflow: hidden;
        &:nth-of-type(1) {
            align-self: flex-end;
        }
        &:nth-of-type(2) {
            align-self: center;
        }
        &:nth-of-type(3) {
            align-self: flex-end;
        }
    }
    @media (max-width: 850px) { 
        width: 90vw;
        & > span {
            height: calc(var(--title-font-size) + 8px);
        }
    }
`

export const Subtitle = styled.h2`
    font-family: var(--action-font-family);
    font-weight:  var(--action-font-family);
    font-size: var(--action-font-size);
    text-transform: uppercase;
    color: var(--action);
`