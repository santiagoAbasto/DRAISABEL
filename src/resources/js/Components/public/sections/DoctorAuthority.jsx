import Reveal from '@/Components/public/Reveal';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { whatsappLink } from '@/data/site';
import { useScrollExpand } from '@/hooks/useGsap';

const credentials = [
    {
        icon: 'shield',
        title: 'Formación médica',
        text: 'Médica con formación específica en medicina estética y un criterio clínico riguroso.',
    },
    {
        icon: 'spark',
        title: 'Experiencia internacional',
        text: 'Actualización constante en técnicas y protocolos de referencia.',
    },
    {
        icon: 'map-pin',
        title: 'Atención en Bolivia y Chile',
        text: 'Agenda coordinada en ambas sedes según disponibilidad.',
    },
    {
        icon: 'leaf',
        title: 'Enfoque natural y seguro',
        text: 'Resultados armónicos, consentimiento informado y seguimiento profesional.',
    },
];

/**
 * Sobre la Dra. + Confianza médica (Hyperframes 5). Banda oscura editorial.
 */
export default function DoctorAuthority() {
    const photoRef = useScrollExpand({ from: 1.2 });

    return (
        <section
            id="sobre-la-dra"
            className="relative scroll-mt-24 overflow-hidden bg-espresso py-20 text-ivory sm:py-28"
        >
            <div className="halo-skin pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] opacity-20" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                {/* Retrato */}
                <Reveal className="relative mx-auto w-full max-w-sm">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-nude via-champagne to-cocoa ring-1 ring-ivory/15">
                        <img
                            ref={photoRef}
                            src="/brand/doctora.jpg"
                            alt="Dra. Isabel Piérola en consulta"
                            className="absolute inset-0 h-full w-full object-cover object-[center_22%] will-change-transform"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent" />
                    </div>
                    {/* Chip de filosofía */}
                    <div className="animate-soft-float absolute -bottom-5 -right-3 max-w-[12rem] rounded-2xl bg-ivory p-4 text-espresso shadow-soft sm:-right-8">
                        <p className="font-display text-base italic leading-snug">
                            “Ciencia, arte y naturalidad en cada plan.”
                        </p>
                    </div>
                </Reveal>

                {/* Texto */}
                <div>
                    <Reveal>
                        <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-label text-gold">
                            <span className="h-px w-7 bg-gold" />
                            Sobre la Dra. Isabel Piérola
                        </span>
                        <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl">
                            Medicina estética con criterio,
                            <span className="italic text-champagne"> calidez</span> y
                            naturalidad
                        </h2>
                        <p className="mt-6 max-w-prose leading-relaxed text-ivory/70">
                            La Dra. Isabel Piérola combina la técnica médica con
                            una mirada estética cuidada. Su filosofía es clara:
                            realzar tu belleza natural sin perder tu esencia,
                            con seguridad y acompañamiento en cada etapa.
                        </p>
                    </Reveal>

                    <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                        {credentials.map((c, i) => (
                            <Reveal
                                key={c.title}
                                delay={i * 80}
                                className="flex gap-3"
                            >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ivory/10 text-gold ring-1 ring-ivory/15">
                                    <Icon name={c.icon} className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="font-medium text-ivory">
                                        {c.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-ivory/60">
                                        {c.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={120} className="mt-10">
                        <Button
                            href={whatsappLink()}
                            external
                            variant="light"
                            iconRight="arrow-right"
                        >
                            Agendar una evaluación
                        </Button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
