import styled from 'styled-components'

export const Wrapper = styled.div<{ $visible: boolean }>`
    display: none;
    @media (max-width: 1024px) and (min-width: 851px) {
        display: block;
        position: fixed;
        width: 360px;
        height: 225px;
        background: transparent;
        z-index: 8;
        pointer-events: none;
        transform: translate(-50%, -50%);
        opacity: ${p => (p.$visible ? 1 : 0)};
        transition: opacity 0.2s;
        will-change: left, top;
    }
`

export const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: transparent;
    box-shadow: none;
    opacity: 0;
    pointer-events: none;
    &[data-active="true"] {
        opacity: 1;
    }
`
