import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        edad: '',
        sexo: '',
        telefono: '',
        rut: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Registro" />

            <form onSubmit={submit} className="space-y-4">
                {/* Nombre */}
                <div>
                    <InputLabel htmlFor="name" value="Nombre completo" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value="Correo electrónico" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Teléfono */}
                <div>
                    <InputLabel htmlFor="telefono" value="Teléfono" />
                    <TextInput
                        id="telefono"
                        name="telefono"
                        type="text"
                        value={data.telefono}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('telefono', e.target.value)}
                    />
                    <InputError message={errors.telefono} className="mt-2" />
                </div>

                {/* RUT */}
                <div>
                    <InputLabel htmlFor="rut" value="RUT" />
                    <TextInput
                        id="rut"
                        name="rut"
                        type="text"
                        value={data.rut}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('rut', e.target.value)}
                    />
                    <InputError message={errors.rut} className="mt-2" />
                </div>

                {/* Edad */}
                <div>
                    <InputLabel htmlFor="edad" value="Edad" />
                    <TextInput
                        id="edad"
                        name="edad"
                        type="number"
                        min="0"
                        value={data.edad}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('edad', e.target.value)}
                        required
                    />
                    <InputError message={errors.edad} className="mt-2" />
                </div>

                {/* Sexo */}
                <div>
                    <InputLabel htmlFor="sexo" value="Sexo" />
                    <select
                        id="sexo"
                        name="sexo"
                        value={data.sexo}
                        onChange={(e) => setData('sexo', e.target.value)}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="femenino">Femenino</option>
                        <option value="masculino">Masculino</option>
                        <option value="otro">Otro</option>
                    </select>
                    <InputError message={errors.sexo} className="mt-2" />
                </div>

                {/* Contraseña */}
                <div>
                    <InputLabel htmlFor="password" value="Contraseña" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                {/* Confirmación */}
                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirmar contraseña" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                {/* Botón */}
                <div className="flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Registrarse
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
