import styled, { keyframes } from 'styled-components'

interface ActionProps {
    children: string
    href: string
  }

export const MainWrapper = styled.a<ActionProps>`
    font-family: var(--p1-font-family);
    font-size: var(--p1-font-size);
    font-weight: var(--p1-font-weight);
    position: relative;
    color: var(--action);
    &:after {
        content: "${p => p.children}";
        // content: "";
        position: absolute;
        left: 0;
        width: 0;
        height: 100%;
        overflow: hidden;
        background-color: var(--action);
        color: transparent;
        transition: width 0.4s;
        mix-blend-mode: difference;
    }
    &:hover {
        &: after {
            width: 100%;
        }
    }
`