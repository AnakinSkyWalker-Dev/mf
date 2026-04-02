import { useEffect, useState } from 'react'
import { contactInfo } from '../../data/constants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { WhatsAppIcon } from '../../icons/WhatsAppIcon'
import { scrollToSection } from '../../utils/smoothScroll'
import * as S from './styles'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Início', section: 'hero' },
    { label: 'Serviços', section: 'services' },
    { label: 'Pacotes', section: 'pricing' },
    { label: 'Galeria', section: 'gallery' },
    { label: 'Contato', section: 'location' },
  ]

  return (
    <S.HeaderContainer
      ref={ref}
      className={`${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}
    >
      <S.Nav>
        <S.Logo src="/logo.jpg" alt="Bigode Estética Automotiva" />
        <S.NavLinks>
          {navLinks.map((link) => (
            <S.NavLink key={link.section} onClick={() => scrollToSection(link.section)}>
              {link.label}
            </S.NavLink>
          ))}
        </S.NavLinks>
        <S.WhatsAppButton
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </S.WhatsAppButton>
        <S.MobileMenuButton>☰</S.MobileMenuButton>
      </S.Nav>
    </S.HeaderContainer>
  )
}