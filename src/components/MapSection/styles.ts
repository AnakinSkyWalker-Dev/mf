import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const Section = styled.section`
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background: ${theme.colors.backgroundLight};
  position: relative;
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

export const MapWrapper = styled.div<{ $visible: boolean }>`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: all 0.8s ease 0.3s;

  iframe {
    width: 100%;
    height: 450px;
    border: none;
    
    @media (max-width: ${theme.breakpoints.md}) {
      height: 350px;
    }
  }
`

export const LocationInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing['3xl']};
  margin-top: ${theme.spacing['2xl']};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
  }
`

export const LocationItem = styled.div<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '20px'});
  transition: all 0.6s ease 0.5s;

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary};
  }
`

export const LocationText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text};

  a {
    color: ${theme.colors.text};
    text-decoration: none;
    transition: color ${theme.transitions.normal};

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`