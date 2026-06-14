import { motion, useReducedMotion } from 'framer-motion';
import { whatsappLink } from '@/data/site';

const WA_GREEN = '#25D366';

/**
 * Botón flotante de WhatsApp — verde oficial, glifo blanco, con animaciones
 * cinemáticas (framer-motion): entrada en spring, anillo de pulso, "nudge"
 * periódico de atención, insignia de notificación y etiqueta al hover.
 * Respeta prefers-reduced-motion. En móvil se eleva sobre el CTA fijo.
 */
export default function FloatingWhatsApp() {
    const reduce = useReducedMotion();

    return (
        <motion.a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="group fixed bottom-24 right-4 z-[60] flex items-center sm:bottom-6 sm:right-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.7 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
        >
            {/* Etiqueta (desktop, aparece al hover) */}
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-espresso px-4 py-2 text-sm font-medium text-ivory opacity-0 shadow-card transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:block sm:translate-x-2">
                ¿Hablamos por WhatsApp?
            </span>

            {/* Botón con nudge periódico de atención */}
            <motion.span
                className="relative grid h-14 w-14 place-items-center rounded-full text-white"
                style={{
                    background: WA_GREEN,
                    boxShadow: '0 12px 30px rgba(37,211,102,0.45)',
                }}
                animate={
                    reduce
                        ? {}
                        : { rotate: [0, -8, 8, -6, 6, 0] }
                }
                transition={
                    reduce
                        ? {}
                        : { duration: 0.9, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }
                }
            >
                {/* Anillo de pulso */}
                {!reduce && (
                    <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full"
                        style={{ background: WA_GREEN }}
                        animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                    />
                )}

                {/* Glifo oficial de WhatsApp */}
                <svg
                    viewBox="0 0 32 32"
                    className="relative h-7 w-7"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.6 31.5l8-2.1c2.2 1.2 4.8 1.9 7.4 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.3 1.3-4.6-.3-.5C4 20.8 3.3 18.4 3.3 16 3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.8 16 28.8zm7.4-9.6c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3s1.4 3.9 1.6 4.1c.2.3 2.8 4.3 6.8 6 .9.4 1.7.7 2.3.9.9.3 1.8.2 2.5.1.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
                </svg>

                {/* Insignia de notificación */}
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center">
                    {!reduce && (
                        <motion.span
                            className="absolute inline-flex h-full w-full rounded-full bg-gold/70"
                            animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        />
                    )}
                    <span className="relative grid h-5 w-5 place-items-center rounded-full bg-gold text-[0.65rem] font-bold text-espresso ring-2 ring-white">
                        1
                    </span>
                </span>
            </motion.span>
        </motion.a>
    );
}
