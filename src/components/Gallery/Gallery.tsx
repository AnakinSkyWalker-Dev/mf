import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { galleryItems, videoItem } from '../../data/constants'
import * as S from './styles'

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <S.Section id="gallery" ref={ref}>
      <S.Container>
        <S.Header $visible={isVisible}>
          <S.SectionTitle>
            Nossos <span>Serviços</span>
          </S.SectionTitle>
          <S.SectionSubtitle>
            Veja alguns dos nossos trabalhos realizados com excelência e dedicação.
          </S.SectionSubtitle>
        </S.Header>

        <S.GalleryGrid $visible={isVisible}>
          <S.FeaturedVideoItem>
            <S.FeaturedVideo
              src={videoItem.src}
              autoPlay
              muted
              loop
              playsInline
            />
          </S.FeaturedVideoItem>
          {galleryItems.map((item, index) => (
            <S.GalleryItem key={index}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </S.GalleryItem>
          ))}
        </S.GalleryGrid>
      </S.Container>
    </S.Section>
  )
}