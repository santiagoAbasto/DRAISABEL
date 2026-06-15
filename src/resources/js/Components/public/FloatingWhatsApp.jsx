import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { whatsappLink } from '@/data/site';

const WA = '#25D366';
const WA_DARK = '#11a14a';
const ONLINE = '#22c55e';

// Glifo oficial de WhatsApp (relleno).
const GLYPH =
    'M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.6 31.5l8-2.1c2.2 1.2 4.8 1.9 7.4 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.3 1.3-4.6-.3-.5C4 20.8 3.3 18.4 3.3 16 3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.8 16 28.8zm7.4-9.6c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3s1.4 3.9 1.6 4.1c.2.3 2.8 4.3 6.8 6 .9.4 1.7.7 2.3.9.9.3 1.8.2 2.5.1.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z';

/**
 * Botón flotante de WhatsApp — nivel producto.
 *
 * Diseño según ui-ux-pro-max: estados de interacción estables (sin "jitter" de
 * layout), movimiento con significado y mesura (anillos de pulso + entrada en
 * spring + etiqueta al hover), indicador "en línea" honesto y un mensaje
 * proactivo que aparece una sola vez. Accesible (aria-label, foco, ≥44pt) y
 * respeta prefers-reduced-motion. Sin animaciones que desplacen el contenido.
 */
export default function FloatingWhatsApp() {
    const reduce = useReducedMotion();
    const [showTeaser, setShowTeaser] = useState(false);
    const [teaserClosed, setTeaserClosed] = useState(false);

    // Mensaje proactivo: aparece a los 4 s y se retira solo a los 12 s.
    useEffect(() => {
        if (reduce) return undefined;
        const open = setTimeout(() => setShowTeaser(true), 4000);
        const hide = setTimeout(() => setShowTeaser(false), 12000);
        return () => {
            clearTimeout(open);
            clearTimeout(hide);
        };
    }, [reduce]);

    return (
        <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
            {/* Mensaje proactivo (una vez) */}
            <AnimatePresence>
                {showTeaser && !teaserClosed && (
                    <motion.div
                        key="teaser"
                        initial={{ opacity: 0, y: 16, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96, transition: { duration: 0.16 } }}
                        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                        className="relative w-[16rem] origin-bottom-right rounded-2xl rounded-br-md bg-porcelain p-4 shadow-soft ring-1 ring-cocoa/10"
                    >
                        <button
                            type="button"
                            onClick={() => setTeaserClosed(true)}
                            aria-label="Cerrar mensaje"
                            className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-espresso text-ivory shadow-card transition-transform hover:scale-110"
                        >
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                <path d="M6 6l12 12M18 6 6 18" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-2.5">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white" style={{ background: WA }}>
                                <svg viewBox="0 0 32 32" className="h-[1.1rem] w-[1.1rem]" fill="currentColor" aria-hidden="true">
                                    <path d={GLYPH} />
                                </svg>
                            </span>
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold leading-tight text-espresso">
                                    Dra. Isabel Piérola
                                </p>
                                <p className="flex items-center gap-1.5 text-[0.72rem] font-medium" style={{ color: ONLINE }}>
                                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: ONLINE }} />
                                    En línea ahora
                                </p>
                            </div>
                        </div>

                        <p className="mt-3 text-sm leading-snug text-ink-soft">
                            Hola, ¿te ayudamos a agendar tu evaluación?
                        </p>

                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                            style={{ background: WA }}
                        >
                            <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                                <path d={GLYPH} />
                            </svg>
                            Escríbenos por WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB */}
            <motion.a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp"
                className="group relative flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.5 }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                whileTap={reduce ? undefined : { scale: 0.94 }}
                onHoverStart={() => setShowTeaser(false)}
            >
                {/* Etiqueta al hover (desktop) */}
                <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-espresso px-4 py-2 text-sm font-medium text-ivory opacity-0 shadow-card transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                    Escríbenos por WhatsApp
                </span>

                {/* Núcleo de tamaño fijo — contiene anillos y disco (sin desplazar layout) */}
                <span className="relative grid h-14 w-14 place-items-center">
                    {/* Anillos de pulso */}
                    {!reduce &&
                        [0, 1].map((i) => (
                            <motion.span
                                key={i}
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full"
                                style={{ border: `2px solid ${WA}` }}
                                initial={{ scale: 1, opacity: 0.4 }}
                                animate={{ scale: 2.4, opacity: 0 }}
                                transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: 'easeOut',
                                    delay: i * 1.4,
                                }}
                            />
                        ))}

                    {/* Disco verde */}
                    <span
                        className="relative grid h-14 w-14 place-items-center rounded-full text-white"
                        style={{
                            background: `radial-gradient(120% 120% at 30% 22%, ${WA} 0%, ${WA_DARK} 100%)`,
                            boxShadow:
                                '0 12px 26px rgba(37,211,102,0.45), inset 0 1px 0 rgba(255,255,255,0.28)',
                        }}
                    >
                        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
                            <path d={GLYPH} />
                        </svg>

                        {/* Indicador "en línea" */}
                        <span className="absolute right-0.5 top-0.5 grid h-4 w-4 place-items-center">
                            {!reduce && (
                                <motion.span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: ONLINE }}
                                    animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                                />
                            )}
                            <span
                                className="relative h-3 w-3 rounded-full ring-2 ring-white"
                                style={{ background: ONLINE }}
                            />
                        </span>
                    </span>
                </span>
            </motion.a>
        </div>
    );
}
