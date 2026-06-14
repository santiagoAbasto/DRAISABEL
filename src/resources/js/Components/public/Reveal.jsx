import { useReveal } from '@/hooks/useReveal';

/**
 * Envuelve contenido con una entrada al hacer scroll (fade + subida + desenfoque).
 * El contenido es visible por defecto; la animación solo se aplica con JS y sin
 * `prefers-reduced-motion`. Acepta `as` para cambiar el elemento raíz.
 *
 * @param {Object} props
 * @param {number} [props.delay=0] retardo en ms (para escalonar listas).
 * @param {React.ElementType} [props.as='div']
 */
export default function Reveal({
    as: Tag = 'div',
    delay = 0,
    className = '',
    style = {},
    children,
    ...props
}) {
    const { ref, state } = useReveal();

    return (
        <Tag
            ref={ref}
            data-reveal={state}
            style={{ '--reveal-delay': `${delay}ms`, ...style }}
            className={className}
            {...props}
        >
            {children}
        </Tag>
    );
}
