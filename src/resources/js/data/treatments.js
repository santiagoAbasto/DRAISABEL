/**
 * Catálogo público de tratamientos (contenido de marketing).
 *
 * Distinto del modelo administrativo `Tratamiento` (precios/sesiones internas).
 * Este catálogo es el que ve el visitante. Estructura lista para mapear a una
 * API: GET /api/treatments → Treatment[].
 *
 * @typedef {Object} Treatment
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {string} shortDescription
 * @property {string} description
 * @property {string[]} benefits
 * @property {string} duration
 * @property {string[]} recommendedFor
 * @property {string[]} afterCare
 * @property {('nude'|'sage'|'gold'|'champagne'|'blush')} accent
 * @property {string} icon  clave de icono (ver Components/public/Icon.jsx)
 * @property {boolean} featured
 */

export const treatmentCategories = [
    { id: 'all', label: 'Todos' },
    { id: 'armonizacion', label: 'Armonización' },
    { id: 'bioestimulacion', label: 'Bioestimulación' },
    { id: 'piel', label: 'Calidad de piel' },
    { id: 'regenerativa', label: 'Medicina regenerativa' },
    { id: 'rejuvenecimiento', label: 'Rejuvenecimiento' },
];

/** Imagen editorial por categoría (mostrada en el panel de detalle). */
export const categoryImages = {
    armonizacion: '/media/armonizacion-profile.jpg',
    bioestimulacion: '/media/edu-bioestimuladores.jpg',
    piel: '/media/piel-dewy.jpg',
    regenerativa: '/media/regenerativa-serum.jpg',
    rejuvenecimiento: '/media/skin-texture.jpg',
};

