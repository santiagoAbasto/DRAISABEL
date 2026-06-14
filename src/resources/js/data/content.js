/**
 * Contenido editorial del home: proceso, confianza, testimonios, FAQ y artículos.
 * Datos mock listos para mapear a API.
 */

/** Por qué elegir a la Dra. (sección de confianza). */
export const trustPoints = [
    {
        icon: 'shield',
        title: 'Respaldo médico real',
        text: 'Cada plan parte de una evaluación médica. No vendemos procedimientos sueltos, diseñamos un tratamiento para ti.',
    },
    {
        icon: 'leaf',
        title: 'Resultados naturales',
        text: 'Un criterio conservador: realzar tu armonía sin cambiar quién eres. Que se note que estás bien, no qué te hiciste.',
    },
    {
        icon: 'spark',
        title: 'Ciencia + arte',
        text: 'Técnica médica actualizada y una mirada estética cuidada. La combinación que produce resultados sutiles y seguros.',
    },
    {
        icon: 'heart',
        title: 'Acompañamiento integral',
        text: 'Te acompañamos antes, durante y después. Indicaciones claras, seguimiento y una vía directa para tus dudas.',
    },
];

/** Journey del paciente — Hyperframe 3. */
export const journeySteps = [
    {
        step: '01',
        title: 'Evaluación médica',
        text: 'Conversamos sobre tus objetivos y revisamos tu salud y tu piel. Sin presión, con información clara.',
    },
    {
        step: '02',
        title: 'Diagnóstico personalizado',
        text: 'Analizamos tu rostro y definimos qué se puede mejorar de forma realista y segura.',
    },
    {
        step: '03',
        title: 'Plan de tratamiento',
        text: 'Diseñamos un plan a tu medida, con tiempos, cuidados y expectativas honestas.',
    },
    {
        step: '04',
        title: 'Procedimiento seguro',
        text: 'Realizamos el tratamiento con técnica médica, materiales de calidad y máxima atención al detalle.',
    },
    {
        step: '05',
        title: 'Seguimiento y resultados',
        text: 'Te acompañamos en el post-tratamiento y valoramos la evolución para cuidar tu resultado.',
    },
];

/** Testimonios genéricos y éticos — sin promesas de resultado. */
export const testimonials = [
    {
        quote: 'Me sentí acompañada desde la evaluación. Me explicaron todo con calma y sin presionarme.',
        author: 'Paciente · Santa Cruz',
        context: 'Calidad de piel',
    },
    {
        quote: 'El resultado se ve natural y armónico. Justo lo que buscaba: verme descansada, no diferente.',
        author: 'Paciente · Santiago',
        context: 'Armonización facial',
    },
    {
        quote: 'Me explicaron todo con claridad, incluidos los cuidados después. Mucha confianza.',
        author: 'Paciente · Santa Cruz',
        context: 'Bioestimuladores',
    },
    {
        quote: 'La atención fue muy profesional y cercana. Volvería sin dudarlo.',
        author: 'Paciente · Santiago',
        context: 'Skin boosters',
    },
];

/** FAQ del home. */
export const faqs = [
    {
        q: '¿Necesito una evaluación antes de cualquier tratamiento?',
        a: 'Sí. Toda intervención parte de una evaluación médica para entender tus objetivos, revisar tu salud y proponerte un plan seguro y realista.',
    },
    {
        q: '¿Los resultados se ven naturales?',
        a: 'Ese es nuestro enfoque. Trabajamos con criterio conservador para realzar tu armonía sin cambiar tu identidad. Los resultados pueden variar según cada paciente.',
    },
    {
        q: '¿Los tratamientos son dolorosos?',
        a: 'La mayoría son bien tolerados y se utilizan medidas para tu confort. En la evaluación te explicamos qué esperar en cada caso.',
    },
    {
        q: '¿Cuánto duran los resultados?',
        a: 'Depende del tratamiento y de cada persona. Durante la consulta te damos una expectativa honesta de duración y mantenimiento.',
    },
    {
        q: '¿Atienden en Bolivia y en Chile?',
        a: 'Sí. Coordinamos la agenda según la sede. Escríbenos por WhatsApp y te orientamos sobre disponibilidad.',
    },
];

/** Artículos educativos (previews). */
export const articles = [
    {
        slug: 'que-son-los-bioestimuladores-de-colageno',
        title: '¿Qué son los bioestimuladores de colágeno?',
        excerpt:
            'Cómo funcionan, para quién están indicados y por qué sus resultados son graduales y naturales.',
        category: 'Bioestimulación',
        readingTime: '5 min',
        publishedAt: '2026-04-18',
        featured: true,
        image: '/media/edu-bioestimuladores.jpg',
    },
    {
        slug: 'diferencia-entre-rellenar-y-rejuvenecer',
        title: 'Diferencia entre rellenar y rejuvenecer',
        excerpt:
            'No siempre se trata de añadir volumen. A veces, rejuvenecer la piel es el camino más natural.',
        category: 'Naturalidad',
        readingTime: '4 min',
        publishedAt: '2026-03-30',
        featured: false,
        image: '/media/skin-texture.jpg',
    },
    {
        slug: 'como-cuidar-tu-piel-despues-de-un-tratamiento',
        title: 'Cómo cuidar tu piel después de un tratamiento',
        excerpt:
            'El post-tratamiento importa tanto como el procedimiento. Indicaciones para cuidar tu resultado.',
        category: 'Cuidados post-tratamiento',
        readingTime: '6 min',
        publishedAt: '2026-03-12',
        featured: false,
        image: '/media/cuidados.jpg',
    },
    {
        slug: 'naturalidad-en-medicina-estetica',
        title: 'Naturalidad en medicina estética: qué significa realmente',
        excerpt:
            'Un resultado natural no es hacerse menos, es hacerse bien. Hablemos de criterio y mesura.',
        category: 'Naturalidad',
        readingTime: '5 min',
        publishedAt: '2026-02-20',
        featured: false,
        image: '/media/naturalidad.jpg',
    },
];
