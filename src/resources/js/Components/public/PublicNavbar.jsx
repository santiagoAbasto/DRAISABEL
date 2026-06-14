import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import Brand from '@/Components/public/Brand';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { navLinks, whatsappLink } from '@/data/site';
import { useScrolled } from '@/hooks/useScrolled';

export default function PublicNavbar({ auth }) {
    const scrolled = useScrolled(20);
    const [open, setOpen] = useState(false);

    // Bloquea el scroll del body cuando el menú móvil está abierto.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // Cierra con Escape.
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const user = auth?.user;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[50] transition-all duration-500 ease-out-quart ${
                scrolled
                    ? 'border-b border-cocoa/10 bg-ivory/80 backdrop-blur-xl backdrop-saturate-150'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <nav
                className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
                aria-label="Principal"
            >
                <Link href="/" aria-label="Inicio — Dra. Isabel Piérola">
                    <Brand />
                </Link>

                {/* Enlaces — desktop */}
                <ul className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-espresso"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Acciones — desktop */}
                <div className="hidden items-center gap-2 lg:flex">
                    {user ? (
                        <Button
                            href={route(user.role === 'admin' ? 'admin.dashboard' : 'cliente.dashboard')}
                            variant="secondary"
                            size="sm"
                        >
                            Mi panel
                        </Button>
                    ) : (
                        <Button href={route('login')} variant="ghost" size="sm">
                            Iniciar sesión
                        </Button>
                    )}
                    <Button
                        href={whatsappLink()}
                        external
                        variant="primary"
                        size="sm"
                        iconRight="arrow-right"
                    >
                        Agendar evaluación
                    </Button>
                </div>

                {/* Botón hamburguesa — mobile */}
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="grid h-11 w-11 place-items-center rounded-full text-espresso transition-colors hover:bg-espresso/5 lg:hidden"
                    aria-label="Abrir menú"
                    aria-expanded={open}
                >
                    <Icon name="menu" className="h-6 w-6" />
                </button>
            </nav>

            {/* Drawer mobile */}
            <div
                className={`fixed inset-0 z-[80] lg:hidden ${open ? '' : 'pointer-events-none'}`}
                aria-hidden={!open}
            >
                {/* backdrop */}
                <button
                    type="button"
                    tabIndex={open ? 0 : -1}
                    aria-label="Cerrar menú"
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
                        open ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                {/* panel */}
                <div
                    className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory shadow-soft transition-transform duration-400 ease-out-quart ${
                        open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex items-center justify-between border-b border-cocoa/10 px-6 py-5">
                        <Brand />
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="grid h-10 w-10 place-items-center rounded-full text-espresso transition-colors hover:bg-espresso/5"
                            aria-label="Cerrar menú"
                        >
                            <Icon name="close" className="h-5 w-5" />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-1 px-4 py-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md px-4 py-3 font-display text-2xl text-espresso transition-colors hover:bg-espresso/5"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex flex-col gap-3 border-t border-cocoa/10 px-6 py-6">
                        {user ? (
                            <Button
                                href={route(user.role === 'admin' ? 'admin.dashboard' : 'cliente.dashboard')}
                                variant="secondary"
                                className="w-full"
                            >
                                Mi panel
                            </Button>
                        ) : (
                            <div className="flex gap-3">
                                <Button
                                    href={route('login')}
                                    variant="secondary"
                                    className="flex-1"
                                >
                                    Entrar
                                </Button>
                                <Button
                                    href={route('register')}
                                    variant="ghost"
                                    className="flex-1"
                                >
                                    Crear cuenta
                                </Button>
                            </div>
                        )}
                        <Button
                            href={whatsappLink()}
                            external
                            variant="primary"
                            icon="whatsapp"
                            className="w-full"
                        >
                            Agendar evaluación
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
