/** Casa Ritual — conteúdo e mídias placeholder (Design Brief v1) */

export const brand = {
  name: "Casa Ritual",
  tagline: "Desenvolvido por quem opera.",
  authority: "Dra. Amanda · Cirurgia capilar · São Paulo",
} as const;

export const colors = {
  cream: "#F7F4EF",
  white: "#FFFFFF",
  ink: "#1A1814",
  stone: "#7A7670",
  gold: "#B8956A",
  sand: "#E8E4DC",
} as const;

/** Vídeo hero — Pexels #4151806 (substituir por filmagem da marca) */
export const media = {
  heroVideo:
    "https://videos.pexels.com/video-files/4151806/4151806-uhd_2560_1440_25fps.mp4",
  heroPoster:
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1920&q=80",
  ingredients: [
    {
      name: "Óleos frios",
      role: "Nutrição profunda sem resíduo",
      origin: "Origem: Marrocos",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ceramidas vegetais",
      role: "Barreira e brilho. Ancoragem do folículo",
      origin: "Origem: biotecnologia vegetal",
      image:
        "https://images.unsplash.com/photo-1617897903246-369394cabda6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Antioxidantes",
      role: "Proteção contra estresse urbano pós-cirúrgico",
      origin: "Origem: complexo botânico",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bioativos lentos",
      role: "Performance em 8h. Resultado acumulado",
      origin: "Origem: liberação controlada",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    },
  ],
  macroImage:
    "https://images.unsplash.com/photo-1608248543801-ba977f7cb787?auto=format&fit=crop&w=1200&q=80",
  protocol: [
    {
      id: "pre",
      code: "PROTOCOLO 01",
      title: "Pré-implante",
      copy: "O couro cabeludo preparado recebe melhor.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
      featured: false,
    },
    {
      id: "pos",
      code: "PROTOCOLO 02",
      title: "Pós-implante",
      copy: "72 horas depois da cirurgia. Aqui começa o ritual.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      featured: true,
    },
    {
      id: "manut",
      code: "PROTOCOLO 03",
      title: "Manutenção",
      copy: "O folículo ancorou. Agora é consistência.",
      image:
        "https://images.unsplash.com/photo-1526256262350-4fb79b6fd659?auto=format&fit=crop&w=900&q=80",
      featured: false,
    },
  ],
  products: [
    {
      name: "Fase de ancoragem",
      price: "Sob consulta",
      note: "Tratamento pós-implante",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Consolidação folicular",
      price: "Sob consulta",
      note: "Manutenção clínica",
      image:
        "https://images.unsplash.com/photo-1608248543801-ba977f7cb787?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Preparo pré-cirúrgico",
      price: "Sob consulta",
      note: "Pré-implante",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kit protocolo completo",
      price: "Exclusivo paciente",
      note: "Linha integrada",
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
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
} as const;

export const manifestoLines = [
  "Antes do implante, o folículo precisa de preparo.",
  "Depois da cirurgia, ele precisa de protocolo.",
  "A Casa Ritual existe para esse momento.",
] as const;
