import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal accesible y sin dependencias.
 *
 * El contenido es visible por defecto (CSS). Este hook solo añade la entrada
 * animada cuando el navegador soporta IntersectionObserver y el usuario no ha
 * pedido reducir el movimiento. Devuelve { ref, state } donde state es
 * 'out' (fuera de vista, oculto) o 'in' (revelado).
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=0.15]
 * @param {string} [options.rootMargin='0px 0px -10% 0px']
 * @param {boolean} [options.once=true]
 */
export function useReveal(options = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options;
    const ref = useRef(null);
    const [state, setState] = useState('out');

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced =
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Sin soporte o con movimiento reducido: mostrar de inmediato.
        if (prefersReduced || typeof IntersectionObserver === 'undefined') {
            setState('in');
            return;
        }

        // Si el elemento ya está en viewport al montar (above-the-fold),
        // se revela sin esperar al observer (cero parpadeo en la primera pintura).
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
            setState('in');
            if (once) return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setState('in');
                        if (once) observer.unobserve(entry.target);
                    } else if (!once) {
                        setState('out');
                    }
                });
            },
            { threshold, rootMargin },
        );

        observer.observe(el);

        // Red de seguridad: si el observer no dispara (pestaña oculta, motor sin
        // soporte real, scroll suave que no actualiza), revela igualmente.
        const fallback = setTimeout(() => setState('in'), 1400);

        return () => {
            observer.disconnect();
            clearTimeout(fallback);
        };
    }, [threshold, rootMargin, once]);

    return { ref, state };
}
