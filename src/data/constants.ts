export const galleryItems = [
  { src: '/car.webp', alt: 'Carro 1' },
  { src: '/car2.webp', alt: 'Carro 2' },
  { src: '/car3.webp', alt: 'Carro 3' },
  { src: '/car4.webp', alt: 'Carro 4' },
] as const

export const videoItem = {
  src: '/car2.mp4',
  alt: 'Carro 5',
} as const

export const services = [
  {
    id: 'lavagem-tecnica',
    icon: 'CarWashIcon',
    title: 'Lavagem Técnica',
    description: 'Lavagem completa com produtos especializados, incluindo motores, câmbio, parte interna e externa.',
    features: [
      'Limpeza de motor',
      'Aspiração completa',
      'Limpeza de câmbio',
      'Aplicação de neum',
    ],
  },
  {
    id: 'estetica-automotiva',
    icon: 'AutomotiveAestheticsIcon',
    title: 'Estética Automotiva',
    description: 'Tratamento completo de interiores e exteriores para restaurar o visual original do veículo.',
    features: [
      'Polimento técnico',
      'Higienização interna',
      'Proteção UV',
      'Restauração de plásticos',
    ],
  },
  {
    id: 'polimento-profissional',
    icon: 'AutomotivePolishingIcon',
    title: 'Polimento Profissional',
    description: 'Remoção de riscos, restauração do brilho e proteção de longo prazo para a pintura.',
    features: [
      'Polimento de pintura',
      'Remoção de marcas',
      'Vitrificação',
      'Cera protetora',
    ],
  },
] as const

export const pricingPlans = [
  {
    id: 'lavagem-simples',
    name: 'Lavagem Simples',
    price: '70',
    description: 'Ideal para manutenção semanal',
    popular: false,
    features: [
      'Lavagem externa',
      'Aspiração simples',
      'Limpeza de vidros',
      'Rodas e pneus',
      'Secagem completa',
    ],
  },
  {
    id: 'lavagem-completa',
    name: 'Lavagem Completa',
    price: '150',
    description: 'O pacote mais procurado',
    popular: true,
    features: [
      'Tudo da lavagem simples',
      'Lavagem de motor',
      'Higienização interna',
      'Limpeza de câmbio',
      'Aplicação de neum',
      'Hidratação de couros',
    ],
  },
  {
    id: 'lavagem-premium',
    name: 'Lavagem Premium',
    price: '250',
    description: 'Tratamento completo',
    popular: false,
    features: [
      'Tudo da lavagem completa',
      'Polimento leve',
      'Vitrificação',
      'Higigenização profunda',
      'Restauração de rodas',
      'Garantia de 30 dias',
    ],
  },
] as const

export const contactInfo = {
  phone: '(43) 99952-1514',
  whatsapp: '5543999521514', 
  email: 'contato@bigodestetica.com.br',
  address: 'Av. Brasil, 1082 - Jardim Santa Mercedes, Manoel Ribas - PR, 85260-000',
  coordinates: {
    lat: -24.5202262,
    lng: -51.6714404,
  },
  workingHours: {
    weekdays: 'Seg a Sex: 08:00 - 18:00',
    saturday: 'Sáb: 08:00 - 12:00',
    sunday: 'Dom: Fechado',
  },
  socialLinks: {
    instagram: 'bigodelavacar',
  },
} as const