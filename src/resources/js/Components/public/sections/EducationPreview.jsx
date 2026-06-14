import SectionHeader from '@/Components/public/SectionHeader';
import Reveal from '@/Components/public/Reveal';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { articles } from '@/data/content';
import { whatsappLink } from '@/data/site';

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('es', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

/**
 * Contenido educativo — tipo magazine. Artículo destacado + lista.
 */
export default function EducationPreview() {
    const featured = articles.find((a) => a.featured) ?? articles[0];
    const rest = articles.filter((a) => a.slug !== featured.slug).slice(0, 3);

    return (
        <section id="contenido" className="relative scroll-mt-24 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeader
                        kicker="Contenido educativo"
                        title="Aprende sobre tu piel, con criterio médico"
                        lead="Información clara y honesta para que tomes decisiones informadas. Sin tecnicismos innecesarios."
                    />
                    <Reveal delay={120}>
                        <Button
                            href={whatsappLink(
                                'Hola, me gustaría recibir contenido educativo sobre tratamientos.',
                            )}
                            external
                            variant="secondary"
                            iconRight="arrow-right"
                            className="shrink-0"
                        >
                            Recibir novedades
                        </Button>
                    </Reveal>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {/* Artículo destacado */}
                    <Reveal className="group">
                        <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-porcelain shadow-card ring-1 ring-cocoa/5 transition-shadow duration-300 hover:shadow-soft">
                            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blush via-champagne to-nude">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                                />
                                <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-cocoa backdrop-blur">
                                    {featured.category}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-7">
                                <p className="flex items-center gap-3 text-xs text-ink-muted">
                                    <span>{formatDate(featured.publishedAt)}</span>
                                    <span aria-hidden>·</span>
                                    <span className="flex items-center gap-1">
                                        <Icon name="clock" className="h-3.5 w-3.5" />
                                        {featured.readingTime}
                                    </span>
                                </p>
                                <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-espresso transition-colors group-hover:text-cocoa">
                                    {featured.title}
                                </h3>
                                <p className="mt-3 leading-relaxed text-ink-soft">
                                    {featured.excerpt}
                                </p>
                                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cocoa">
                                    Leer artículo
                                    <Icon
                                        name="arrow-right"
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </span>
                            </div>
                        </article>
                    </Reveal>

                    {/* Lista de artículos */}
                    <div className="flex flex-col divide-y divide-cocoa/10 rounded-[1.75rem] bg-white/50 px-6 ring-1 ring-cocoa/5">
                        {rest.map((a, i) => (
                            <Reveal
                                as="article"
                                key={a.slug}
                                delay={i * 90}
                                className="group flex cursor-pointer items-start gap-5 py-6"
                            >
                                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-cocoa/10">
                                    <img
                                        src={a.image}
                                        alt={a.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 ease-out-quart group-hover:scale-110"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-ink-muted">
                                        {a.category} · {a.readingTime}
                                    </p>
                                    <h4 className="mt-1 font-display text-xl font-medium leading-snug text-espresso transition-colors group-hover:text-cocoa">
                                        {a.title}
                                    </h4>
                                    <p className="mt-1 line-clamp-2 text-sm text-ink-soft">
                                        {a.excerpt}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
