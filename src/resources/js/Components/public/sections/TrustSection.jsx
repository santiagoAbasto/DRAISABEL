import Reveal from '@/Components/public/Reveal';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { trustPoints } from '@/data/content';
import { whatsappLink } from '@/data/site';

/**
 * "Por qué elegir a la Dra." — split editorial: declaración de filosofía
 * a la izquierda, pilares de confianza con hairlines a la derecha.
 */
export default function TrustSection() {
    return (
        <section className="bg-mist/60 py-20 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                <Reveal className="lg:sticky lg:top-28 lg:self-start">
                    <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-label text-cocoa">
                        <span className="h-px w-7 bg-gold" />
                        Por qué la Dra. Isabel Piérola
                    </span>
                    <p className="mt-6 font-display text-3xl font-medium leading-tight text-espresso sm:text-[2.6rem] sm:leading-[1.1]">
                        No se trata de cambiar quién eres. Se trata de verte
                        descansada, luminosa y en armonía contigo.
                    </p>
                    <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
                        Un enfoque médico, conservador y honesto. Aquí no se
                        venden inseguridades: se diseñan planes seguros, con
                        expectativas claras y acompañamiento real.
                    </p>
                    <div className="mt-8">
                        <Button
                            href={whatsappLink()}
                            external
                            variant="secondary"
                            iconRight="arrow-right"
                        >
                            Conversemos sobre ti
                        </Button>
                    </div>
                </Reveal>

                <ul className="flex flex-col">
                    {trustPoints.map((point, i) => (
                        <Reveal
                            as="li"
                            key={point.title}
                            delay={i * 90}
                            className={`flex gap-5 py-7 ${
                                i !== 0 ? 'border-t border-cocoa/12' : ''
                            }`}
                        >
                            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-porcelain text-cocoa shadow-card ring-1 ring-cocoa/5">
                                <Icon name={point.icon} className="h-6 w-6" />
                            </span>
                            <div>
                                <h3 className="font-display text-2xl font-medium text-espresso">
                                    {point.title}
                                </h3>
                                <p className="mt-2 max-w-prose leading-relaxed text-ink-soft">
                                    {point.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}
