/** Casa Ritual — conteúdo e mídias (Design Brief + Críticas v2) */

export const brand = {
  name: "Casa Ritual",
  tagline: "Desenvolvido por quem opera.",
  authority: "Dra. Amanda · Cirurgia capilar · São Paulo",
} as const;

export const contact = {
  whatsapp: "5511999999999",
  whatsappMessage:
    "Olá, gostaria de solicitar acesso ao protocolo Casa Ritual.",
  email: "contato@casaritual.com.br",
  company: "Casa Ritual Produtos Capilares Ltda.",
  cnpj: "00.000.000/0001-00",
} as const;

export const colors = {
  cream: "#F7F4EF",
  white: "#FFFFFF",
  ink: "#1A1814",
  stone: "#7A7670",
  gold: "#B8956A",
  sand: "#E8E4DC",
} as const;

/** Vídeo hero — massagem em couro cabeludo (Pexels #853183). Substituir por filmagem da marca. */
export const media = {
  heroVideo:
    "https://videos.pexels.com/video-files/853183/853183-uhd_2560_1440_30fps.mp4",
  heroPoster:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80",
  ingredients: [
    {
      name: "Óleos frios",
      role: "Nutrição profunda sem resíduo",
      origin: "Origem: Marrocos",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ceramidas vegetais",
      role: "Barreira e brilho. Ancoragem do folículo",
      origin: "Origem: biotecnologia vegetal",
      image:
        "https://images.unsplash.com/photo-1615485290381-cea1a487631e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Antioxidantes",
      role: "Proteção contra estresse urbano pós-cirúrgico",
      origin: "Origem: complexo botânico",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed921d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bioativos lentos",
      role: "Performance em 8h. Resultado acumulado",
      origin: "Origem: liberação controlada",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    },
  ],
  macroImage:
    "https://images.unsplash.com/photo-1608248543801-ba977f7cb787?auto=format&fit=crop&w=1200&q=80",
  protocol: [
    {
      id: "pre",
      code: "PROTOCOLO 01",
      numeral: "01",
      title: "Pré-implante",
      copy: "O couro cabeludo preparado recebe melhor.",
      featured: false,
    },
    {
      id: "pos",
      code: "PROTOCOLO 02",
      numeral: "02",
      title: "Pós-implante",
      copy: "72 horas depois da cirurgia. Aqui começa o ritual.",
      featured: true,
    },
    {
      id: "manut",
      code: "PROTOCOLO 03",
      numeral: "03",
      title: "Manutenção",
      copy: "O folículo ancorou. Agora é consistência.",
      featured: false,
    },
  ],
  products: [
    {
      name: "Fase de ancoragem",
      price: "R$ 890",
      note: "Tratamento pós-implante · 30 dias",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Consolidação folicular",
      price: "R$ 720",
      note: "Manutenção clínica · 30 dias",
      image:
        "https://images.unsplash.com/photo-1608248543801-ba977f7cb787?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Preparo pré-cirúrgico",
      price: "R$ 650",
      note: "Pré-implante · 21 dias",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kit protocolo completo",
      price: "R$ 2.190",
      note: "Linha integrada · indicação médica",
      image:
        "https://images.unsplash.com/photo-1570197783205-cec7feecd230?auto=format&fit=crop&w=600&q=80",
    },
  ],
  testimonials: [
    {
      quote:
        "Protocolo objetivo. Sem ruído. O couro cabeludo respondeu no tempo clínico esperado.",
      author: "Paciente · transplante FUE",
      metric: "Ancoragem em 12 semanas",
    },
    {
      quote:
        "Formulacao de precisao. O tipo de produto que se espera depois de uma cirurgia de elite.",
      author: "Paciente · manutenção",
      metric: "Consistência documentada",
    },
    {
      quote:
        "Desenvolvido por quem opera — isso se sente na textura e na indicação pós-alta.",
      author: "Paciente · pós-implante",
      metric: "72h pós-cirurgia",
    },
  ],
  clinicImage:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
} as const;

export const manifestoLines = [
  "Antes do implante, o folículo precisa de preparo.",
  "Depois da cirurgia, ele precisa de protocolo.",
  "A Casa Ritual existe para esse momento.",
] as const;

export const shopNote =
  "Acesso mediante indicação médica. Valores orientativos — confirmação com a equipe clínica.";
