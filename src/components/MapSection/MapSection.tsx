import { contactInfo } from '../../data/constants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { WhatsAppIcon } from '../../icons/WhatsAppIcon'
import * as S from './styles'

export function MapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 })

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.995844566071!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eea100750f5a37%3A0x46b2e1392a69a204!2s${encodeURIComponent(contactInfo.address)}!5e0!3m2!1sen!2sbr!4v1775099617476!5m2!1sen!2sbr`

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
                href="https://www.google.com/maps/place/Est%C3%A9tica+automotiva+do+Bigode/@-24.5202262,-51.6740153,17z/data=!4m14!1m7!3m6!1s0x94eea100750f5a37:0x46b2e1392a69a204!2sEst%C3%A9tica+automotiva+do+Bigode!8m2!3d-24.5202262!4d-51.6714404!16s%2Fg%2F11w1dn8yt7!3m5!1s0x94eea100750f5a37:0x46b2e1392a69a204!8m2!3d-24.5202262!4d-51.6714404!16s%2Fg%2F11w1dn8yt7?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
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