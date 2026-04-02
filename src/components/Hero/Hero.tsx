import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { HeroBackground } from './HeroBackground/HeroBackground'
import { HeroButtons } from './HeroButtons/HeroButtons'
import * as S from './styles'

export function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <S.HeroSection id="hero" ref={ref}>
      <HeroBackground />
      
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
        
        <HeroButtons />
      </S.Content>

      <S.ScrollIndicator>
        <S.MouseIcon />
        <span>Role para baixo</span>
      </S.ScrollIndicator>
    </S.HeroSection>
  )
}