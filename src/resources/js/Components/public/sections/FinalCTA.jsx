import { motion } from 'framer-motion';
import Reveal from '@/Components/public/Reveal';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';
import { whatsappLink } from '@/data/site';

/**
 * CTA final — banda editorial con foto ambiente, acento dorado y profundidad.
 * Cierra el recorrido antes del footer con composición premium.
 */
export default function FinalCTA() {
    return (
        <section className="px-5 py-20 sm:px-8 sm:py-28">
            <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] shadow-soft ring-1 ring-white/60">
                {/* Fondo: foto ambiente + degradados champagne para legibilidad */}
                <img
                    src="/media/naturalidad.jpg"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ivory/92 via-champagne/82 to-nude/78" />
                <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,rgba(255,253,252,0.55),transparent_70%)]" />
                <div className="halo-skin pointer-events-none absolute inset-0 opacity-50" />

                <div className="relative px-6 py-20 text-center sm:px-16 sm:py-24">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-label text-cocoa ring-1 ring-cocoa/10 backdrop-blur"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        Tu evaluación, sin compromiso
                    </motion.span>

                    <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.04] text-espresso sm:text-[3.6rem]">
                        Tu mejor versión empieza
                        <br className="hidden sm:block" /> con una evaluación
                    </h2>

                    <span
                        className="mx-auto mt-6 block h-px w-16 bg-gold/70"
                        aria-hidden="true"
                    />

                    <p className="mx-auto mt-6 max-w-prose text-lg leading-relaxed text-cocoa">
                        Conversamos sobre tus objetivos y te proponemos un plan
                        honesto, seguro y pensado para ti. Con respaldo médico y
                        resultados naturales.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button
                            href={whatsappLink()}
                            external
                            size="lg"
                            icon="whatsapp"
                        >
                            Agendar evaluación
                        </Button>
                        <Button href="#tratamientos" variant="secondary" size="lg">
                            Ver tratamientos
                        </Button>
                    </div>

                    <p className="mt-7 flex items-center justify-center gap-2 text-sm text-ink-muted">
                        <Icon name="shield" className="h-4 w-4 text-sage" />
                        Evaluación médica previa · Atención en Bolivia y Chile
                    </p>
                </div>
            </Reveal>
        </section>
    );
}
