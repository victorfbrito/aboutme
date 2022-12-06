import styled from 'styled-components'

export const MainWrapper = styled.div<any>`
    font-family: var(--scroll-font-family);
    font-size: var(--scroll-font-size);
    font-weight: var(--scroll-font-weight);
    text-transform: uppercase;
    white-space: nowrap;
    left: ${p => p.dist};
    @media screen and (max-width: 850px) {
        left: 5%;
        color: var(--action);
    }
    width: 80px;
    height: 40px;
    position: fixed;
    &:before {
        position: absolute;
        left: 0;
        transition: width 0.2s;
        content: "";
        display: block;
        width: 80px;
        height: 40px;
        background-color: var(--action);
    }
    &:after {
        transition: left 0.2s;
        height: 40px;
        display: flex;
        align-items: center;
        content: "${p => p.label}";
        position: absolute;
        left: 115%;
        top: 0;
        pointer-events: none;
        width: 100%;
    }
    &:hover {
        &:before {
            width: 40px;
        }
        &:after {
            left: calc(115% - 40px);
        }
    }
`