import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const Section = styled.section`
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background: ${theme.colors.background};
  position: relative;
`

export const SectionLight = styled(Section)`
  background: ${theme.colors.backgroundLight};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const AnimatedHeader = styled.div<{ $visible: boolean }>`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: opacity ${theme.transitions.slowest}, transform ${theme.transitions.slowest};
`

export const AnimatedContent = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: opacity ${theme.transitions.slowest} 0.3s, transform ${theme.transitions.slowest} 0.3s;
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
