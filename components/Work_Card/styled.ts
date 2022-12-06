import styled from 'styled-components'

interface FrameContainer {
    proj: any
}

export const MainWrapper = styled.div`
    position: relative;
    left: 35%;
    padding: 0 2%;
    width: 30%;
    display: flex;
    justify-content: center;
    @media (max-width: 850px) {
        display: none;
    }
    @media (min-width: 851px) and (max-width: 1024px) {
        left: 15%;
    };
`

export const BgFrame = styled.span<FrameContainer>`
    position: absolute;
    width: 400px;
    height: 300px;
    border: 1px solid var(--primary);
    opacity: var(--bg-detail-opacity);
    transform:  ${p => p.proj ? 'rotate(-10deg)' : 'rotate(0)'};
    transition: transform 0.2s;
    @media (min-width: 851px) and (max-width: 1024px) {
        width: 300px;
        height: 225px;
    };
`

export const ActiveFrame = styled.div<FrameContainer>`
    position: absolute;
    background: radial-gradient(ellipse at top, var(--primary), var(--secondary));
    // background: radial-gradient(ellipse at top, black,black);
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${p => p.proj ? 1 : 0};
    transition: opacity 0.2s, clip-path 0.2s;
    clip-path: ${p => p.proj ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)': 'polygon(0% 4%, 96% 0%, 100% 96%, 4% 100%)'};
    & > * {
        &:first-child {
            box-shadow:  -5px 5px 15px black;
        }
    }
    & > video {
        width: 360px;
        height: 226px;
        @media (min-width: 851px) and (max-width: 1024px) {
            width: 300px;
            height: 225px;
        };
    }
    @media (min-width: 851px) and (max-width: 1024px) {
        width: 300px;
        height: 225px;
    };
`