/**
 * Datos de marca y contacto — Dra. Isabel Piérola.
 *
 * Fuente única de verdad para el frontend público. Cuando exista backend,
 * estos valores pueden venir de /api/site-settings sin cambiar los componentes.
 *
 * NOTA: reemplazar `whatsapp.number` y direcciones por los datos reales de la
 * clínica antes de publicar. El número va en formato internacional sin signos.
 */

export const site = {
    name: 'Dra. Isabel Piérola',
    role: 'Medicina Estética Avanzada',
    concept: 'Belleza natural con respaldo médico',
    subconcept:
        'Tratamientos médico-estéticos personalizados para realzar tu armonía facial, mejorar la calidad de tu piel y acompañarte con resultados sutiles, seguros y naturales.',

    whatsapp: {
        // Placeholder — sustituir por el número real de la clínica.
        number: '59170000000',
        defaultMessage:
            'Hola, me gustaría agendar una evaluación médica con la Dra. Isabel Piérola.',
    },

    social: {
        instagram: 'https://www.instagram.com/draisabelpierola',
        website: 'https://draisabelpierola.com',
    },

    locations: [
        {
            id: 'bolivia',
            country: 'Bolivia',
            city: 'Santa Cruz de la Sierra',
            address: 'Consulta médica — dirección a confirmar',
            hours: 'Lun a Vie · 09:00 – 19:00 · Sáb 09:00 – 13:00',
            active: true,
        },
        {
            id: 'chile',
            country: 'Chile',
            city: 'Santiago',
            address: 'Atención bajo agenda',
            hours: 'Agenda coordinada por WhatsApp',
            active: true,
        },
    ],

    /** Indicadores de confianza (no son promesas de resultado). */
    stats: [
        { value: '12+', label: 'años en medicina estética' },
        { value: '100%', label: 'planes con evaluación previa' },
        { value: '2', label: 'sedes · Bolivia y Chile' },
        { value: '4.9', label: 'valoración de pacientes' },
    ],
};

/** Construye un enlace wa.me con mensaje opcional. */
export function whatsappLink(message) {
    const text = encodeURIComponent(message || site.whatsapp.defaultMessage);
    return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

/** Navegación pública. Anclas dentro del home + rutas de autenticación. */
export const navLinks = [
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'La Dra.', href: '#sobre-la-dra' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contenido', href: '#contenido' },
    { label: 'Contacto', href: '#contacto' },
];

/** Disclaimers médicos reutilizables. */
export const disclaimers = {
    results:
        'Los resultados pueden variar según cada paciente. Todo tratamiento requiere evaluación médica previa.',
    educational:
        'La información publicada tiene fines educativos y no reemplaza una consulta médica personalizada.',
    images:
        'Las imágenes de referencia se utilizan de forma ética y con autorización.',
};
