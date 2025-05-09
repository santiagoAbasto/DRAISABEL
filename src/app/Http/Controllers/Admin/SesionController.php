<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sesion;
use App\Models\Paciente;
use App\Models\Tratamiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SesionController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Sesiones/Index', [
            'sesiones' => Sesion::with('paciente', 'tratamiento')->latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Sesiones/Create', [
            'pacientes' => Paciente::all(),
            'tratamientos' => Tratamiento::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'paciente_id'     => 'required|exists:pacientes,id',
            'tratamiento_id'  => 'required|exists:tratamientos,id',
            'fecha'           => 'required|date',
            'profesional'     => 'nullable|string|max:255',
            'observaciones'   => 'nullable|string',
            'resultado'       => 'nullable|string',
            'foto_antes'      => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'foto_despues'    => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('foto_antes')) {
            $validated['foto_antes'] = $request->file('foto_antes')->store('sesiones', 'public');
        }

        if ($request->hasFile('foto_despues')) {
            $validated['foto_despues'] = $request->file('foto_despues')->store('sesiones', 'public');
        }

        Sesion::create($validated);

        return redirect()->route('admin.sesiones.index')->with('success', 'Sesión registrada correctamente.');
    }

    public function destroy(Sesion $sesion)
    {
        if ($sesion->foto_antes) {
            Storage::disk('public')->delete($sesion->foto_antes);
        }
        if ($sesion->foto_despues) {
            Storage::disk('public')->delete($sesion->foto_despues);
        }

        $sesion->delete();

        return redirect()->route('admin.sesiones.index')->with('success', 'Sesión eliminada.');
    }
}
