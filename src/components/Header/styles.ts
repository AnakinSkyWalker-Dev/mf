import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  transition: all ${theme.transitions.normal};
  background: transparent;

  &.scrolled {
    background: ${theme.colors.background};
    box-shadow: ${theme.shadows.lg};
    padding: ${theme.spacing.sm} ${theme.spacing.xl};
  }

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  transform: translateY(-100%);
  opacity: 0;
  transition: transform ${theme.transitions.slow} ease, opacity ${theme.transitions.slow} ease;
`

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  height: 60px;
  border-radius: 8px;
  transition: height ${theme.transitions.normal};

  ${HeaderContainer}.scrolled & {
    height: 50px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    height: 45px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export const NavLink = styled.button`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  font-weight: 500;
  color: ${theme.colors.text};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: color ${theme.transitions.fast};
  background: none;
  padding: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary};
    transition: width ${theme.transitions.normal};
  }

  &:hover {
    color: ${theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: ${theme.fontSizes.sm};
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.glow};
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes['2xl']};
  padding: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`