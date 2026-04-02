import { contactInfo } from '../../data/constants'
import { WhatsAppIcon } from '../../icons/WhatsAppIcon'
import * as S from './styles'

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.Container>
        <S.Logo>
          <img src="/logo.jpg" alt="Bigode Estética Automotiva" />
          <S.LogoText>Bigode Estética Automotiva</S.LogoText>
        </S.Logo>

        <S.Copyright>
          © {new Date().getFullYear()} MF Estética Automotiva. Todos os direitos reservados.
        </S.Copyright>

        <S.SocialLinks>
          <S.SocialLink 
            href={`https://wa.me/${contactInfo.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </S.SocialLink>
          
          <S.SocialLink 
            href={`https://instagram.com/${contactInfo.socialLinks.instagram}`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </S.SocialLink>
        </S.SocialLinks>
      </S.Container>
    </S.FooterWrapper>
  )
}