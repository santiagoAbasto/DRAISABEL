<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cita;
use App\Models\Paciente;
use App\Models\Tratamiento;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CitaController extends Controller
{
    /**
     * Listar todas las citas.
     */
    public function index()
    {
        $citas = Cita::with(['paciente', 'tratamiento'])
                     ->orderBy('fecha_hora')
                     ->get();

        return Inertia::render('Admin/Citas/Index', compact('citas'));
    }

    /**
     * Formulario para agendar nueva cita.
     */
    public function create()
    {
        $pacientes = Paciente::orderBy('nombre_completo')->get();
        $tratamientos = Tratamiento::orderBy('nombre')->get();

        return Inertia::render('Admin/Citas/Create', compact('pacientes', 'tratamientos'));
    }

    /**
     * Guardar nueva cita en base de datos.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'paciente_id'    => 'required|exists:pacientes,id',
            'tratamiento_id' => 'required|exists:tratamientos,id',
            'profesional'    => 'required|string|max:255',
            'sala'           => 'nullable|string|max:255',
            'fecha_hora'     => 'required|date|after:now',
            'estado'         => 'required|in:pendiente,confirmada,cancelada',
            'observaciones'  => 'nullable|string',
        ]);

        Cita::create($validated);

        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita agendada correctamente.');
    }

    /**
     * Vista de calendario con todas las citas.
     */
    public function calendario()
    {
        $citas = Cita::with(['paciente', 'tratamiento'])->get();

        return Inertia::render('Admin/Citas/Calendario', compact('citas'));
    }

    /**
     * Eliminar una cita existente.
     */
    public function destroy(Cita $cita)
    {
        $cita->delete();

        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita eliminada correctamente.');
    }
}
