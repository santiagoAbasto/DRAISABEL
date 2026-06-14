import { useEffect, useState } from 'react';

/**
 * Devuelve true cuando la página se ha desplazado más allá de `offset` px.
 * Se usa para condensar la navbar al hacer scroll.
 */
export function useScrolled(offset = 24) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > offset);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

    return scrolled;
}
