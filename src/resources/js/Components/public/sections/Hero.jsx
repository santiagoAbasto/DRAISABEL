import { useState } from 'react';
import Reveal from '@/Components/public/Reveal';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { site, whatsappLink } from '@/data/site';
import { useScrollExpand, useParallax } from '@/hooks/useGsap';

/**
 * Hero médico premium — Hyperframe 1.
 * Composición editorial a dos columnas: claim + CTAs a la izquierda,
 * retrato enmarcado con cards flotantes a la derecha.
 */
export default function Hero() {
    const photoRef = useScrollExpand({ from: 1.16 });
    const haloRef = useParallax({ distance: 48 });
    const [videoReady, setVideoReady] = useState(false);

    return (
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
            {/* Fondo cinemático: el poster ES el primer fotograma del video, así
                que el video aparece encima con un fundido invisible (sin saltos). */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/media/hero-poster.jpg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onCanPlay={() => setVideoReady(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                        videoReady ? 'opacity-90' : 'opacity-0'
                    }`}
                >
                    <source src="/media/hero.mp4" type="video/mp4" />
                </video>
                {/* Legibilidad del texto a la izquierda; el video se ve a la derecha */}
                <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/70 to-transparent" />
                {/* Fundido suave arriba y hacia el fondo de la página */}
                <div className="absolute inset-0 bg-gradient-to-b from-ivory/10 via-transparent to-ivory" />
            </div>

            {/* Fondo: glow champagne (parallax) + grano sutil — centrado por margen
                para no chocar con el transform de GSAP */}
            <div
                ref={haloRef}
                className="halo-skin pointer-events-none absolute -top-24 left-1/2 -ml-[21rem] h-[42rem] w-[42rem] opacity-80"
            />
            <div className="paper-grain pointer-events-none absolute inset-0" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
                {/* Columna de texto */}
                <div className="max-w-xl">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-label text-cocoa ring-1 ring-cocoa/10 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                            Medicina estética avanzada
                        </span>
                    </Reveal>

                    <Reveal delay={80}>
                        <h1 className="mt-6 font-display font-medium leading-[0.98] tracking-[-0.02em] text-espresso text-[clamp(2.85rem,7vw,5.25rem)]">
                            Belleza natural
                            <br />
                            con{' '}
                            <span className="italic text-cocoa">respaldo médico</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={160}>
                        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
                            {site.subconcept}
                        </p>
                    </Reveal>

                    <Reveal delay={240}>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                href={whatsappLink()}
                                external
                                size="lg"
                                iconRight="arrow-right"
                            >
                                Agendar evaluación
                            </Button>
                            <Button href="#tratamientos" variant="secondary" size="lg">
                                Explorar tratamientos
                            </Button>
                        </div>
                    </Reveal>

                    {/* Indicadores de confianza */}
                    <Reveal delay={320}>
                        <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cocoa/10 pt-8">
                            {site.stats.slice(0, 3).map((stat) => (
                                <div key={stat.label}>
                                    <dt className="font-display text-3xl font-semibold text-espresso">
                                        {stat.value}
                                    </dt>
                                    <dd className="mt-1 text-xs leading-snug text-ink-muted">
                                        {stat.label}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>

                {/* Columna visual */}
                <Reveal delay={200} className="relative">
                    <div className="relative mx-auto max-w-md">
                        {/* Marco del retrato — foto real con expansión cinemática al scroll */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-champagne via-blush to-nude shadow-soft ring-1 ring-white/60">
                            <img
                                ref={photoRef}
                                src="/brand/doctora.jpg"
                                alt="Dra. Isabel Piérola, médica estética"
                                className="absolute inset-0 h-full w-full object-cover object-[center_22%] will-change-transform"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/5 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <p className="font-display text-xl text-white drop-shadow">
                                    Dra. Isabel Piérola
                                </p>
                                <p className="text-sm text-white/85">
                                    Medicina estética · enfoque natural
                                </p>
                            </div>
                        </div>

                        {/* Card flotante: próxima evaluación */}
                        <div className="animate-soft-float absolute -left-4 top-10 w-52 rounded-2xl bg-porcelain/90 p-4 shadow-card ring-1 ring-white/70 backdrop-blur sm:-left-10">
                            <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                                <Icon name="calendar" className="h-4 w-4 text-sage" />
                                Próxima evaluación
                            </div>
                            <p className="mt-2 font-display text-lg leading-tight text-espresso">
                                Valoración facial
                            </p>
                            <p className="mt-0.5 text-xs text-ink-soft">
                                Personalizada · 45 min
                            </p>
                        </div>

                        {/* Card flotante: tratamiento recomendado */}
                        <div className="animate-soft-float-slow absolute -right-3 bottom-12 w-56 rounded-2xl bg-porcelain/90 p-4 shadow-card ring-1 ring-white/70 backdrop-blur sm:-right-8">
                            <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                                <Icon name="spark" className="h-4 w-4 text-gold" />
                                Recomendado para ti
                            </div>
                            <p className="mt-2 font-display text-lg leading-tight text-espresso">
                                Skin Boosters
                            </p>
                            <p className="mt-0.5 text-xs text-ink-soft">
                                Luminosidad e hidratación
                            </p>
                        </div>

                        {/* Chip: confianza médica */}
                        <div className="animate-soft-float absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-espresso px-4 py-2 text-xs font-medium text-ivory shadow-card">
                            <Icon name="shield" className="h-4 w-4 text-sage" />
                            Evaluación médica previa
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
