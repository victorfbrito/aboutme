import styled from 'styled-components'

interface FrameContainer {
    proj: any
}


export const MainWrapper = styled.div<FrameContainer>`
    position: fixed;
    left: 5%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    opacity: ${p => p.proj ? 1 : 0};
    transition: opacity 0.2s;
    width: 30%;
    height: 600px;
    @media (max-width: 1024px) {
        display: none;
    }
`

export const Title = styled.h1`
    text-transform: uppercase;
    font-family: var(--p1-font-family);
`

export const Text = styled.p`
    margin: 50px 0;
    text-indent: 25px;
    flex-grow: 2;
    font-family: var(--body-font-family);
    font-size: var(--body-font-size);
    font-weight: var(--body-font-weight);
`

export const Tech = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: none;
    font-family: var(--p2-font-family);
    letter-spacing: 2px;
    font-weight: light;
    text-align: right;
    font-size: 1rem;
    color: var(--primary);
    opacity: calc(var(--bg-detail-opacity) + 0.2);
`
