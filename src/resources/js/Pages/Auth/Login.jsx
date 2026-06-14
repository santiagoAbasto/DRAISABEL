import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthField from '@/Components/auth/AuthField';
import Button from '@/Components/public/Button';
import Icon from '@/Components/public/Icon';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    // Acceso demo: rellena las credenciales del admin de prueba (seed).
    const fillDemo = () => {
        setData({
            email: 'draisabelpierola@admin.com',
            password: 'CARLU2025',
            remember: true,
        });
    };

    return (
        <AuthLayout
            title="Bienvenida de nuevo"
            subtitle="Accede a tu espacio de paciente para ver tus citas, indicaciones y recomendaciones."
        >
            <Head title="Iniciar sesión" />

            {status && (
                <div className="mb-5 rounded-xl bg-sage/20 px-4 py-3 text-sm font-medium text-cocoa">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <AuthField
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    name="email"
                    autoComplete="username"
                    placeholder="tucorreo@ejemplo.com"
                    value={data.email}
                    error={errors.email}
                    autoFocus
                    onChange={(e) => setData('email', e.target.value)}
                />

                <AuthField
                    id="password"
                    label="Contraseña"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={data.password}
                    error={errors.password}
                    onChange={(e) => setData('password', e.target.value)}
                />

                <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-soft">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="h-4 w-4 rounded border-cocoa/30 text-espresso focus:ring-gold"
                        />
                        Recordarme
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm font-medium text-cocoa transition-colors hover:text-espresso"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={processing}
                    iconRight={processing ? undefined : 'arrow-right'}
                >
                    {processing ? 'Entrando…' : 'Iniciar sesión'}
                </Button>
            </form>

            <button
                type="button"
                onClick={fillDemo}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-dashed border-cocoa/25 px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-cocoa/40 hover:text-cocoa"
            >
                <Icon name="spark" className="h-4 w-4 text-gold" />
                Usar acceso demo
            </button>

            <p className="mt-6 text-center text-sm text-ink-soft">
                ¿Aún no tienes cuenta?{' '}
                <Link
                    href={route('register')}
                    className="font-medium text-cocoa transition-colors hover:text-espresso"
                >
                    Crear cuenta
                </Link>
            </p>
        </AuthLayout>
    );
}
