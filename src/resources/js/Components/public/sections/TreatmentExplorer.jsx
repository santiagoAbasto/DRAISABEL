import { useMemo, useState } from 'react';
import SectionHeader from '@/Components/public/SectionHeader';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import Reveal from '@/Components/public/Reveal';
import {
    treatments,
    treatmentCategories,
    getTreatmentsByCategory,
    categoryImages,
} from '@/data/treatments';
import { whatsappLink } from '@/data/site';

const accentDot = {
    nude: 'bg-nude',
    sage: 'bg-sage',
    gold: 'bg-gold',
    champagne: 'bg-champagne',
    blush: 'bg-blush',
};

/**
 * Selector inteligente de tratamientos — Hyperframe 2.
 * Filtros por categoría + lista seleccionable + panel de detalle animado.
 */
export default function TreatmentExplorer() {
    const [category, setCategory] = useState('all');
    const [slug, setSlug] = useState(treatments[0].slug);

    const list = useMemo(() => getTreatmentsByCategory(category), [category]);
    const active = useMemo(
        () => treatments.find((t) => t.slug === slug) ?? list[0],
        [slug, list],
    );

    const onCategory = (id) => {
        setCategory(id);
        const next = getTreatmentsByCategory(id);
        if (!next.some((t) => t.slug === slug) && next[0]) {
            setSlug(next[0].slug);
        }
    };

    return (
        <section id="tratamientos" className="relative scroll-mt-24 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <SectionHeader
                    kicker="Tratamientos"
                    title={
                        <>
                            Un plan para cada rostro,
                            <br className="hidden sm:block" /> diseñado contigo
                        </>
                    }
                    lead="Cada rostro tiene una historia. Por eso cada plan comienza con una evaluación médica personalizada. Explora nuestras áreas de tratamiento."
                />

                {/* Filtros por categoría */}
                <Reveal delay={80}>
                    <div
                        className="mt-10 flex flex-wrap gap-2"
                        role="tablist"
                        aria-label="Categorías de tratamiento"
                    >
                        {treatmentCategories.map((cat) => {
                            const isActive = cat.id === category;
                            return (
                                <button
                                    key={cat.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => onCategory(cat.id)}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out-quart ${
                                        isActive
                                            ? 'bg-espresso text-ivory shadow-card'
                                            : 'bg-white/70 text-ink-soft ring-1 ring-cocoa/10 hover:text-espresso hover:ring-cocoa/25'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Explorador: lista + detalle */}
                <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    {/* Lista seleccionable */}
                    <Reveal
                        className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
                        aria-label="Tratamientos"
                    >
                        {list.map((t) => {
                            const isActive = t.slug === active?.slug;
                            return (
                                <button
                                    key={t.slug}
                                    onClick={() => setSlug(t.slug)}
                                    aria-pressed={isActive}
                                    className={`group flex min-w-[15rem] shrink-0 items-center gap-3 rounded-2xl px-4 py-4 text-left transition-all duration-300 ease-out-quart lg:min-w-0 ${
                                        isActive
                                            ? 'bg-porcelain shadow-card ring-1 ring-cocoa/10'
                                            : 'bg-transparent hover:bg-white/60'
                                    }`}
                                >
                                    <span
                                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                                            isActive
                                                ? 'bg-espresso text-ivory'
                                                : 'bg-mist text-cocoa group-hover:bg-champagne/60'
                                        }`}
                                    >
                                        <Icon name={t.icon} className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate font-medium text-espresso">
                                            {t.title}
                                        </span>
                                        <span className="block truncate text-xs text-ink-muted">
                                            {t.duration}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </Reveal>

                    {/* Panel de detalle */}
                    {active && (
                        <div
                            key={active.slug}
                            className="animate-swap-in relative overflow-hidden rounded-[1.75rem] bg-porcelain shadow-soft ring-1 ring-cocoa/10 lg:sticky lg:top-24"
                        >
                            {/* Banner editorial por categoría */}
                            <div className="relative aspect-[16/7] overflow-hidden">
                                <img
                                    src={categoryImages[active.category]}
                                    alt=""
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-porcelain via-porcelain/20 to-transparent" />
                                <span className="absolute left-6 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-label text-cocoa backdrop-blur">
                                    <span
                                        className={`h-2 w-2 rounded-full ${accentDot[active.accent]}`}
                                    />
                                    {
                                        treatmentCategories.find(
                                            (c) => c.id === active.category,
                                        )?.label
                                    }
                                </span>
                            </div>

                            <div className="relative p-7 sm:p-9">
                                <h3 className="font-display text-3xl font-medium text-espresso sm:text-4xl">
                                    {active.title}
                                </h3>
                                <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">
                                    {active.description}
                                </p>

                                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <h4 className="text-sm font-semibold text-espresso">
                                            Beneficios
                                        </h4>
                                        <ul className="mt-3 space-y-2">
                                            {active.benefits.map((b) => (
                                                <li
                                                    key={b}
                                                    className="flex items-start gap-2 text-sm text-ink-soft"
                                                >
                                                    <Icon
                                                        name="check"
                                                        className="mt-0.5 h-4 w-4 shrink-0 text-sage"
                                                    />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-espresso">
                                            Indicado para
                                        </h4>
                                        <ul className="mt-3 space-y-2">
                                            {active.recommendedFor.map((r) => (
                                                <li
                                                    key={r}
                                                    className="flex items-start gap-2 text-sm text-ink-soft"
                                                >
                                                    <Icon
                                                        name="arrow-right"
                                                        className="mt-0.5 h-4 w-4 shrink-0 text-cocoa/50"
                                                    />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col gap-4 border-t border-cocoa/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="flex items-center gap-2 text-sm text-ink-muted">
                                        <Icon name="clock" className="h-4 w-4" />
                                        {active.duration}
                                    </p>
                                    <Button
                                        href={whatsappLink(
                                            `Hola, me interesa el tratamiento "${active.title}". Me gustaría agendar una evaluación.`,
                                        )}
                                        external
                                        iconRight="arrow-right"
                                    >
                                        Quiero evaluación
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
