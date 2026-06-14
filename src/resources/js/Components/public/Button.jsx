import { Link } from '@inertiajs/react';
import Icon from '@/Components/public/Icon';

/**
 * Botón de marca. Variantes: primary (espresso), secondary (contorno),
 * ghost, gold y light (para fondos oscuros). Polimórfico: usa <Link> de Inertia
 * si recibe `href` interno, <a> si es externo, o <button> por defecto.
 */
const variants = {
    primary:
        'bg-espresso text-ivory hover:bg-cocoa shadow-card hover:shadow-soft',
    secondary:
        'bg-transparent text-espresso ring-1 ring-inset ring-cocoa/25 hover:ring-cocoa/50 hover:bg-white/60',
    ghost: 'bg-transparent text-espresso hover:bg-espresso/5',
    gold: 'bg-gold text-espresso hover:bg-gold/90 shadow-card',
    light: 'bg-ivory text-espresso hover:bg-white shadow-card',
    'light-outline':
        'bg-transparent text-ivory ring-1 ring-inset ring-ivory/35 hover:bg-ivory/10',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-[0.95rem]',
    lg: 'px-7 py-3.5 text-base',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    icon,
    iconRight,
    className = '',
    children,
    ...props
}) {
    const base =
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out-quart focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none';
    const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    const inner = (
        <>
            {icon && <Icon name={icon} className="h-[1.15em] w-[1.15em]" />}
            {children}
            {iconRight && (
                <Icon
                    name={iconRight}
                    className="h-[1.05em] w-[1.05em] transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5"
                />
            )}
        </>
    );

    // Enlaces externos o anclas internas (#...) → <a> nativo (sin visita Inertia).
    const isAnchor = typeof href === 'string' && href.startsWith('#');

    if (href && external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                {...props}
            >
                {inner}
            </a>
        );
    }

    if (href && isAnchor) {
        return (
            <a href={href} className={classes} {...props}>
                {inner}
            </a>
        );
    }

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {inner}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {inner}
        </button>
    );
}
