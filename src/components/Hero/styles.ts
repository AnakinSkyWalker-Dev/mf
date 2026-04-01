import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${theme.colors.background};
`

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.55) saturate(1.1) blur(2px);
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

export const Orb = styled.div<{ $size: string; $top: string; $left: string; $duration: string; $delay: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: radial-gradient(circle, ${theme.colors.primary}40 0%, transparent 70%);
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: floatOrb ${({ $duration }) => $duration} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  filter: blur(40px);
  opacity: 0.5;

  @keyframes floatOrb {
    0%, 100% { 
      transform: translate(0, 0) scale(1);
    }
    25% { 
      transform: translate(40px, -30px) scale(1.1);
    }
    50% { 
      transform: translate(-30px, -20px) scale(0.9);
    }
    75% { 
      transform: translate(-40px, 30px) scale(1.05);
    }
  }
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

export const Content = styled.div<{ $visible: boolean }>`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: ${theme.spacing.xl};
  max-width: 800px;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: all 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.textSecondary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: ${theme.spacing.sm};
`

export const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: ${theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 800;
  
  span {
    color: ${theme.colors.primary};
    display: block;
    font-weight: 400;
    font-size: clamp(1.8rem, 5vw, 3rem);
    margin-top: ${theme.spacing.xs};
  }
`

export const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: ${theme.fontSizes.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 0, 0.35);
  }
`

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  background: transparent;
  color: #ffffff;
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: ${theme.fontSizes.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: rgba(255, 255, 255, 0.5);
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
`

export const MouseIcon = styled.div`
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 8px;
    background: ${theme.colors.primary};
    border-radius: 2px;
    animation: scrollDown 1.5s ease-in-out infinite;
  }

  @keyframes scrollDown {
    0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    50% { opacity: 0.3; transform: translateX(-50%) translateY(10px); }
  }
`