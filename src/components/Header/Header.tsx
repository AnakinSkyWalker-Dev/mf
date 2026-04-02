import { useEffect, useState, useCallback } from 'react'
import { contactInfo } from '../../data/constants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { WhatsAppIcon } from '../../icons/WhatsAppIcon'
import { scrollToSection } from '../../utils/smoothScroll'
import * as S from './styles'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const handleNavClick = useCallback((section: string) => {
    scrollToSection(section)
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      <S.HeaderContainer
        ref={ref}
        $isScrolled={isScrolled}
        className={isVisible ? 'visible' : ''}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <S.Nav>
          <S.Logo 
            src="/logo.jpg" 
            alt="Bigode Estética Automotiva" 
            $isScrolled={isScrolled}
          />
          <S.NavLinks>
            {navLinks.map((link) => (
              <S.NavLink key={link.section} onClick={() => handleNavClick(link.section)}>
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
          <S.MobileMenuButton 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <S.MenuLine />
            <S.MenuLine />
            <S.MenuLine />
          </S.MobileMenuButton>
        </S.Nav>
      </S.HeaderContainer>

      <S.MobileOverlay 
        $isOpen={isMobileMenuOpen} 
        onClick={closeMobileMenu}
        style={{ overflow: isMobileMenuOpen ? 'hidden' : 'auto' }}
      />

      <S.MobileMenu $isOpen={isMobileMenuOpen}>
        <S.CloseButton onClick={closeMobileMenu} aria-label="Fechar menu">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </S.CloseButton>
        {navLinks.map((link) => (
          <S.MobileNavLink 
            key={link.section} 
            onClick={() => handleNavClick(link.section)}
          >
            {link.label}
          </S.MobileNavLink>
        ))}
        <S.MobileWhatsAppButton
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </S.MobileWhatsAppButton>
      </S.MobileMenu>
    </>
  )
}