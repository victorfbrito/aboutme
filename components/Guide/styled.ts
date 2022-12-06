import styled from 'styled-components'

interface DistanceObject {
    dist: number
}

export const GuideLine = styled.span<DistanceObject>`
    height: 100vh;
    position: fixed;
    left: ${p => p.dist};
    border-left: 1px solid var(--secondary);
    opacity: var(--bg-detail-opacity);
    pointer-events: none;
`