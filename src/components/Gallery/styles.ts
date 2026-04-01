import { styled } from '@linaria/react'
import { theme } from '../../theme/theme'

export const Section = styled.section`
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background: ${theme.colors.background};
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

export const GalleryGrid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: ${theme.spacing.lg};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '50px'});
  transition: all 0.8s ease 0.3s;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 200px);
  }
`

export const FeaturedVideoItem = styled.div`
  grid-column: span 2;
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-column: span 2;
    grid-row: span 1;
  }
`

export const FeaturedVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      ${theme.colors.background}40 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity ${theme.transitions.normal};
  }

  &:hover::after {
    opacity: 1;
  }
`

export const GalleryVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`