import { Head, useForm } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthField from '@/Components/auth/AuthField';
import Button from '@/Components/public/Button';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout
            title="Nueva contraseña"
            subtitle="Crea una contraseña segura para proteger tu cuenta."
        >
            <Head title="Restablecer contraseña" />

            <form onSubmit={submit} className="space-y-5">
                <AuthField
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    name="email"
                    autoComplete="username"
                    value={data.email}
                    error={errors.email}
                    onChange={(e) => setData('email', e.target.value)}
                />
                <AuthField
                    id="password"
                    label="Nueva contraseña"
                    type="password"
                    name="password"
                    autoComplete="new-password"
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
                    autoComplete="new-password"
                    placeholder="Repite tu contraseña"
                    value={data.password_confirmation}
                    error={errors.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                />

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={processing}
                    iconRight={processing ? undefined : 'arrow-right'}
                >
                    {processing ? 'Guardando…' : 'Restablecer contraseña'}
                </Button>
            </form>
        </AuthLayout>
    );
}
