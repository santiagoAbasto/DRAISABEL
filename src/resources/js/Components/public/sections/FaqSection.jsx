import { useState } from 'react';
import SectionHeader from '@/Components/public/SectionHeader';
import Reveal from '@/Components/public/Reveal';
import Icon from '@/Components/public/Icon';
import { faqs } from '@/data/content';

/**
 * Preguntas frecuentes — acordeón accesible (aria-expanded + región asociada).
 */
export default function FaqSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <SectionHeader
                        kicker="Preguntas frecuentes"
                        title="Resolvemos tus dudas antes de empezar"
                        lead="Y si te queda alguna, escríbenos por WhatsApp: te respondemos con gusto."
                    />
                </div>

                <Reveal as="ul" className="flex flex-col">
                    {faqs.map((faq, i) => {
                        const isOpen = open === i;
                        const panelId = `faq-panel-${i}`;
                        const btnId = `faq-btn-${i}`;
                        return (
                            <li
                                key={faq.q}
                                className="border-b border-cocoa/12 first:border-t"
                            >
                                <h3>
                                    <button
                                        id={btnId}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                                    >
                                        <span className="font-display text-xl font-medium text-espresso sm:text-2xl">
                                            {faq.q}
                                        </span>
                                        <span
                                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 transition-all duration-300 ease-out-quart ${
                                                isOpen
                                                    ? 'rotate-180 bg-espresso text-ivory ring-espresso'
                                                    : 'bg-transparent text-cocoa ring-cocoa/20'
                                            }`}
                                        >
                                            <Icon
                                                name="chevron-down"
                                                className="h-5 w-5"
                                            />
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={btnId}
                                    hidden={!isOpen}
                                    className="grid transition-all duration-300 ease-out-quart"
                                >
                                    <p className="max-w-prose pb-6 leading-relaxed text-ink-soft">
                                        {faq.a}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
