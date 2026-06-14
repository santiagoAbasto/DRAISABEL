import SectionHeader from '@/Components/public/SectionHeader';
import Reveal from '@/Components/public/Reveal';
import Icon from '@/Components/public/Icon';
import { testimonials } from '@/data/content';
import { disclaimers } from '@/data/site';

/**
 * Resultados naturales (enfoque ético) + testimonios.
 * Cita destacada grande + voces secundarias. Sin promesas de resultado.
 */
export default function Testimonials() {
    const [featured, ...rest] = testimonials;

    return (
        <section className="bg-mist/60 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <SectionHeader
                    kicker="Resultados naturales"
                    title="Que se note que estás bien, no qué te hiciste"
                    lead="Buscamos resultados sutiles y armónicos. Estas son algunas experiencias de pacientes, compartidas con respeto y de forma ética."
                />

                <div className="mt-12 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
                    {/* Cita destacada */}
                    <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-espresso p-8 text-ivory shadow-soft sm:p-10">
                        <div className="halo-skin pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-20" />
                        <div className="relative">
                            <span className="font-display text-6xl leading-none text-gold/70">
                                “
                            </span>
                            <p className="mt-2 font-display text-3xl font-medium leading-snug sm:text-[2.2rem]">
                                {featured.quote}
                            </p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-3">
                            <span className="grid h-11 w-11 place-items-center rounded-full bg-ivory/10 text-sm font-semibold text-ivory ring-1 ring-ivory/20">
                                {featured.author.charAt(0)}
                            </span>
                            <div className="text-sm">
                                <p className="font-medium text-ivory">
                                    {featured.author}
                                </p>
                                <p className="text-ivory/60">{featured.context}</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Voces secundarias */}
                    <div className="grid gap-5">
                        {rest.map((t, i) => (
                            <Reveal
                                key={t.quote}
                                delay={i * 90}
                                className="rounded-2xl bg-porcelain p-6 shadow-card ring-1 ring-cocoa/5"
                            >
                                <div className="flex gap-0.5 text-gold">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Icon
                                            key={s}
                                            name="star"
                                            className="h-4 w-4"
                                            strokeWidth={0}
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                                <p className="mt-3 leading-relaxed text-ink">
                                    {t.quote}
                                </p>
                                <p className="mt-4 text-sm text-ink-muted">
                                    {t.author} · {t.context}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <p className="mt-8 max-w-prose text-xs leading-relaxed text-ink-muted">
                    {disclaimers.results} {disclaimers.images}
                </p>
            </div>
        </section>
    );
}
