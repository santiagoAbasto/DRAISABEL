import Reveal from '@/Components/public/Reveal';

/**
 * Encabezado de sección editorial. El titular en serif lleva la jerarquía.
 * El `kicker` es opcional y se usa con mesura (no en todas las secciones).
 *
 * @param {Object} props
 * @param {string} [props.kicker]
 * @param {React.ReactNode} props.title
 * @param {React.ReactNode} [props.lead]
 * @param {('left'|'center')} [props.align='left']
 */
export default function SectionHeader({
    kicker,
    title,
    lead,
    align = 'left',
    className = '',
}) {
    const isCenter = align === 'center';

    return (
        <Reveal
            className={`flex flex-col gap-4 ${
                isCenter ? 'items-center text-center mx-auto max-w-2xl' : 'max-w-2xl'
            } ${className}`}
        >
            {kicker && (
                <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-label text-cocoa">
                    <span className="h-px w-7 bg-gold" aria-hidden="true" />
                    {kicker}
                </span>
            )}
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-espresso sm:text-5xl">
                {title}
            </h2>
            {lead && (
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                    {lead}
                </p>
            )}
        </Reveal>
    );
}
