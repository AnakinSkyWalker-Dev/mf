import * as S from './styles'

export function HeroBackground() {
  return (
    <>
      <S.VideoBackground autoPlay muted loop playsInline>
        <source src="/car.mp4" type="video/mp4" />
      </S.VideoBackground>
      <S.Overlay />
      <S.GridLines />
      <S.CornerGlowLeft />
      <S.CornerGlowRight />
    </>
  )
}
