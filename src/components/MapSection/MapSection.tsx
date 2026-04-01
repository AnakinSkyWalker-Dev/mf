import { contactInfo } from '../../data/constants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { WhatsAppIcon } from '../../icons/WhatsAppIcon'
import * as S from './styles'

export function MapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 })

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(contactInfo.address)}!5e0!3m2!1spt-BR!2sbr!4v1234567890000`

  return (
    <S.Section id="location" ref={ref}>
      <S.Container>
        <S.Header $visible={isVisible}>
          <S.SectionTitle>
            Nossa <span>Localização</span>
          </S.SectionTitle>
          <S.SectionSubtitle>
            Estamos localizados em Manoel Ribas com fácil acesso e estacionamento disponível.
          </S.SectionSubtitle>
        </S.Header>

        <S.MapWrapper $visible={isVisible}>
          <iframe
            src={mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização MF Estética Automotiva"
          />
        </S.MapWrapper>

        <S.LocationInfo ref={infoRef}>
          <S.LocationItem $visible={infoVisible}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <S.LocationText>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {contactInfo.address}
              </a>
            </S.LocationText>
          </S.LocationItem>
          
          <S.LocationItem $visible={infoVisible}>
            <WhatsAppIcon />
            <S.LocationText>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {contactInfo.phone}
              </a>
            </S.LocationText>
          </S.LocationItem>
        </S.LocationInfo>
      </S.Container>
    </S.Section>
  )
}