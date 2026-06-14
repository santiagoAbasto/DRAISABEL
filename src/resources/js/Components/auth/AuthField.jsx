import { useState } from 'react';
import Icon from '@/Components/public/Icon';

/**
 * Campo de formulario premium para autenticación.
 * Etiqueta + input (o select) + error asociado. Los password incluyen
 * botón para mostrar/ocultar. Accesible: label vinculado, aria-invalid,
 * error con id referenciado por aria-describedby.
 */
export default function AuthField({
    id,
    label,
    type = 'text',
    error,
    icon,
    as = 'input',
    children,
    className = '',
    ...props
}) {
    const [show, setShow] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (show ? 'text' : 'password') : type;
    const errId = error ? `${id}-error` : undefined;

    const base =
        'w-full rounded-xl bg-white text-espresso placeholder:text-ink-muted/70 ring-1 transition-all duration-200 ease-out-quart focus:outline-none focus:ring-2 ' +
        (error
            ? 'ring-[#c2685c]/60 focus:ring-[#c2685c]'
            : 'ring-cocoa/15 focus:ring-gold');
    const pad = icon ? 'pl-11 pr-4 py-3' : isPassword ? 'pl-4 pr-11 py-3' : 'px-4 py-3';

    return (
        <div className={className}>
            <label
                htmlFor={id}
                className="mb-1.5 block text-sm font-medium text-espresso"
            >
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <Icon
                        name={icon}
                        className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
                    />
                )}

                {as === 'select' ? (
                    <select
                        id={id}
                        aria-invalid={!!error}
                        aria-describedby={errId}
                        className={`${base} ${pad} appearance-none pr-10`}
                        {...props}
                    >
                        {children}
                    </select>
                ) : (
                    <input
                        id={id}
                        type={inputType}
                        aria-invalid={!!error}
                        aria-describedby={errId}
                        className={`${base} ${pad}`}
                        {...props}
                    />
                )}

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShow((s) => !s)}
                        aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        className="absolute right-2.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-ink-muted transition-colors hover:text-espresso"
                    >
                        <Icon name={show ? 'eye' : 'eye'} className="h-5 w-5" />
                    </button>
                )}

                {as === 'select' && (
                    <Icon
                        name="chevron-down"
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                    />
                )}
            </div>

            {error && (
                <p
                    id={errId}
                    className="mt-1.5 flex items-center gap-1.5 text-sm text-[#b4493d]"
                >
                    <Icon name="close" className="h-3.5 w-3.5 shrink-0" />
                    {error}
                </p>
            )}
        </div>
    );
}
