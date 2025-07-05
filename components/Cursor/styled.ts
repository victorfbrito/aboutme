import styled from 'styled-components'
import Arrow from '../../public/redirect-arrow.svg'

export const Ring = styled.div<any>`
    @media screen and (max-width: 850px) {
        display: none;
    }
    position: fixed;
    width: 47px;
    height: 47px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    will-change: width, height, transform, border;
    z-index: 9;
    pointer-events: none;
    mix-blend-mode: difference;
    opacity: 0;
    transition: opacity 0.2s;
    ${props => props.cursorType != '' &&
    `
        opacity: 1;
    `
    }
    ${props => props.cursorType == 'redirect' && `
        border-color: var(--primary);
    `
    }
`

export const Dot = styled.div<any>`
    @media screen and (max-width: 850px) {
        display: none;
    }
    position: fixed;
    background-color: var(--primary);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 999;
    pointer-events: none;
    mix-blend-mode: difference;
    transition: width 0.25s, height 0.25s;
    width: 44px;
    height: 44px;
    ${props => props.cursorType == 'redirect' && `
        display: none;
    `
    }
    ${props => props.cursorType != '' &&
    `
        width: 4px;
        height: 4px;
    `
    }
`

export const Indicator = styled(Arrow)<any>`
    @media screen and (max-width: 850px) {
        display: none;
    }
    pointer-events: none;
    mix-blend-mode: difference;
    position: fixed;
    opacity: 0;
    ${props => props.cursorType == 'redirect' && `
        fill: var(--primary);
        opacity: 1;
    `
    }
`