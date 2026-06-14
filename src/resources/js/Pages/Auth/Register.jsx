import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthField from '@/Components/auth/AuthField';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';

const interests = [
    'Arrugas',
    'Flacidez',
    'Ojeras',
    'Hidratación',
    'Contorno facial',
    'Luminosidad',
    'Calidad de piel',
    'No estoy segura, quiero evaluación',
];

export default function Register() {
    const [step, setStep] = useState(1);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        telefono: '',
        edad: '',
        sexo: '',
        password: '',
        password_confirmation: '',
        rut: '',
        interes: [],
        terms: false,
    });

    const step1Fields = ['name', 'email', 'telefono', 'edad', 'sexo'];
    const canContinue = data.name && data.email;

    const toggleInterest = (value) => {
        setData(
            'interes',
            data.interes.includes(value)
                ? data.interes.filter((i) => i !== value)
                : [...data.interes, value],
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onError: (errs) => {
                // Si hay errores de la primera etapa, vuelve a ella.
                if (step1Fields.some((f) => errs[f])) setStep(1);
            },
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout
            title="Crea tu cuenta"
            subtitle="Tu primer paso hacia un plan personalizado, con respaldo médico y resultados naturales."
        >
            <Head title="Crear cuenta" />

            {/* Progreso */}
            <div className="mb-7 flex items-center gap-3">
                {[1, 2].map((n) => (
                    <div key={n} className="flex flex-1 items-center gap-3">
                        <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors ${
                                step >= n
                                    ? 'bg-espresso text-ivory'
                                    : 'bg-mist text-ink-muted'
                            }`}
                        >
                            {step > n ? <Icon name="check" className="h-4 w-4" /> : n}
                        </span>
                        <span
                            className={`text-sm font-medium ${
                                step >= n ? 'text-espresso' : 'text-ink-muted'
                            }`}
                        >
                            {n === 1 ? 'Tus datos' : 'Seguridad'}
                        </span>
                        {n === 1 && (
                            <span className="h-px flex-1 bg-cocoa/15" aria-hidden="true" />
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={submit} className="space-y-5">
                {step === 1 ? (
                    <div className="animate-swap-in space-y-5">
                        <AuthField
                            id="name"
                            label="Nombre completo"
                            name="name"
                            placeholder="Tu nombre"
                            value={data.name}
                            error={errors.name}
                            autoFocus
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <AuthField
                            id="email"
                            label="Correo electrónico"
                            type="email"
                            name="email"
                            placeholder="tucorreo@ejemplo.com"
                            value={data.email}
                            error={errors.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <div className="grid gap-5 sm:grid-cols-2">
                            <AuthField
                                id="telefono"
                                label="Teléfono"
                                name="telefono"
                                placeholder="+591…"
                                value={data.telefono}
                                error={errors.telefono}
                                onChange={(e) => setData('telefono', e.target.value)}
                            />
                            <AuthField
                                id="edad"
                                label="Edad"
                                type="number"
                                min="1"
                                max="120"
                                name="edad"
                                placeholder="Ej. 32"
                                value={data.edad}
                                error={errors.edad}
                                onChange={(e) => setData('edad', e.target.value)}
                            />
                        </div>
                        <AuthField
                            id="sexo"
                            label="Sexo"
                            as="select"
                            name="sexo"
                            value={data.sexo}
                            error={errors.sexo}
                            onChange={(e) => setData('sexo', e.target.value)}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="femenino">Femenino</option>
                            <option value="masculino">Masculino</option>
                            <option value="otro">Otro</option>
                        </AuthField>

                        <Button
                            type="button"
                            size="lg"
                            className="w-full"
                            iconRight="arrow-right"
                            disabled={!canContinue}
                            onClick={() => setStep(2)}
                        >
                            Continuar
                        </Button>
                    </div>
                ) : (
                    <div className="animate-swap-in space-y-5">
                        <AuthField
                            id="password"
                            label="Contraseña"
                            type="password"
                            name="password"
                            placeholder="Mínimo 8 caracteres"
                            value={data.password}
                            error={errors.password}
                            autoFocus
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <AuthField
                            id="password_confirmation"
                            label="Confirmar contraseña"
                            type="password"
                            name="password_confirmation"
                            placeholder="Repite tu contraseña"
                            value={data.password_confirmation}
                            error={errors.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                        />

                        {/* Interés (opcional) */}
                        <div>
                            <p className="mb-2 text-sm font-medium text-espresso">
                                ¿Qué te gustaría mejorar?{' '}
                                <span className="font-normal text-ink-muted">
                                    (opcional)
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((opt) => {
                                    const active = data.interes.includes(opt);
                                    return (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => toggleInterest(opt)}
                                            className={`rounded-full px-3.5 py-1.5 text-sm transition-all duration-200 ${
                                                active
                                                    ? 'bg-espresso text-ivory'
                                                    : 'bg-white text-ink-soft ring-1 ring-cocoa/15 hover:ring-cocoa/30'
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-ink-soft">
                            <input
                                type="checkbox"
                                checked={data.terms}
                                onChange={(e) => setData('terms', e.target.checked)}
                                className="mt-0.5 h-4 w-4 rounded border-cocoa/30 text-espresso focus:ring-gold"
                            />
                            Acepto los términos, la política de privacidad y el
                            tratamiento ético de mis datos.
                        </label>

                        <div className="flex gap-3">
                            <Button
                                type="button"
                                variant="secondary"
                                size="lg"
                                onClick={() => setStep(1)}
                            >
                                <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                                Atrás
                            </Button>
                            <Button
                                type="submit"
                                size="lg"
                                className="flex-1"
                                disabled={processing || !data.terms}
                            >
                                {processing ? 'Creando cuenta…' : 'Crear cuenta'}
                            </Button>
                        </div>
                    </div>
                )}
            </form>

            <p className="mt-6 text-center text-sm text-ink-soft">
                ¿Ya tienes cuenta?{' '}
                <Link
                    href={route('login')}
                    className="font-medium text-cocoa transition-colors hover:text-espresso"
                >
                    Inicia sesión
                </Link>
            </p>
        </AuthLayout>
    );
}
