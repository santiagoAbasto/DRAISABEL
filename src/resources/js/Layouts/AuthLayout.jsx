import { Link } from '@inertiajs/react';
import AuthVisualPanel from '@/Components/auth/AuthVisualPanel';
import Logo from '@/Components/public/Logo';
import Icon from '@/Components/public/Icon';
import Reveal from '@/Components/public/Reveal';
import { whatsappLink } from '@/data/site';

/**
 * Layout split-screen premium para login / registro / recuperación.
 * Izquierda: panel visual de marca (desktop). Derecha: formulario.
 *
 * @param {Object} props
 * @param {string} props.title       titular del formulario
 * @param {string} [props.subtitle]
 * @param {React.ReactNode} props.children  el formulario
 */
export default function AuthLayout({ title, subtitle, children }) {
    return (
        <div className="grid min-h-screen bg-ivory lg:grid-cols-2">
            <AuthVisualPanel />

            <div className="relative flex flex-col">
                {/* barra superior: logo (móvil) + volver */}
                <div className="flex items-center justify-between px-6 py-5 sm:px-10">
                    <Link href="/" aria-label="Inicio" className="lg:invisible">
                        <Logo variant="mark" className="h-9" />
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-espresso/5 hover:text-espresso"
                    >
                        <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                        Volver al inicio
                    </Link>
                </div>

                {/* formulario */}
                <div className="flex flex-1 items-center justify-center px-6 py-8 sm:px-10">
                    <Reveal className="w-full max-w-md">
                        <h1 className="font-display text-4xl font-medium leading-tight text-espresso">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="mt-3 leading-relaxed text-ink-soft">
                                {subtitle}
                            </p>
                        )}

                        <div className="mt-8">{children}</div>

                        <p className="mt-8 border-t border-cocoa/10 pt-6 text-center text-sm text-ink-muted">
                            ¿Necesitas ayuda?{' '}
                            <a
                                href={whatsappLink('Hola, necesito ayuda para acceder a mi cuenta.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium text-cocoa transition-colors hover:text-espresso"
                            >
                                <Icon name="whatsapp" className="h-4 w-4" strokeWidth={1.4} />
                                Escríbenos por WhatsApp
                            </a>
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
