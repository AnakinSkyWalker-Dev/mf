import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { contactInfo } from '../../data/constants'
import { WhatsAppIcon } from '../../icons/WhatsAppIcon'
import * as S from './styles'

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <S.Section id="contact" ref={ref}>
      <S.Container>
        <S.Header $visible={isVisible}>
          <S.SectionTitle>
            Fale <span>Conosco</span>
          </S.SectionTitle>
          <S.SectionSubtitle>
            Estamos prontos para atender você. Escolha o canal de preferência!
          </S.SectionSubtitle>
        </S.Header>

        <S.ContactGrid $visible={isVisible}>
          <S.ContactCard href={`https://wa.me/${contactInfo.whatsapp}`}>
            <S.IconWrapper>
              <WhatsAppIcon />
            </S.IconWrapper>
            <S.CardTitle>WhatsApp</S.CardTitle>
            <S.CardText>{contactInfo.phone}</S.CardText>
          </S.ContactCard>

          <S.ContactCard 
            href={`https://instagram.com/${contactInfo.socialLinks.instagram}`} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </S.IconWrapper>
            <S.CardTitle>Instagram</S.CardTitle>
            <S.CardText>@{contactInfo.socialLinks.instagram}</S.CardText>
          </S.ContactCard>

          <S.ContactCard href={`mailto:${contactInfo.email}`}>
            <S.IconWrapper>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </S.IconWrapper>
            <S.CardTitle>E-mail</S.CardTitle>
            <S.CardText>{contactInfo.email}</S.CardText>
          </S.ContactCard>
        </S.ContactGrid>
      </S.Container>
    </S.Section>
  )
}