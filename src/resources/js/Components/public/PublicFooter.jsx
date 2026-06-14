import { Link } from '@inertiajs/react';
import Brand from '@/Components/public/Brand';
import Icon from '@/Components/public/Icon';
import { site, navLinks, whatsappLink, disclaimers } from '@/data/site';

export default function PublicFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-espresso text-ivory">
            <div className="halo-skin pointer-events-none absolute -right-32 -top-32 h-96 w-96 opacity-30" />

            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
                    {/* Marca + claim */}
                    <div className="max-w-sm">
                        <Brand light />
                        <p className="mt-6 font-display text-2xl leading-snug text-ivory/90">
                            {site.concept}.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                            Medicina estética avanzada con un enfoque natural,
                            científico y cercano. Cada plan comienza con una
                            evaluación médica.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href={site.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-ivory/20 transition-colors hover:bg-ivory/10"
                            >
                                <Icon name="instagram" className="h-5 w-5" />
                            </a>
                            <a
                                href={whatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-ivory/20 transition-colors hover:bg-ivory/10"
                            >
                                <Icon name="whatsapp" className="h-5 w-5" strokeWidth={1.4} />
                            </a>
                        </div>
                    </div>

                    {/* Navegación */}
                    <nav aria-label="Footer">
                        <h3 className="text-xs font-semibold uppercase tracking-label text-ivory/50">
                            Explorar
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-ivory/80 transition-colors hover:text-ivory"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href={route('login')}
                                    className="text-ivory/80 transition-colors hover:text-ivory"
                                >
                                    Área de pacientes
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Sedes */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-label text-ivory/50">
                            Sedes
                        </h3>
                        <ul className="mt-5 space-y-5">
                            {site.locations
                                .filter((l) => l.active)
                                .map((loc) => (
                                    <li key={loc.id} className="text-sm">
                                        <p className="flex items-center gap-2 font-medium text-ivory">
                                            <Icon
                                                name="map-pin"
                                                className="h-4 w-4 text-gold"
                                            />
                                            {loc.country} · {loc.city}
                                        </p>
                                        <p className="mt-1 text-ivory/60">{loc.hours}</p>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 border-t border-ivory/10 pt-8">
                    <p className="max-w-3xl text-xs leading-relaxed text-ivory/45">
                        {disclaimers.results} {disclaimers.educational}
                    </p>
                    <div className="mt-5 flex flex-col gap-2 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {year} {site.name}. Todos los derechos reservados.
                        </p>
                        <p className="flex flex-wrap gap-x-5 gap-y-1">
                            <span>Política de privacidad</span>
                            <span>Términos y condiciones</span>
                            <span>Aviso médico</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
