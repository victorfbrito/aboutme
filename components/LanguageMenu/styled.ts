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

export const FlagButton = styled.button`
background: var(--primary);
border: 2px solid var(--primary);
border-radius: 2px;
padding: 0;
cursor: none;
outline: none;
display: flex;
align-items: center;
&:hover {
    border: 2px solid var(--action);
}
`

export const Dropdown = styled.div`
padding: 0;
background: var(--primary);
padding: 0;
display: flex;
flex-direction: column;
`

export const FlagOption = styled.button<{selected?: boolean}>`
background: var(--primary);
padding: 1px 2px;
border: none;
cursor: none;
display: flex;
align-items: center;
transition: background 0.15s;
&:hover {
    background: var(--action);
}
`