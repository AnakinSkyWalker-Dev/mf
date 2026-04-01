import { services as servicesData } from '../../data/constants'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { AutomotiveAestheticsIcon } from '../../icons/AutomotiveAestheticsIcon'
import { AutomotivePolishingIcon } from '../../icons/AutomotivePolishingIcon'
import { CarWashIcon } from '../../icons/CarWashIcon'
import { CornerGlowLeft, CornerGlowRight } from '../Hero/styles'
import * as S from './styles'

const iconMap: Record<string, React.ComponentType> = {
  CarWashIcon,
  AutomotiveAestheticsIcon,
  AutomotivePolishingIcon,
}

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <S.Section id="services" ref={ref}>
      <CornerGlowLeft $upper style={{ top: 0 }}/>
      <CornerGlowRight $upper style={{ top: 0 }} />
      <S.Container>
        <S.Header $visible={isVisible}>
          <S.SectionTitle>
            Nossos <span>Serviços</span>
          </S.SectionTitle>
          <S.SectionSubtitle>
            Oferecemos soluções completas para estética automotiva, 
            com produtos de alta qualidade e profissionais especializados.
          </S.SectionSubtitle>
        </S.Header>

        <S.ServicesGrid $visible={isVisible}>
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <S.ServiceCard key={service.id}>
                <S.IconWrapper><IconComponent /></S.IconWrapper>
                <S.ServiceTitle>{service.title}</S.ServiceTitle>
                <S.ServiceDescription>{service.description}</S.ServiceDescription>
                <S.ServiceFeatures>
                  {service.features.map((feature, i) => (
                    <S.Feature key={i}>{feature}</S.Feature>
                  ))}
                </S.ServiceFeatures>
              </S.ServiceCard>
            )
          })}
        </S.ServicesGrid>
      </S.Container>
    </S.Section>
  )
}