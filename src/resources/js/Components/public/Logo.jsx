/**
 * Logotipo oficial Dra. Isabel Piérola.
 *
 * Usa el logo real extraído de la marca (monograma "Jp" caligráfico con jeringa
 * y destello + wordmark), con fondo transparente. Dos acabados:
 *  - color  (oro rosa original) → para fondos oscuros.
 *  - mono   (espresso)          → para fondos claros (mayor contraste).
 *
 * Assets en /public/brand/. El monograma se acompaña del wordmark vivo en la
 * navbar para mantener nitidez a tamaño pequeño.
 *
 * @param {Object} props
 * @param {('full'|'horizontal'|'mark')} [props.variant='horizontal']
 * @param {('light'|'dark')} [props.tone='dark']  dark = texto oscuro (fondos claros)
 */
export default function Logo({
    variant = 'horizontal',
    tone = 'dark',
    className = '',
    ...props
}) {
    const onDark = tone === 'light';
    const inkText = onDark ? 'text-ivory' : 'text-espresso';
    const subText = onDark ? 'text-ivory/60' : 'text-ink-muted';
    // Monograma: oro rosa sobre fondo oscuro, espresso (nítido) sobre fondo claro.
    const markSrc = onDark ? '/brand/mark-color.png' : '/brand/mark-mono.png';

    // Lockup completo (imagen): mono en claro, color en oscuro.
    if (variant === 'full') {
        return (
            <img
                src={onDark ? '/brand/logo-color.png' : '/brand/logo-mono.png'}
                alt="Dra. Isabel Piérola — Medicina estética y antienvejecimiento"
                className={`h-auto w-56 select-none ${className}`}
                draggable="false"
                {...props}
            />
        );
    }

    if (variant === 'mark') {
        return (
            <img
                src={markSrc}
                alt="Dra. Isabel Piérola"
                className={`h-10 w-auto select-none ${className}`}
                draggable="false"
                {...props}
            />
        );
    }

    // horizontal — monograma real + wordmark vivo (nítido en tamaños pequeños)
    return (
        <span className={`inline-flex items-center gap-2.5 ${className}`} {...props}>
            <img
                src={markSrc}
                alt=""
                aria-hidden="true"
                className="h-9 w-auto select-none"
                draggable="false"
            />
            <span className="flex flex-col leading-none">
                <span className={`font-display text-[1.12rem] font-semibold tracking-tight ${inkText}`}>
                    Dra. Isabel Piérola
                </span>
                <span className={`mt-1 font-sans text-[0.6rem] font-medium uppercase tracking-[0.26em] ${subText}`}>
                    Medicina estética
                </span>
            </span>
        </span>
    );
}
