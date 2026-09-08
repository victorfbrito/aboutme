import styled from 'styled-components'

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
        height: 0.82em;
        margin-top: -0.18em;
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
    }
`

export const Char = styled.span`
    position: relative;
    display: inline-block;
`

export const Ghost = styled.span`
    visibility: hidden;
    pointer-events: none;
`

export const Face = styled.span<{ $locked: boolean; $active: boolean }>`
    position: absolute;
    left: 0;
    top: 0;
    color: ${p => (p.$locked ? 'var(--primary)' : 'var(--secondary)')};
    opacity: ${p => (p.$active || p.$locked ? 1 : 0)};
    transition: color 0.25s ease, opacity 0.15s ease;
`

export const Subtitle = styled.h2`
    font-family: var(--action-font-family);
    font-weight:  var(--action-font-family);
    font-size: var(--action-font-size);
    text-transform: uppercase;
    color: var(--action);
`
