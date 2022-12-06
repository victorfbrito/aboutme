import styled from 'styled-components'

export const MainWrapper = styled.span`
    position: fixed;
    display: flex;
    flex-direction: column;
`

export const buttonWrapper = styled.div<any>`
    width: 100vw;
    height: 40px;
    &:before {
        content: "";
        display: flex;
        border-top: 1px solid var(--secondary);
        opacity: var(--bg-detail-opacity);
    }
    &:after {
        content: "";
        position: fixed;
        left: ${p => p.dist};
        border-left: 1px solid var(--secondary);
        opacity: var(--bg-detail-opacity);
        pointer-events: none;
        height: 5000px;
    }
`

export const Button = styled.div<any>`
    left: ${p => p.dist};
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
        color: blue;
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