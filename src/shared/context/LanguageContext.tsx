import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface TranslationKeys {
  header: {
    product: string;
    contactless: string;
    merchant: string;
    partner: string;
    login: string;
  };
  hero: {
    title: string;
    subtitle: string;
    demo: string;
    explore: string;
  };
  whatIs: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
  };
  problem: {
    badge: string;
    title: string;
    desc: string;
    items: string[];
  };
  solution: {
    badge: string;
    title: string;
    desc: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
    card7Title: string;
    card7Desc: string;
    card8Title: string;
    card8Desc: string;
  };
  flexible: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    quote: string;
    cardTitle: string;
    flatTitle: string;
    flatDesc: string;
    interchangeTitle: string;
    interchangeDesc: string;
  };
  audience: {
    title1: string;
    desc1: string;
    title2: string;
    desc2: string;
    items: string[];
    industries: string[];
  };
  benefits: {
    badge: string;
    title: string;
    items: string[];
  };
  merchant: {
    badge: string;
    title: string;
    desc: string;
    leftTitle: string;
    leftDesc: string;
    rightCards: { title: string; desc: string }[];
  };
  cta: {
    title: string;
    demo: string;
    sales: string;
  };
  footer: {
    help: string;
    support: string;
    sales: string;
    merchant: string;
    english: string;
    spanish: string;
    copyright: string;
    legal: string[];
    columns: {
      title: string;
      links: string[];
    }[];
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const translations: Record<Language, TranslationKeys> = {
  en: {
    header: {
      product: 'Product',
      contactless: 'Contactless Ordering',
      merchant: 'Merchant Services',
      partner: 'Partner',
      login: 'Login'
    },
    hero: {
      title: 'Technology for financial solutions distributors',
      subtitle: 'One ecosystem. Total control.',
      demo: 'Request a Demo',
      explore: 'Explore Platform'
    },
    whatIs: {
      badge: 'Integrated Ecosystem',
      title: 'What is AB POS?',
      p1: 'AB POS is an integrated, unified ecosystem designed to centralize and simplify the management of your merchant network. It allows you to manage merchants, process payments, track sales, oversee operations, and get advanced reports, all from a single point of control.',
      p2: 'Forget about operational fragmentation. Our platform consolidates every business interaction to give you absolute visibility and optimize critical decision-making in real-time.'
    },
    problem: {
      badge: 'The Challenge',
      title: 'System fragmentation slows down your growth',
      desc: 'Distributors typically operate with disconnected platforms for sales, terminals, payments, support, and financial reports. This fragmentation leads to:',
      items: [
        'Limited real-time operational visibility',
        'Manual and error-prone operational processes',
        'Little control over the merchant experience',
        'Friction and difficulties when trying to scale the business',
        'Lack of flexibility when defining commission models for partners'
      ]
    },
    solution: {
      badge: 'The Solution',
      title: 'Everything connected in one ecosystem',
      desc: 'Centralize your merchants\' financial operations on a unified, high-performance platform.',
      card1Title: 'Payments and Digital Processing',
      card1Desc: 'Accept all types of cards and payment methods without friction. Agile integration with smart terminals and robust, secure payment gateways.',
      card2Title: 'Flexible Programs',
      card2Desc: 'Adaptable commission structures according to the requirements of your portfolio and your business strategy.',
      card3Title: 'Pricing Schemes',
      card3Desc: 'Alternates natively between Flat Rate and Interchange Plus pricing schemes to maximize margins.',
      card4Title: 'Comprehensive Merchant Management',
      card4Desc: 'Control of merchant onboarding, terminal configuration, and simplified administrative support within a unified environment.',
      card5Title: 'Sales Force',
      card5Desc: 'Control of sales agents, commissions earned, and dedicated acquisition tools.',
      card6Title: 'Support and Operation',
      card6Desc: 'Agile technical assistance and management tools to keep your network active and satisfied.',
      card7Title: 'Metrics and Reports',
      card7Desc: 'Audits, transaction volumes, and detailed deposit reconciliations.',
      card8Title: 'SaaS Tools',
      card8Desc: 'Cloud synchronization and dedicated administrative utilities to scale without limits.'
    },
    flexible: {
      badge: 'Commercial Schemes',
      title: 'Flexible Processing Programs',
      p1: 'AB POS is compatible with multiple processing programs, highlighting Flat Rate and Interchange Plus. Each distributor can structure the model that best responds to the needs of their merchants, their operating margins, and their growth pace.',
      p2: 'We understand that every portfolio is unique. Therefore, instead of imposing a single rigid payment system, AB POS provides business partners with absolute freedom to select the pricing scheme that best fits their business model.',
      quote: '"Your partnership. Your pricing strategy. One connected platform."',
      cardTitle: 'Tariff Models',
      flatTitle: 'Flat Rate',
      flatDesc: 'Simple and predictable pricing per transaction. It is ideal for small or medium-sized merchants who value consistency and quick, easy-to-understand billing reports.',
      interchangeTitle: 'Interchange Plus',
      interchangeDesc: 'Pricing based on the direct cost of card brands plus an established margin. Excellent for high-volume merchants seeking absolute transparency and cost optimization.'
    },
    audience: {
      title1: 'Who is it for?',
      desc1: 'AB POS is designed for dynamic and growing teams looking to centralize and scale the management of their financial operations:',
      title2: 'Industries We Support',
      desc2: 'We offer a robust technological infrastructure for distributors and commercial networks that provide services to various market sectors:',
      items: [
        'Financial solutions distributors',
        'Independent Sales Organizations (ISOs)',
        'B2B commercial partners',
        'Agents and promoters',
        'Operations teams',
        'Merchant networks and chains'
      ],
      industries: [
        'Restaurants and gastronomy',
        'Retail trade (Retail)',
        'Convenience stores',
        'Supermarkets and groceries',
        'Professional services',
        'Beauty and wellness',
        'Hospitality and tourism',
        'Mobile businesses and events',
        'Chains and franchises',
        'Growing SMBs'
      ]
    },
    benefits: {
      badge: 'Competitive Advantage',
      title: 'Key Benefits',
      items: [
        'Greater comprehensive operational control of the network',
        'Complete visibility of transactions and data in real-time',
        'Optimized commercial tracking and support',
        'Drastic reduction of manual processes and inefficiencies',
        'Greater capacity for technological and business scalability',
        'Informed decision-making based on real analytics',
        'Price flexibility with Flat Rate and Interchange Plus programs'
      ]
    },
    merchant: {
      badge: 'Commercial Technology',
      title: 'Solutions for Merchants',
      desc: 'Advanced tools that allow merchants in your network to operate more efficiently and sell more.',
      leftTitle: 'Points of Sale for Restaurants and Retail',
      leftDesc: 'Specialized checkout software and smart terminals designed to optimize service speed, table maps, order dispatch, tips, and inventory management in retail stores.',
      rightCards: [
        { title: 'Digital Payments', desc: 'Accept contactless cards, Apple Pay, and digital wallets.' },
        { title: 'Live Reports', desc: 'Monitor sales, billing, and shifts in real-time.' },
        { title: 'Kitchen Screens (KDS)', desc: 'Optimize communication between waiters and kitchen instantly.' },
        { title: 'Customer Display', desc: 'Total transparency at checkout to build customer loyalty.' },
        { title: 'Payment Links', desc: 'Create and share secure payment links via chat or email.' },
        { title: 'Retail Management', desc: 'Simplified inventory, stock, and supplier control.' }
      ]
    },
    cta: {
      title: 'Connect and simplify your financial operation in a single platform',
      demo: 'Request a Demo',
      sales: 'Talk to Sales'
    },
    footer: {
      help: 'How can we help you?',
      support: 'Technical Support:',
      sales: 'Contact Sales:',
      merchant: 'Merchant Service:',
      english: 'English',
      spanish: 'Spanish',
      copyright: 'Copyright © AB POS Solutions. All rights reserved. AB POS Solutions is a registered Independent Sales Organization (ISO) of PNC Bank, National Association, Pittsburgh, PA. | All processing programs require a Merchant Transaction Processing Agreement. The free point-of-sale program also requires a AB POS System Service Agreement. See Processing Agreement and Service Agreement Terms and Conditions for complete details.',
      legal: ['Terms and Conditions', 'Privacy Statement', 'Terms of Service'],
      columns: [
        {
          title: 'Product',
          links: ['Point Of Sale', 'Table Management', 'Analytics & Reporting', 'Staff Management', 'Menu Management', 'Pizza Builder', 'Integrate Payment', 'Handheld POS', 'Kitchen Display', 'Retail POS', 'Gift Cards']
        },
        {
          title: 'Contactless Ordering',
          links: ['NUV Mobile Ordering And Pay', 'QR Code Ordering', 'Virtual Restaurant', 'Contactless Pickup Ordering', 'Contactless Takeout Ordering', 'Contactless Delivery Ordering']
        },
        {
          title: 'Merchant Services',
          links: ['NUV Payment', 'In Your Store', 'On Your Website', 'Through Your APP', 'Online Payment', 'NUV Payment Programs']
        },
        {
          title: 'Sectors',
          links: ['Restaurants', 'Pizzerias', 'Bars and Nightclubs', 'Corporates', 'Quick Service', 'Cafeterías and Bakeries']
        },
        {
          title: 'Resources',
          links: ['Blog Login', 'Pricing', 'Ebooks', 'M/V Rescue']
        },
        {
          title: 'Partner',
          links: ['Partner Program', 'Partner Benefits', 'Clients Programs', 'Schedule A']
        },
        {
          title: 'Company',
          links: ['About Us', 'Contact Us', 'FAQ', 'Careers Form', 'Partner Form']
        }
      ]
    }
  },
  es: {
    header: {
      product: 'Producto',
      contactless: 'Pedidos sin Contacto',
      merchant: 'Servicios para Comercios',
      partner: 'Socios',
      login: 'Iniciar Sesión'
    },
    hero: {
      title: 'Tecnología para distribuidores de soluciones financieras',
      subtitle: 'Un solo ecosistema. Control total.',
      demo: 'Solicitar una Demo',
      explore: 'Explorar Plataforma'
    },
    whatIs: {
      badge: 'Ecosistema Integrado',
      title: '¿Qué es AB POS?',
      p1: 'AB POS es un ecosistema integral y unificado diseñado para centralizar y simplificar la gestión de tu red comercial. Te permite administrar comercios, procesar pagos, controlar ventas, supervisar operaciones y obtener reportes avanzados, todo desde un único punto de control.',
      p2: 'Olvídate de la fragmentación operativa. Nuestra plataforma consolida cada interacción del negocio para brindarte visibilidad absoluta y optimizar la toma de decisiones críticas en tiempo real.'
    },
    problem: {
      badge: 'El Desafío',
      title: 'La fragmentación de sistemas frena tu crecimiento',
      desc: 'Los distribuidores operan habitualmente con plataformas desconectadas para ventas, terminales, pagos, soporte y reportes financieros. Esta fragmentación genera:',
      items: [
        'Visibilidad operativa limitada en tiempo real',
        'Procesos operativos manuales y propensos a errores',
        'Poco control sobre la experiencia del comercio',
        'Fricciones y dificultades al intentar escalar el negocio',
        'Falta de flexibilidad al definir modelos de comisiones para socios'
      ]
    },
    solution: {
      badge: 'La Solución',
      title: 'Todo conectado en un solo ecosistema',
      desc: 'Centraliza las operaciones financieras de tus comercios en una plataforma unificada y de alto rendimiento.',
      card1Title: 'Pagos y Procesamiento Digital',
      card1Desc: 'Acepta todo tipo de tarjetas y métodos de pago sin fricciones. Integración ágil con terminales inteligentes y pasarelas de pago robustas y seguras.',
      card2Title: 'Programas Flexibles',
      card2Desc: 'Estructuras de comisiones adaptables según los requerimientos de tu portafolio y tu estrategia comercial.',
      card3Title: 'Esquemas de Precios',
      card3Desc: 'Alterna de manera nativa entre esquemas de Tarifa Plana (Flat Rate) e Interchange Plus para maximizar márgenes.',
      card4Title: 'Gestión Integral de Comercios',
      card4Desc: 'Control de altas de comercios, configuración de terminales y soporte administrativo simplificado dentro de un entorno unificado.',
      card5Title: 'Fuerza de Ventas',
      card5Desc: 'Control de agentes comerciales, comisiones devengadas y herramientas de captación dedicadas.',
      card6Title: 'Soporte y Operación',
      card6Desc: 'Herramientas ágiles de asistencia técnica y administración para mantener tu red activa y satisfecha.',
      card7Title: 'Métricas y Reportes',
      card7Desc: 'Auditorías, volúmenes de transacciones y conciliaciones de depósitos detallados.',
      card8Title: 'Herramientas SaaS',
      card8Desc: 'Sincronización en la nube y utilidades administrativas dedicadas para escalar sin límites.'
    },
    flexible: {
      badge: 'Esquemas Comerciales',
      title: 'Programas de Procesamiento Flexibles',
      p1: 'AB POS es compatible con múltiples programas de procesamiento, destacando Tarifa Plana (Flat Rate) e Interchange Plus. Cada distribuidor puede estructurar el modelo que mejor responda a las necesidades de sus comercios, sus márgenes operativos y su ritmo de crecimiento.',
      p2: 'Entendemos que cada portafolio es único. Por ello, en lugar de imponer un único sistema de cobro rígido, AB POS proporciona a los socios comerciales absoluta libertad para seleccionar el esquema de precios que mejor se ajuste a su modelo de negocio.',
      quote: '"Tu alianza. Tu estrategia de precios. Una sola plataforma conectada."',
      cardTitle: 'Modelos de Tarifas',
      flatTitle: 'Tarifa Plana (Flat Rate)',
      flatDesc: 'Precios sencillos y predecibles por transacción. Es ideal para comercios pequeños o medianos que valoran la consistencia y reportes de facturación rápidos y fáciles de comprender.',
      interchangeTitle: 'Interchange Plus',
      interchangeDesc: 'Precios basados en el costo directo de las marcas de tarjetas más un margen establecido. Excelente para comercios de alto volumen que buscan transparencia absoluta y optimización de costos.'
    },
    audience: {
      title1: '¿Para quién es?',
      desc1: 'AB POS está diseñado para equipos dinámicos y en crecimiento que buscan centralizar y escalar la administración de sus operaciones financieras:',
      title2: 'Sectores que Apoyamos',
      desc2: 'Ofrecemos una infraestructura tecnológica robusta para distribuidores y redes comerciales que brindan servicios a diversos sectores de mercado:',
      items: [
        'Distribuidores de soluciones financieras',
        'Organizaciones de Ventas Independientes (ISOs)',
        'Socios comerciales B2B',
        'Agentes y promotores',
        'Equipos de operaciones',
        'Redes y cadenas de comercios'
      ],
      industries: [
        'Restaurantes y gastronomía',
        'Comercio minorista (Retail)',
        'Tiendas de conveniencia',
        'Supermercados y abarrotes',
        'Servicios profesionales',
        'Estética y bienestar',
        'Hotelería y turismo',
        'Negocios móviles y eventos',
        'Cadenas y franquicias',
        'Pymes en crecimiento'
      ]
    },
    benefits: {
      badge: 'Ventaja Competitiva',
      title: 'Beneficios Clave',
      items: [
        'Mayor control operativo integral de la red',
        'Visibilidad completa de transacciones y datos en tiempo real',
        'Seguimiento y acompañamiento comercial optimizado',
        'Reducción drástica de procesos manuales e ineficiencias',
        'Mayor capacidad de escalabilidad tecnológica y del negocio',
        'Toma de decisiones informadas basada en analíticas reales',
        'Flexibilidad de precios con programas Tarifa Plana e Interchange Plus'
      ]
    },
    merchant: {
      badge: 'Tecnología Comercial',
      title: 'Soluciones para Comercios',
      desc: 'Herramientas avanzadas que permiten a los comercios de tu red operar de manera más eficiente y vender más.',
      leftTitle: 'Puntos de Venta para Restaurantes y Retail',
      leftDesc: 'Software de cobro especializado y terminales inteligentes diseñados para optimizar la velocidad del servicio, mapas de mesas, envío de comandas, propinas y administración de inventarios en tiendas minoristas.',
      rightCards: [
        { title: 'Pagos Digitales', desc: 'Acepta tarjetas sin contacto, Apple Pay y billeteras digitales.' },
        { title: 'Reportes en Vivo', desc: 'Supervisa ventas, facturación y turnos en tiempo real.' },
        { title: 'Pantallas de Cocina (KDS)', desc: 'Optimiza la comunicación entre meseros y cocina al instante.' },
        { title: 'Pantalla para el Cliente', desc: 'Transparencia total en el checkout para fidelizar clientes.' },
        { title: 'Enlaces de Pago', desc: 'Crea y comparte links de cobro seguros por chat o correo.' },
        { title: 'Gestión Minorista', desc: 'Control de inventario, stock y proveedores simplificado.' }
      ]
    },
    cta: {
      title: 'Conecta y simplifica tu operación financiera en una sola plataforma',
      demo: 'Solicitar una Demo',
      sales: 'Hablar con Ventas'
    },
    footer: {
      help: '¿Cómo podemos ayudarte?',
      support: 'Soporte Técnico:',
      sales: 'Contacto de Ventas:',
      merchant: 'Servicio para Comercios:',
      english: 'Inglés',
      spanish: 'Español',
      copyright: 'Copyright © AB POS Solutions. Todos los derechos reservados. AB POS Solutions es una Organización de Ventas Independiente (ISO) registrada de PNC Bank, National Association, Pittsburgh, PA. | Todos los programas de procesamiento requieren un Contrato de Procesamiento de Transacciones Comerciales. El programa de punto de venta gratuito también requiere un Contrato de Servicio del Sistema AB POS. Consulte los Términos y Condiciones del Contrato de Procesamiento y del Contrato de Servicio para obtener detalles completos.',
      legal: ['Términos y Condiciones', 'Declaración de Privacidad', 'Términos de Servicio'],
      columns: [
        {
          title: 'Producto',
          links: ['Punto de Venta', 'Gestión de Mesas', 'Reportes y Analítica', 'Control de Personal', 'Gestión de Menú', 'Creador de Pizzas', 'Integración de Pagos', 'POS Portátil', 'Pantalla de Cocina (KDS)', 'POS para Minoristas', 'Tarjetas de Regalo']
        },
        {
          title: 'Pedidos sin Contacto',
          links: ['Pedidos y Pago Móvil NUV', 'Pedidos por Código QR', 'Restaurante Virtual', 'Pedidos para Recoger', 'Pedidos para Llevar', 'Pedidos a Domicilio']
        },
        {
          title: 'Servicios para Comercios',
          links: ['Pago NUV', 'En Tu Tienda', 'En Tu Sitio Web', 'En Tu Aplicación', 'Pagos en Línea', 'Programas de Pago NUV']
        },
        {
          title: 'Sectores',
          links: ['Restaurantes', 'Pizzerías', 'Bares y Discotecas', 'Corporativos', 'Servicio Rápido', 'Cafeterías y Panaderías']
        },
        {
          title: 'Recursos',
          links: ['Acceso al Blog', 'Precios', 'Ebooks', 'Rescate de Comercios']
        },
        {
          title: 'Socios',
          links: ['Programa de Socios', 'Beneficios para Socios', 'Programas para Clientes', 'Anexo A']
        },
        {
          title: 'Empresa',
          links: ['Sobre Nosotros', 'Contacto', 'Preguntas Frecuentes', 'Bolsa de Trabajo', 'Formulario para Socios']
        }
      ]
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
