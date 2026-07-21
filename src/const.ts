export const METAMUNDI_DATA = {
  contact: {
    email: "atendimento@metamundi.com.br",
    phones: {
      ce: "+55 (85) 99903-0195",
      rj: "+55 (21) 96898-8039"
    },
    social: {
      instagram: "https://instagram.com/metamundi"
    }
  },
  images: {
    // Imagens de marca oficiais transparentes e nítidas extraídas dos PDFs
    logoWhite: "/img/marca_branco_f6d1978c.png",
    logoColor: "/img/marca_prioritaria_90187330.png",
    logoNoGreen: "/img/marca_sem_verde_6c34f69a.png",
    logoNoBlue: "/img/marca_sem_azul_870580b9.png",
    icone: "/img/icone_2d97db53.png",
    
    // Imagens documentais de altíssima qualidade (4K/Ultra HD) do Unsplash com excelente contraste e definição impecável
    hero: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1920&q=90", // Pátio de aeroporto com avião comercial nítido e iluminação espetacular de pôr do sol
    meeting: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=90", // Reunião de equipe autêntica, moderna e de altíssima definição em sala de reuniões nítida
    lounge: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1600&q=90", // Lounge aeroporto de altíssima definição com executivo em trânsito
    businesswoman: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=90" // Executiva profissional de altíssima definição com arquitetura moderna e excelente contraste
  },
  indicators: [
    {
      value: "+200",
      label: "Clientes atendidos",
      desc: "Empresas e organizações de todos os setores."
    },
    {
      value: "+R$ 2M",
      label: "Em economia gerada",
      desc: "Redução real de custos operacionais e tarifas."
    },
    {
      value: "Até 10%",
      label: "Economia estratégica",
      desc: "Mapeamento ativo e inteligência de tarifas aéreas."
    },
    {
      value: "100%",
      label: "Atendimento humano",
      desc: "Suporte especializado por pessoas reais 24 horas."
    }
  ],
  solutions: [
    {
      title: "Passagens Aéreas",
      desc: "Cotação inteligente de rotas, tarifas exclusivas e emissão ágil para voos nacionais e internacionais.",
      icon: "Plane"
    },
    {
      title: "Hospedagem Corporativa",
      desc: "Curadoria e negociação de tarifas em hotéis parceiros, garantindo conforto, segurança e custo-benefício.",
      icon: "Hotel"
    },
    {
      title: "Seguro Viagem",
      desc: "Proteção completa para os colaboradores em trânsito, com cobertura para despesas médicas e imprevistos.",
      icon: "ShieldCheck"
    },
    {
      title: "Locação de Veículos",
      desc: "Parcerias com as principais locadoras para garantir mobilidade terrestre ágil e com tarifas corporativas.",
      icon: "Car"
    },
    {
      title: "Grupos e Eventos",
      desc: "Logística integrada e coordenação de deslocamentos para congressos, missões, convenções e treinamentos.",
      icon: "Users"
    },
    {
      title: "Gestão e Relatórios",
      desc: "Centralização de faturamento, controle por centro de custo e relatórios analíticos de economia.",
      icon: "BarChart3"
    },
    {
      title: "Suporte 24 Horas",
      desc: "Atendimento humano especializado de verdade para lidar com conexões, cancelamentos e imprevistos.",
      icon: "Headphones"
    }
  ],
  sectors: [
    {
      id: "terceiro-setor",
      name: "Terceiro Setor",
      desc: "Atendemos organizações sem fins lucrativos, fundações e ONGs com total transparência e rigorosa prestação de contas. Entendemos que cada centavo economizado em logística é revertido para o impacto social. Oferecemos tarifas humanitárias e relatórios customizados por projeto ou doador internacional."
    },
    {
      id: "setor-publico",
      name: "Setor Público",
      desc: "Atendimento a prefeituras, consórcios de saúde (como ICISMEP), autarquias e órgãos governamentais. Operação em estrita conformidade com as regras de empenho, licitação e compliance fiscal. Oferecemos relatórios de rastreabilidade total e justificativas de menor tarifa exigidas por órgãos de controle."
    },
    {
      id: "empresas-privadas",
      name: "Empresas Privadas",
      desc: "Gestão estratégica de viagens para empresas que buscam descentralizar a operação sem perder o controle financeiro. Desenhamos fluxos de aprovação customizados, parametrizamos políticas de viagens sob medida e oferecemos faturamento corporativo flexível com prazos adaptados ao fluxo de caixa."
    },
    {
      id: "eventos-grupos",
      name: "Eventos, Grupos e Missões",
      desc: "Inteligência logística para deslocamentos em massa. Seja para convenções de vendas, missões técnicas internacionais, eventos acadêmicos ou corporativos, coordenamos hospedagem, passagens aéreas especiais para grupos e transfers terrestres com monitoramento em tempo real."
    }
  ],
  comparison: {
    headers: ["Diferencial", "MetaMundi", "Busca Autônoma (Internet)", "Agências Tradicionais"],
    rows: [
      {
        feature: "Atendimento humano 24h real",
        metamundi: "Sim, equipe sênior dedicada sem robôs",
        competitors: "Não, suporte impessoal ou inexistente",
        traditional: "Parcial, focado apenas em horário comercial"
      },
      {
        feature: "Controle por Centro de Custo",
        metamundi: "Sim, faturamento estruturado por projeto",
        competitors: "Não, compras avulsas no cartão de crédito",
        traditional: "Sim, mas com processos manuais e lentos"
      },
      {
        feature: "Economia Estratégica Ativa",
        metamundi: "Sim, curadoria ativa e inteligência tarifária",
        competitors: "Não, o usuário precisa buscar e comparar",
        traditional: "Não, focado apenas em emitir o que é pedido"
      },
      {
        feature: "Faturamento Corporativo",
        metamundi: "Sim, prazos flexíveis sob medida",
        competitors: "Não, pagamento imediato na compra",
        traditional: "Sim, mas com burocracia excessiva"
      },
      {
        feature: "Compliance e Notas Fiscais",
        metamundi: "Sim, total transparência e notas consolidadas",
        competitors: "Não, notas fiscais difíceis de obter/organizar",
        traditional: "Sim, em conformidade com as políticas"
      }
    ]
  },
  feedbacks: [
    {
      quote: "A MetaMundi transformou nossa gestão de viagens. O controle por centro de custo e a prestação de contas simplificada economizaram dezenas de horas da nossa equipe financeira.",
      author: "Ana Carolina Ramos",
      company: "Diretora Financeira - Instituto de Impacto Social"
    },
    {
      quote: "O atendimento humano 24h deles é impecável. Tivemos um voo cancelado na madrugada em uma missão internacional e a equipe resolveu tudo antes mesmo de acordarmos.",
      author: "Rodrigo Mendonça",
      company: "Coordenador de Projetos Globais"
    },
    {
      quote: "Para nós do setor público, o compliance fiscal e a agilidade nas notas de empenho são cruciais. A MetaMundi nos atende com total rigor técnico e transparência.",
      author: "Marcos Vinícius Silva",
      company: "Secretário de Administração - Consórcio de Saúde"
    }
  ],
  insights: [
    {
      title: "Como estruturar uma política de viagens corporativas eficiente",
      excerpt: "Descubra os passos fundamentais para criar regras claras de aprovação, limites de gastos e garantir a satisfação do colaborador sem estourar o orçamento.",
      category: "Gestão Financeira",
      date: "02 Jun, 2026",
      readTime: "5 min de leitura"
    },
    {
      title: "Prestação de contas no Terceiro Setor: boas práticas logísticas",
      excerpt: "Entenda as exigências de agências de fomento internacionais e como organizar notas fiscais, faturas e justificativas de menor tarifa de forma impecável.",
      category: "Compliance",
      date: "28 Mai, 2026",
      readTime: "7 min de leitura"
    },
    {
      title: "O impacto oculto do suporte automatizado em viagens de negócios",
      excerpt: "Por que depender de chatbots e centrais telefônicas robotizadas em momentos de crise pode custar caro para a produtividade e segurança da sua empresa.",
      category: "Tendências",
      date: "15 Mai, 2026",
      readTime: "4 min de leitura"
    }
  ]
};
