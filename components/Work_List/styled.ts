import styled from 'styled-components'

export const MainWrapper = styled.ul`
    position: fixed;
    left: 55%;
    padding: 0 10px;
    list-style: none;
    width: 40%;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 850px) {
        left: 5%;
        width: 90%;
        text-align: left;
    }
`

export const Item = styled.a`
    padding: 0;
    margin: 0;
    font-size: var(--list-item-font-size);
    color: transparent;
    -webkit-text-stroke: 1px var(--primary);
    text-stroke: 1px var(--primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s;
    &:hover {
        color: var(--primary);
    }
    @media (max-width: 850px) { 
        font-size: 3rem;   
    }
`