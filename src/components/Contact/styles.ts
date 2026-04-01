import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const Section = styled.section`
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background: ${theme.colors.background};
  position: relative;
  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

export const ContactGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: all 0.8s ease 0.3s;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.backgroundCard};
  border-radius: ${theme.borderRadius.xl};
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-8px);
    border-color: ${theme.colors.primary}30;
    box-shadow: ${theme.shadows.xl};
  }
`

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  transition: all ${theme.transitions.normal};

  ${ContactCard}:hover & {
    background: ${theme.colors.primary};
    
    svg {
      color: ${theme.colors.white};
    }
  }

  svg {
    width: 28px;
    height: 28px;
    color: ${theme.colors.primary};
    transition: color ${theme.transitions.normal};
  }
`

export const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`

export const CardText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.textSecondary};
`