import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let registered = false;
function ensurePlugin() {
    if (!registered && typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        registered = true;
    }
}

function prefersReduced() {
    return (
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
}

/**
 * Scroll suave cinemático (Lenis) sincronizado con GSAP ScrollTrigger.
 * Móvil táctil queda nativo. Maneja anclas internas con offset de navbar.
 * No se activa con prefers-reduced-motion. Úsalo una vez en el layout público.
 */
export function useSmoothScroll() {
    useEffect(() => {
        if (prefersReduced() || typeof window === 'undefined') return;
        ensurePlugin();
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            anchors: { offset: -96 },
        });
        lenis.on('scroll', ScrollTrigger.update);
        const tick = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        return () => {
            lenis.destroy();
            gsap.ticker.remove(tick);
        };
    }, []);
}

/**
 * Expansión cinemática de imagen al hacer scroll (GSAP ScrollTrigger).
 * La imagen entra ligeramente ampliada y se asienta a escala 1 con scrub,
 * creando un zoom-out suave y premium. Devuelve la ref para el <img>.
 *
 * @param {Object} [opts]
 * @param {number} [opts.from=1.18]  escala inicial.
 * @param {string} [opts.start='top 90%']
 * @param {string} [opts.end='top 35%']
 */
export function useScrollExpand({ from = 1.18, start = 'top 90%', end = 'top 35%' } = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || prefersReduced()) return;
        ensurePlugin();
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { scale: from },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: { trigger: el, start, end, scrub: true },
                },
            );
        }, el);
        return () => ctx.revert();
    }, [from, start, end]);
    return ref;
}

/**
 * Parallax cinemático: desplaza el elemento en contraflujo al scroll.
 * Ideal para glows de fondo y elementos decorativos (no para los que ya
 * tienen animación CSS de transform).
 *
 * @param {Object} [opts]
 * @param {number} [opts.distance=70]  px de recorrido total.
 */
export function useParallax({ distance = 70 } = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || prefersReduced()) return;
        ensurePlugin();
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { yPercent: -distance / 4 },
                {
                    yPercent: distance / 4,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el.parentElement || el,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                },
            );
        }, el);
        return () => ctx.revert();
    }, [distance]);
    return ref;
}
