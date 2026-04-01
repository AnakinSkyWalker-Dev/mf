import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const Section = styled.section`
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background: ${theme.colors.background};
  position: relative;
  overflow: hidden;
`

export const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 50% 0%, ${theme.colors.primary}10 0%, transparent 50%);
  pointer-events: none;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`

export const Header = styled.div<{ $visible: boolean }>`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: all 0.8s ease;
`

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${theme.colors.text};
  text-transform: uppercase;
  margin-bottom: ${theme.spacing.md};

  span {
    color: ${theme.colors.primary};
  }
`

export const SectionSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`

export const ServicesGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '50px'});
  transition: all 0.8s ease 0.2s;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.div`
  background: ${theme.colors.backgroundCard};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  position: relative;
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  border: 1px solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${theme.colors.primary}30;
    box-shadow: ${theme.shadows.lg};

    &::before {
      transform: scaleX(1);
    }
  }
`

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: ${theme.colors.primary}15;
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary};
  transition: all ${theme.transitions.normal};

  ${ServiceCard}:hover & {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: scale(1.1) rotate(5deg);
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`

export const ServiceTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  text-transform: uppercase;
`

export const ServiceDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
`

export const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Feature = styled.li`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textMuted};
  padding: ${theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &::before {
    content: '✓';
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`