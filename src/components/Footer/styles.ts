import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const FooterWrapper = styled.footer`
  background: ${theme.colors.background};
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.text}1A;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  img {
    height: 40px;
    width: auto;
  }
`

export const LogoText = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
`

export const Copyright = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.backgroundCard};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background ${theme.transitions.normal}, transform ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-3px);
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${theme.colors.text};
    transition: color ${theme.transitions.normal};
  }

  &:hover svg {
    color: ${theme.colors.white};
  }
`