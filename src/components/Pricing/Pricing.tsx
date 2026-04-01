import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { pricingPlans, contactInfo } from '../../data/constants'
import * as S from './styles'

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <S.Section id="pricing" ref={ref}>
      <S.Container>
        <S.Header $visible={isVisible}>
          <S.SectionTitle>
            Nossos <span>Pacotes</span>
          </S.SectionTitle>
          <S.SectionSubtitle>
            Escolha o plano ideal para seu veículo. 
            Todos os serviços incluem garantia de satisfação.
          </S.SectionSubtitle>
        </S.Header>

        <S.PricingGrid $visible={isVisible}>
          {pricingPlans.map((plan) => (
            plan.popular ? (
              <S.PopularCardWrapper key={plan.id}>
                <S.PackageName>{plan.name}</S.PackageName>
                <S.Price>
                  R$ <span>{plan.price}</span>
                </S.Price>
                <S.PriceDescription>{plan.description}</S.PriceDescription>
                <S.Divider />
                <S.FeaturesList>
                  {plan.features.map((feature, i) => (
                    <S.Feature key={i}>{feature}</S.Feature>
                  ))}
                </S.FeaturesList>
                <S.CTAButton 
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Agora
                </S.CTAButton>
              </S.PopularCardWrapper>
            ) : (
              <S.PriceCard key={plan.id}>
                <S.PackageName>{plan.name}</S.PackageName>
                <S.Price>
                  R$ <span>{plan.price}</span>
                </S.Price>
                <S.PriceDescription>{plan.description}</S.PriceDescription>
                <S.Divider />
                <S.FeaturesList>
                  {plan.features.map((feature, i) => (
                    <S.Feature key={i}>{feature}</S.Feature>
                  ))}
                </S.FeaturesList>
                <S.CTAButton 
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Agora
                </S.CTAButton>
              </S.PriceCard>
            )
          ))}
        </S.PricingGrid>
      </S.Container>
    </S.Section>
  )
}