/**
 * Set de iconos de línea, sin dependencias externas.
 * Trazo fino y elegante, coherente con la dirección médico-premium.
 *
 * Uso: <Icon name="spark" className="h-5 w-5" />
 */

const paths = {
    'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
    'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
    check: <path d="M20 6 9 17l-5-5" />,
    'chevron-down': <path d="m6 9 6 6 6-6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    star: (
        <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9z" />
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </>
    ),
    'map-pin': (
        <>
            <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="2.6" />
        </>
    ),
    phone: (
        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 6a1 1 0 0 1 1-2Z" />
    ),
    calendar: (
        <>
            <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
            <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
        </>
    ),
    whatsapp: (
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 0 1 6 10.6.9.9 0 0 0-.1.7l.6 2.1-2.2-.6a.9.9 0 0 0-.6.1A7 7 0 1 1 12 5Zm-2.4 3.3c-.2 0-.5 0-.7.4-.3.4-.9 1-.9 2.3s1 2.7 1.1 2.9c.1.2 1.8 3 4.5 4 .6.3 1.1.4 1.5.3.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z" />
    ),
    instagram: (
        <>
            <rect x="4" y="4" width="16" height="16" rx="4.5" />
            <circle cx="12" cy="12" r="3.6" />
            <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </>
    ),
    shield: (
        <>
            <path d="M12 3 5 6v5c0 4.4 3 8.2 7 9.5 4-1.3 7-5.1 7-9.5V6Z" />
            <path d="m9 12 2 2 4-4" />
        </>
    ),
    heart: (
        <path d="M12 20s-7-4.4-9-9a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c-2 4.6-7 9-7 9Z" />
    ),
    leaf: (
        <>
            <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z" />
            <path d="M5 19c4-6 8-8 11-9" />
        </>
    ),
    spark: (
        <path d="M12 3c.6 4 1.9 5.3 6 6-4.1.7-5.4 2-6 6-.6-4-1.9-5.3-6-6 4.1-.7 5.4-2 6-6Z" />
    ),
    drop: (
        <path d="M12 3.5c3 3.8 5.5 6.7 5.5 9.7a5.5 5.5 0 0 1-11 0c0-3 2.5-5.9 5.5-9.7Z" />
    ),
    layers: (
        <>
            <path d="m12 4 8 4-8 4-8-4 8-4Z" />
            <path d="m4 12 8 4 8-4M4 16l8 4 8-4" />
        </>
    ),
    eye: (
        <>
            <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
            <circle cx="12" cy="12" r="2.6" />
        </>
    ),
    face: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M9 10h.01M15 10h.01M9 15c.9.8 2 1.2 3 1.2s2.1-.4 3-1.2" />
        </>
    ),
};

export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.6, ...props }) {
    const content = paths[name];
    if (!content) return null;

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
            focusable="false"
            {...props}
        >
            {content}
        </svg>
    );
}
