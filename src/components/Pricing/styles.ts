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

export const PricingGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  align-items: stretch;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '50px'});
  transition: all 0.8s ease 0.3s;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`

export const PriceCard = styled.div`
  background: ${theme.colors.backgroundCard};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  position: relative;
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-10px);
    border-color: ${theme.colors.primary}30;
    box-shadow: ${theme.shadows.xl};
  }

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

  &:hover::before {
    transform: scaleX(1);
  }
`

export const PackageName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.text};
  text-transform: uppercase;
  margin-bottom: ${theme.spacing.md};
`

export const Price = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 4rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing.xs};

  span {
    font-size: 1.5rem;
    color: ${theme.colors.textSecondary};
  }
`

export const PriceDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xl};
`

export const Divider = styled.div`
  height: 1px;
  background: ${theme.colors.text}20;
  margin-bottom: ${theme.spacing.lg};
`

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.xl};
`

export const Feature = styled.li`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.textSecondary};
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

export const CTAButton = styled.a`
  display: block;
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-align: center;
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: ${theme.fontSizes.sm};
  text-transform: uppercase;
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.glow};
  }
`

export const PopularCardWrapper = styled.div`
  background: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  position: relative;
  transition: all ${theme.transitions.normal};
  transform: scale(1.05);
  border: 2px solid ${theme.colors.primary};

  &:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: ${theme.shadows.xl};
  }

  &::before {
    content: 'MAIS POPULAR';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    padding: 4px 16px;
    border-radius: ${theme.borderRadius.full};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.xs};
    font-weight: 700;
    letter-spacing: 1px;
  }

  ${PackageName} {
    color: ${theme.colors.background};
  }

  ${Price} {
    color: ${theme.colors.background};

    span {
      color: ${theme.colors.background};
    }
  }

  ${PriceDescription} {
    color: ${theme.colors.background};
    opacity: 0.8;
  }

  ${Divider} {
    background: ${theme.colors.background};
    opacity: 0.3;
  }

  ${Feature} {
    color: ${theme.colors.background};
    opacity: 0.9;

    &::before {
      color: ${theme.colors.background};
    }
  }

  ${CTAButton} {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};

    &:hover {
      box-shadow: ${theme.shadows.glow};
    }
  }
`