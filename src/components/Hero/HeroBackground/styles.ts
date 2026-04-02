import { styled } from "@linaria/react"

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: contain;
  z-index: 0;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.85) 0%,
    rgba(10, 10, 10, 0.75) 50%,
    rgba(10, 10, 10, 0.85) 100%
  );
  z-index: 1;
`

export const GradientOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
`

export const GridLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-image: 
    linear-gradient(rgba(255, 107, 0, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 0, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`

export const CornerGlowLeft = styled.div<{ $upper?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 60%;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(
    ellipse 100% 80% at ${({ $upper }) => ($upper ? "0% 0%" : "0% 100%")},
    rgba(255, 107, 0, 0.25) 0%,
    rgba(255, 107, 0, 0.1) 30%,
    transparent 80%
  );
`

export const CornerGlowRight = styled.div<{ $upper?: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 60%;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(
    ellipse 100% 80% at ${({ $upper }) => ($upper ? "100% 0%" : "100% 100%")},
    rgba(255, 107, 0, 0.25) 0%,
    rgba(255, 107, 0, 0.1) 30%,
    transparent 80%
  );
`