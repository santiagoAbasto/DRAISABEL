import Logo from '@/Components/public/Logo';

/**
 * Wordmark de marca. Envoltorio fino sobre <Logo/> para mantener la API previa.
 *
 * @param {Object} props
 * @param {boolean} [props.light=false] versión para fondos oscuros.
 * @param {boolean} [props.compact=false] solo monograma.
 */
export default function Brand({ light = false, compact = false, className = '' }) {
    return (
        <Logo
            variant={compact ? 'mark' : 'horizontal'}
            tone={light ? 'light' : 'dark'}
            className={className}
        />
    );
}
