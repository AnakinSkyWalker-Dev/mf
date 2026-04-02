import { styled } from "@linaria/react"
import { theme } from "../../../theme/theme"

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