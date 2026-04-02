import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const HeroSection = styled.section`
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.md}) {
    padding-top: 50px;
  }
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
  min-height: 80dvh;
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

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
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