export const treatments = [
    {
        slug: 'armonizacion-facial',
        title: 'Armonización Facial',
        category: 'armonizacion',
        icon: 'face',
        accent: 'nude',
        featured: true,
        duration: '45–60 min · valoración previa',
        shortDescription:
            'Equilibra los rasgos respetando tu identidad, sin cambiar quién eres.',
        description:
            'Un plan global que estudia las proporciones de tu rostro para armonizar volúmenes y líneas de forma natural. Combinamos técnicas según tu anatomía, con un enfoque conservador y resultados que se ven como tú, en tu mejor versión.',
        benefits: [
            'Equilibrio de proporciones faciales',
            'Resultados graduales y reversibles',
            'Enfoque conservador y natural',
        ],
        recommendedFor: [
            'Quien busca verse descansada y armónica',
            'Primer acercamiento a la medicina estética',
        ],
        afterCare: [
            'Evitar ejercicio intenso 24–48 h',
            'No manipular la zona tratada',
            'Seguir las indicaciones médicas entregadas',
        ],
    },
    {
        slug: 'botox-y-rellenos',
        title: 'Botox y Rellenos Faciales',
        category: 'armonizacion',
        icon: 'drop',
        accent: 'champagne',
        featured: true,
        duration: '30–45 min',
        shortDescription:
            'Suaviza líneas de expresión y repone volúmenes con técnica médica precisa.',
        description:
            'Toxina botulínica para relajar líneas dinámicas y rellenos de ácido hialurónico para reponer volúmenes perdidos. Aplicados con criterio médico y dosis personalizadas para conservar tu expresión natural.',
        benefits: [
            'Líneas de expresión más suaves',
            'Volúmenes repuestos con naturalidad',
            'Expresión conservada, nunca congelada',
        ],
        recommendedFor: [
            'Líneas en frente, entrecejo o patas de gallo',
            'Pérdida de volumen en pómulos o labios',
        ],
        afterCare: [
            'Mantener la cabeza erguida 4 h',
            'Evitar calor intenso y alcohol 24 h',
            'No masajear la zona salvo indicación',
        ],
    },
    {
        slug: 'facial-slimming',
        title: 'Facial Slimming',
        category: 'armonizacion',
        icon: 'face',
        accent: 'gold',
        featured: false,
        duration: '30 min',
        shortDescription:
            'Define el contorno facial y afina el tercio inferior de forma sutil.',
        description:
            'Protocolo orientado a estilizar el contorno y aliviar la tensión maseterina. Mejora la definición del óvalo facial respetando la expresión y la función masticatoria.',
        benefits: [
            'Contorno facial más definido',
            'Alivio de tensión y bruxismo',
            'Resultado progresivo y natural',
        ],
        recommendedFor: [
            'Sensación de rostro ensanchado',
            'Tensión mandibular o bruxismo leve',
        ],
        afterCare: [
            'Hidratación habitual',
            'Evitar masticar chicle en exceso los primeros días',
        ],
    },
    {
        slug: 'bioestimuladores-de-colageno',
        title: 'Bioestimuladores de Colágeno',
        category: 'bioestimulacion',
        icon: 'spark',
        accent: 'sage',
        featured: true,
        duration: '45 min · esquema por sesiones',
        shortDescription:
            'Activan tu propio colágeno para una piel más firme con el tiempo.',
        description:
            'Estimulan la producción natural de colágeno para mejorar firmeza, densidad y calidad de la piel de forma progresiva. El resultado es gradual y luce natural porque proviene de tu propio tejido.',
        benefits: [
            'Mayor firmeza y densidad cutánea',
            'Mejora progresiva y natural',
            'Estímulo del colágeno propio',
        ],
        recommendedFor: [
            'Flacidez leve a moderada',
            'Piel que ha perdido firmeza',
        ],
        afterCare: [
            'Masajear según indicación médica',
            'Evitar sol directo y sauna 1 semana',
            'Hidratar y usar protector solar',
        ],
    },
    {
        slug: 'redensificacion-facial',
        title: 'Redensificación Facial',
        category: 'bioestimulacion',
        icon: 'layers',
        accent: 'nude',
        featured: false,
        duration: '40 min',
        shortDescription:
            'Recupera densidad y soporte en zonas que se han vaciado con los años.',
        description:
            'Trabaja la estructura profunda para devolver soporte y densidad al rostro, mejorando la calidad del tejido sin sobrecargar volúmenes.',
        benefits: [
            'Más soporte estructural',
            'Piel de mejor calidad',
            'Aspecto descansado',
        ],
        recommendedFor: ['Pérdida de densidad por la edad', 'Piel apagada y sin soporte'],
        afterCare: ['Evitar ejercicio intenso 48 h', 'Protección solar diaria'],
    },
    {
        slug: 'skin-boosters',
        title: 'Skin Boosters e Hidratación Profunda',
        category: 'piel',
        icon: 'drop',
        accent: 'blush',
        featured: true,
        duration: '30–40 min',
        shortDescription:
            'Hidratación desde el interior para una piel luminosa y jugosa.',
        description:
            'Microinfiltraciones de activos hidratantes que mejoran la luminosidad, la elasticidad y la textura de la piel desde sus capas profundas. Ideal para ese "glow" natural y saludable.',
        benefits: [
            'Piel más luminosa y jugosa',
            'Mejor textura y elasticidad',
            'Hidratación profunda y duradera',
        ],
        recommendedFor: [
            'Piel deshidratada o apagada',
            'Quien busca luminosidad natural',
        ],
        afterCare: [
            'Hidratar con frecuencia',
            'Protector solar diario',
            'Evitar maquillaje 12 h',
        ],
    },
    {
        slug: 'calidad-de-piel',
        title: 'Calidad de Piel',
        category: 'piel',
        icon: 'spark',
        accent: 'gold',
        featured: true,
        duration: 'plan personalizado',
        shortDescription:
            'Un plan integral para textura, poros, manchas y luminosidad.',
        description:
            'Más allá de las arrugas: trabajamos textura, poros, manchas y luminosidad con un plan combinado y progresivo, adaptado al estado real de tu piel tras la evaluación.',
        benefits: [
            'Textura más uniforme',
            'Tono y luminosidad mejorados',
            'Plan a medida de tu piel',
        ],
        recommendedFor: [
            'Textura irregular o poros marcados',
            'Tono apagado o desigual',
        ],
        afterCare: [
            'Rutina cosmética indicada',
            'Protección solar estricta',
        ],
    },
    {
        slug: 'tratamiento-ojeras',
        title: 'Tratamiento para Ojeras',
        category: 'piel',
        icon: 'eye',
        accent: 'sage',
        featured: false,
        duration: '30 min',
        shortDescription:
            'Mirada más descansada tratando la causa real de la ojera.',
        description:
            'Evaluamos el origen de la ojera (vascular, pigmentaria o por volumen) para elegir el abordaje adecuado y conseguir una mirada más fresca y descansada.',
        benefits: ['Mirada más descansada', 'Abordaje según el tipo de ojera', 'Resultado natural'],
        recommendedFor: ['Ojeras marcadas', 'Aspecto de cansancio en la mirada'],
        afterCare: ['Frío local según indicación', 'Evitar frotar la zona'],
    },
    {
        slug: 'medicina-regenerativa-facial',
        title: 'Medicina Regenerativa Facial',
        category: 'regenerativa',
        icon: 'leaf',
        accent: 'sage',
        featured: true,
        duration: '45–60 min',
        shortDescription:
            'Aprovecha los mecanismos de reparación de tu propio organismo.',
        description:
            'Protocolos que activan los mecanismos naturales de regeneración para mejorar la calidad, la luminosidad y la vitalidad de la piel de forma biocompatible y progresiva.',
        benefits: [
            'Regeneración con tus propios recursos',
            'Mejora de calidad y vitalidad',
            'Enfoque biocompatible',
        ],
        recommendedFor: ['Piel envejecida o fatigada', 'Búsqueda de resultados naturales'],
        afterCare: ['Evitar sol y calor intenso', 'Hidratación y protección solar'],
    },
    {
        slug: 'exosomas',
        title: 'Exosomas',
        category: 'regenerativa',
        icon: 'spark',
        accent: 'gold',
        featured: false,
        duration: '40 min',
        shortDescription:
            'Tecnología de señalización celular para calidad y luminosidad.',
        description:
            'Activos de última generación que favorecen la comunicación celular para mejorar la calidad de la piel, la luminosidad y la respuesta regenerativa, dentro de un plan supervisado.',
        benefits: ['Luminosidad y calidad de piel', 'Apoyo a la regeneración', 'Resultado progresivo'],
        recommendedFor: ['Piel apagada', 'Complemento a otros protocolos'],
        afterCare: ['Protección solar diaria', 'Seguir el plan indicado'],
    },
    {
        slug: 'adn-de-salmon',
        title: 'ADN de Salmón',
        category: 'regenerativa',
        icon: 'drop',
        accent: 'blush',
        featured: false,
        duration: '30–40 min',
        shortDescription:
            'Polinucleótidos que mejoran hidratación, firmeza y reparación.',
        description:
            'Los polinucleótidos derivados de ADN de salmón favorecen la hidratación profunda, la elasticidad y la reparación de la piel, con un perfil de tolerancia muy favorable.',
        benefits: ['Hidratación y elasticidad', 'Apoyo a la reparación cutánea', 'Buena tolerancia'],
        recommendedFor: ['Piel fina o deshidratada', 'Zonas delicadas como el contorno de ojos'],
        afterCare: ['Evitar maquillaje 12 h', 'Hidratación y protección solar'],
    },
    {
        slug: 'regeneracion-cutanea',
        title: 'Regeneración Cutánea',
        category: 'regenerativa',
        icon: 'leaf',
        accent: 'sage',
        featured: false,
        duration: 'plan por sesiones',
        shortDescription:
            'Renueva la superficie de la piel mejorando textura y tono.',
        description:
            'Protocolos de renovación que estimulan el recambio celular para mejorar textura, tono y luminosidad, definidos según la tolerancia y los objetivos de cada paciente.',
        benefits: ['Renovación de la superficie', 'Mejor textura y tono', 'Plan a medida'],
        recommendedFor: ['Textura irregular', 'Marcas o tono desigual'],
        afterCare: ['Protección solar estricta', 'Rutina post-tratamiento indicada'],
    },
    {
        slug: 'rejuvenecimiento-sin-rellenos',
        title: 'Rejuvenecimiento sin Rellenos',
        category: 'rejuvenecimiento',
        icon: 'spark',
        accent: 'champagne',
        featured: true,
        duration: 'plan personalizado',
        shortDescription:
            'Rejuvenece la calidad de la piel sin añadir volumen.',
        description:
            'Para quienes prefieren no usar rellenos: combinamos estímulos de colágeno, hidratación y regeneración para rejuvenecer la piel mejorando su calidad, no su volumen.',
        benefits: [
            'Rejuvenecimiento sin volumen añadido',
            'Mejora de la calidad de la piel',
            'Resultados naturales',
        ],
        recommendedFor: [
            'Quien no desea rellenos',
            'Búsqueda de piel más sana y luminosa',
        ],
        afterCare: ['Protección solar diaria', 'Seguir el plan combinado indicado'],
    },
    {
        slug: 'adipoestructuracion-facial',
        title: 'Adipoestructuración Facial',
        category: 'rejuvenecimiento',
        icon: 'layers',
        accent: 'nude',
        featured: false,
        duration: '45 min',
        shortDescription:
            'Reorganiza los volúmenes naturales para un rostro descansado.',
        description:
            'Trabaja la redistribución de los compartimentos grasos del rostro para recuperar un aspecto descansado y armónico, respetando tu estructura natural.',
        benefits: ['Aspecto más descansado', 'Volúmenes reorganizados', 'Resultado armónico'],
        recommendedFor: ['Rostro demacrado o cansado', 'Pérdida de volumen por la edad'],
        afterCare: ['Reposo relativo 48 h', 'Seguir indicaciones médicas'],
    },
];

export const featuredTreatments = treatments.filter((t) => t.featured);

export function getTreatmentsByCategory(categoryId) {
    if (!categoryId || categoryId === 'all') return treatments;
    return treatments.filter((t) => t.category === categoryId);
}
