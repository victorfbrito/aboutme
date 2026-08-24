import styled from 'styled-components'

export const Wrapper = styled.div`
    @media screen and (max-width: 850px) {
        display: none;
    }
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const langItem = `
    font-family: var(--action-font-family);
    font-size: var(--action-font-size);
    font-weight: var(--action-font-weight);
    text-transform: uppercase;
    color: var(--action);
    background: transparent;
    border: none;
    padding: 2px 6px;
    cursor: none;
    outline: none;
    line-height: 1.2;
    transition: background 0.15s, color 0.15s;
    &:hover {
        background: var(--action);
        color: #000;
    }
`

export const LangButton = styled.button`
    ${langItem}
    display: flex;
    align-items: center;
`

export const Dropdown = styled.div`
    padding: 0;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const LangOption = styled.button`
    ${langItem}
    display: flex;
    align-items: center;
`
