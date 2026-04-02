import { scrollToSection } from '../../../utils/smoothScroll'
import * as S from './styles'

export function HeroButtons() {
  return (
    <S.ButtonGroup>
      <S.PrimaryButton onClick={() => scrollToSection('pricing')}>
        Ver Valores
      </S.PrimaryButton>
      <S.SecondaryButton onClick={() => scrollToSection('services')}>
        Ver Serviços
      </S.SecondaryButton>
    </S.ButtonGroup>
  )
}
