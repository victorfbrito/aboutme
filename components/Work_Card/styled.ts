import styled from 'styled-components'

interface FrameContainer {
    proj: any
}

export const MainWrapper = styled.div`
    position: relative;
    left: 35%;
    padding: 0 2%;
    width: 30%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {
        display: none;
    }
`

export const BgFrame = styled.span<FrameContainer>`
    position: absolute;
    width: 400px;
    height: 300px;
    border: 1px solid var(--primary);
    opacity: var(--bg-detail-opacity);
    transform:  ${p => p.proj ? 'rotate(-10deg)' : 'rotate(0)'};
    transition: transform 0.2s;
`

export const ActiveFrame = styled.div<FrameContainer>`
    position: absolute;
    //background: radial-gradient(ellipse at top, var(--primary), var(--secondary));
    // background: radial-gradient(ellipse at top, black,black);
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${p => p.proj ? 1 : 0};
    transition: opacity 0.2s, clip-path 0.2s;
    clip-path: ${p => p.proj ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)': 'polygon(0% 4%, 96% 0%, 100% 96%, 4% 100%)'};
    // overflow: hidden;
    & > video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        box-shadow: -5px 5px 15px black;
        opacity: 0;
        pointer-events: none;
        &[data-active="true"] {
            opacity: 1;
        }
    }
`