import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthField from '@/Components/auth/AuthField';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({ email: '' });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <AuthLayout
            title="Recupera tu acceso"
            subtitle="Indícanos tu correo y te enviaremos un enlace para crear una nueva contraseña."
        >
            <Head title="Recuperar contraseña" />

            {status ? (
                <div className="rounded-2xl bg-sage/20 p-6 text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage/40 text-cocoa">
                        <Icon name="check" className="h-6 w-6" />
                    </span>
                    <p className="mt-4 font-medium text-espresso">Enlace enviado</p>
                    <p className="mt-1 text-sm text-ink-soft">{status}</p>
                    <Link
                        href={route('login')}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cocoa hover:text-espresso"
                    >
                        <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                        Volver al inicio de sesión
                    </Link>
                </div>
            ) : (
                <form onSubmit={submit} className="space-y-5">
                    <AuthField
                        id="email"
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        placeholder="tucorreo@ejemplo.com"
                        value={data.email}
                        error={errors.email}
                        autoFocus
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={processing}
                        iconRight={processing ? undefined : 'arrow-right'}
                    >
                        {processing ? 'Enviando…' : 'Enviar enlace'}
                    </Button>

                    <p className="text-center text-sm text-ink-soft">
                        <Link
                            href={route('login')}
                            className="font-medium text-cocoa transition-colors hover:text-espresso"
                        >
                            Volver al inicio de sesión
                        </Link>
                    </p>
                </form>
            )}
        </AuthLayout>
    );
}
