import SectionHeader from '@/Components/public/SectionHeader';
import Reveal from '@/Components/public/Reveal';
import { journeySteps } from '@/data/content';

/**
 * Journey del paciente — Hyperframe 3. Timeline vertical con entrada escalonada.
 * Es una secuencia real (5 pasos ordenados), por eso los números sí informan.
 * Móvil: línea a la izquierda. Desktop: línea central con lados alternados.
 */
export default function PatientJourney() {
    return (
        <section id="proceso" className="relative scroll-mt-24 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <SectionHeader
                    align="center"
                    kicker="El proceso"
                    title="Acompañamiento de principio a fin"
                    lead="Un camino claro y sin sorpresas. Así trabajamos cada plan, paso a paso."
                />

                <div className="relative mx-auto mt-16 max-w-3xl">
                    {/* Línea vertical */}
                    <div
                        className="absolute bottom-2 left-6 top-2 w-px bg-gradient-to-b from-gold/60 via-cocoa/20 to-transparent sm:left-1/2 sm:-translate-x-1/2"
                        aria-hidden="true"
                    />

                    <ol className="space-y-12">
                        {journeySteps.map((step, i) => {
                            const leftSide = i % 2 === 0;
                            return (
                                <Reveal
                                    as="li"
                                    key={step.step}
                                    delay={i * 80}
                                    className="relative"
                                >
                                    {/* Nodo numerado, sobre la línea */}
                                    <span className="absolute left-6 top-1 z-[1] grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-espresso font-display text-lg font-semibold text-ivory shadow-card ring-4 ring-ivory sm:left-1/2">
                                        {step.step}
                                    </span>

                                    {/* Contenido */}
                                    <div
                                        className={`pl-16 sm:pl-0 ${
                                            leftSide
                                                ? 'sm:pr-[calc(50%+2.5rem)] sm:text-right'
                                                : 'sm:pl-[calc(50%+2.5rem)]'
                                        }`}
                                    >
                                        <h3 className="font-display text-2xl font-medium text-espresso">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 leading-relaxed text-ink-soft">
                                            {step.text}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
