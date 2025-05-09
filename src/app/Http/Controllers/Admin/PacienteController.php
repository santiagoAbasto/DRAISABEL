<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Paciente;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PacienteController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Pacientes/Index', [
            'pacientes' => Paciente::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Pacientes/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre_completo' => 'required|string|max:255',
            'rut'             => 'nullable|string|max:20',
            'telefono'        => 'nullable|string|max:20',
            'correo'          => 'nullable|email|max:255',
            'alergias'        => 'nullable|string',
            'historial_clinico' => 'nullable|string',
            'notas'           => 'nullable|string',
        ]);

        Paciente::create($validated);

        return redirect()->route('admin.pacientes.index')->with('success', 'Paciente registrado con éxito.');
    }

    public function edit(Paciente $paciente)
    {
        return Inertia::render('Admin/Pacientes/Edit', [
            'paciente' => $paciente,
        ]);
    }

    public function update(Request $request, Paciente $paciente)
    {
        $validated = $request->validate([
            'nombre_completo' => 'required|string|max:255',
            'rut'             => 'nullable|string|max:20',
            'telefono'        => 'nullable|string|max:20',
            'correo'          => 'nullable|email|max:255',
            'alergias'        => 'nullable|string',
            'historial_clinico' => 'nullable|string',
            'notas'           => 'nullable|string',
        ]);

        $paciente->update($validated);

        return redirect()->route('admin.pacientes.index')->with('success', 'Paciente actualizado.');
    }

    public function destroy(Paciente $paciente)
    {
        $paciente->delete();

        return redirect()->route('admin.pacientes.index')->with('success', 'Paciente eliminado.');
    }
}
