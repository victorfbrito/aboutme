import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

export const MainWrapper = styled.div`
    font-family: var(--p1-font-family);
    font-size: var(--p1-font-size);
    font-weight: var(--p1-font-weight);
    text-indent: 25px;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    padding: 10vh 5%;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    @media (max-width: 850px) {
        width: 90%;
    }
    & > p {
        margin: 0;
    }
`

export const ImageWrapper = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    @media (max-width: 850px) {
        display: none;
    }
`

export const FilledImage = styled(Image)`
    transition: opacity 0.2s;
    opacity: 0;
`

export const FooterBorder = styled.div`
    background-color: blue;
    width: 100px;
    height: 100px;
    position: relative;
    top: 0;
    left: 0;
`