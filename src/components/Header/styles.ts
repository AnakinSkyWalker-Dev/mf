import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  transition: background ${theme.transitions.normal}, box-shadow ${theme.transitions.normal}, padding ${theme.transitions.normal};
  background: ${({ $isScrolled }) => $isScrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ $isScrolled }) => $isScrolled ? theme.shadows.lg : 'none'};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${({ $isScrolled }) => $isScrolled ? theme.spacing.sm : theme.spacing.md} ${theme.spacing.lg};
  }
`

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img<{ $isScrolled: boolean }>`
  height: ${({ $isScrolled }) => $isScrolled ? '50px' : '60px'};
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid ${theme.colors.primary};
  transition: height ${theme.transitions.normal}, border-color ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.secondaryLight};
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
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.borderRadius.full};
  transition: background ${theme.transitions.normal}, transform ${theme.transitions.normal}, box-shadow ${theme.transitions.normal};

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.glow};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
    padding: ${theme.spacing.sm};
    width: 44px;
    height: 44px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
`

export const MenuLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${theme.colors.text};
  border-radius: 2px;
`

export const MobileOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: opacity ${theme.transitions.normal}, visibility ${theme.transitions.normal};
  z-index: 999;
`

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100dvh;
  background: ${theme.colors.background};
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  transform: translateX(${({ $isOpen }) => $isOpen ? '0' : '100%'});
  transition: transform ${theme.transitions.normal};
  z-index: 1001;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`

export const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: none;
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  
  svg {
    width: 24px;
    height: 24px;
    stroke: ${theme.colors.text};
    stroke-width: 2;
    fill: none;
  }
`

export const MobileNavLink = styled.button`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  font-weight: 500;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  background: none;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.secondary};
  text-align: left;
  transition: color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.primary};
  }
`

export const MobileWhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  border-radius: ${theme.borderRadius.full};
  margin-top: ${theme.spacing.lg};

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`