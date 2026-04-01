import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { scrollToSection } from '../../utils/smoothScroll'
import * as S from './styles'

export function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <S.HeroSection id="hero" ref={ref}>
      <S.VideoBackground autoPlay muted loop playsInline>
        <source src="/car.mp4" type="video/mp4" />
      </S.VideoBackground>
      <S.Overlay />
      
      <S.GridLines />
      
      <S.CornerGlowLeft />
      <S.CornerGlowRight />
      
      <S.Content $visible={isVisible}>
        <S.Badge>
          ✨ Excelência em estética automotiva
        </S.Badge>
        
        <S.Title>
          Seu carro merece
          <span>o melhor tratamento</span>
        </S.Title>
        
        <S.Subtitle>
          Transformamos seu veículo com excelência e precisão. 
          Lavagem detalhada, estética premium e polimento de alto nível 
          para manter seu carro sempre como novo.
        </S.Subtitle>
        
        <S.ButtonGroup>
          <S.PrimaryButton onClick={() => scrollToSection('pricing')}>
            Ver Valores
          </S.PrimaryButton>
          <S.SecondaryButton onClick={() => scrollToSection('services')}>
            Ver Serviços
          </S.SecondaryButton>
        </S.ButtonGroup>
      </S.Content>

      <S.ScrollIndicator>
        <S.MouseIcon />
        <span>Role para baixo</span>
      </S.ScrollIndicator>
    </S.HeroSection>
  )
}