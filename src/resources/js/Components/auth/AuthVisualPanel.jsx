import Logo from '@/Components/public/Logo';
import Icon from '@/Components/public/Icon';

const points = [
    'Evaluación médica previa',
    'Resultados naturales y seguros',
    'Acompañamiento antes, durante y después',
];

/**
 * Lado visual de las pantallas de autenticación.
 * Banda oscura editorial con el logotipo en oro rosa y el claim de marca.
 */
export default function AuthVisualPanel() {
    return (
        <div className="relative hidden flex-col justify-between overflow-hidden bg-espresso p-12 text-ivory lg:flex">
            {/* glows de fondo */}
            <div className="halo-skin pointer-events-none absolute -left-24 top-0 h-[34rem] w-[34rem] opacity-25" />
            <div className="halo-skin pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] opacity-20" />

            <div className="relative">
                <Logo variant="full" tone="light" className="w-52" />
            </div>

            <div className="relative">
                <p className="font-display text-[2.7rem] font-medium leading-[1.08]">
                    Belleza natural
                    <br />
                    con{' '}
                    <span className="italic text-champagne">respaldo médico</span>
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-ivory/65">
                    Tu espacio personal para acompañarte antes, durante y después
                    de cada tratamiento.
                </p>

                <ul className="mt-8 space-y-3">
                    {points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-ivory/85">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ivory/10 text-sage ring-1 ring-ivory/15">
                                <Icon name="check" className="h-4 w-4" />
                            </span>
                            {p}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="relative max-w-sm text-xs leading-relaxed text-ivory/40">
                Los resultados pueden variar según cada paciente. Todo tratamiento
                requiere evaluación médica previa.
            </p>
        </div>
    );
}
