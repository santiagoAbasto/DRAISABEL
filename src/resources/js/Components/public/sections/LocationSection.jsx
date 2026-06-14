import SectionHeader from '@/Components/public/SectionHeader';
import Reveal from '@/Components/public/Reveal';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { site, whatsappLink } from '@/data/site';

/**
 * Ubicación y horarios. Sedes activas + mapa placeholder + CTA directo.
 */
export default function LocationSection() {
    const activeLocations = site.locations.filter((l) => l.active);

    return (
        <section id="contacto" className="bg-mist/60 py-20 scroll-mt-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <SectionHeader
                    kicker="Dónde encontrarnos"
                    title="Atención en Bolivia y Chile"
                    lead="Coordinamos tu evaluación según la sede. Escríbenos por WhatsApp y te orientamos sobre disponibilidad y horarios."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Mapa placeholder */}
                    <Reveal className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sage/40 via-champagne/50 to-nude/50 shadow-card ring-1 ring-cocoa/5">
                        {/* retícula sutil estilo mapa */}
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(110,81,71,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(110,81,71,0.12) 1px, transparent 1px)',
                                backgroundSize: '38px 38px',
                            }}
                            aria-hidden="true"
                        />
                        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-espresso text-ivory shadow-soft">
                                <Icon name="map-pin" className="h-7 w-7" />
                            </span>
                            <p className="mt-3 rounded-full bg-ivory/85 px-4 py-1.5 text-sm font-medium text-cocoa backdrop-blur">
                                Mapa de ubicación
                            </p>
                        </div>
                    </Reveal>

                    {/* Sedes */}
                    <div className="grid gap-5">
                        {activeLocations.map((loc, i) => (
                            <Reveal
                                key={loc.id}
                                delay={i * 90}
                                className="rounded-2xl bg-porcelain p-6 shadow-card ring-1 ring-cocoa/5"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display text-2xl font-medium text-espresso">
                                        {loc.country}
                                    </h3>
                                    <span className="rounded-full bg-sage/25 px-3 py-1 text-xs font-medium text-cocoa">
                                        {loc.city}
                                    </span>
                                </div>
                                <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                                    <li className="flex items-start gap-2.5">
                                        <Icon
                                            name="map-pin"
                                            className="mt-0.5 h-4 w-4 shrink-0 text-cocoa/60"
                                        />
                                        {loc.address}
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <Icon
                                            name="clock"
                                            className="mt-0.5 h-4 w-4 shrink-0 text-cocoa/60"
                                        />
                                        {loc.hours}
                                    </li>
                                </ul>
                            </Reveal>
                        ))}

                        <Reveal delay={180}>
                            <Button
                                href={whatsappLink()}
                                external
                                icon="whatsapp"
                                className="w-full"
                                size="lg"
                            >
                                Escribir por WhatsApp
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
