<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Paciente;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Mostrar la vista de registro.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Manejar el registro de un nuevo usuario.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name'                  => 'required|string|max:255',
            'email'                 => 'required|string|email|max:255|unique:' . User::class,
            'password'              => ['required', 'confirmed', Rules\Password::defaults()],
            'edad'                  => 'nullable|integer|min:1|max:120',
            'sexo'                  => 'nullable|in:masculino,femenino,otro',
            'telefono'              => 'nullable|string|max:20',
            'rut'                   => 'nullable|string|max:20',
        ]);

        // Crear el usuario con rol cliente
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'cliente',
        ]);

        // Asociar paciente con el usuario recién creado
        Paciente::create([
            'user_id'         => $user->id,
            'nombre_completo' => $user->name,
            'correo'          => $user->email,
            'telefono'        => $request->telefono,
            'rut'             => $request->rut,
            'edad'            => $request->edad,
            'sexo'            => $request->sexo,
        ]);

        event(new Registered($user));
        Auth::login($user);

        return redirect()->route(
            $user->role === 'admin' ? 'admin.dashboard' : 'cliente.dashboard'
        );
    }
}
