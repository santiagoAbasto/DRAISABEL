<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\CotizacionMail;
use App\Models\Cotizacion;
use App\Models\Paciente;
use App\Models\Tratamiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CotizacionController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Cotizaciones/Index', [
            'cotizaciones' => Cotizacion::with('paciente', 'tratamientos')->latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Cotizaciones/Create', [
            'pacientes' => Paciente::all(),
            'tratamientos' => Tratamiento::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'paciente_id' => 'required|exists:pacientes,id',
            'tratamientos' => 'required|array|min:1',
            'tratamientos.*.id' => 'required|exists:tratamientos,id',
            'tratamientos.*.cantidad' => 'required|integer|min:1',
        ]);

        $total = 0;
        $tratamientosData = [];

        foreach ($validated['tratamientos'] as $item) {
            $tratamiento = Tratamiento::findOrFail($item['id']);
            $subtotal = $tratamiento->precio * $item['cantidad'];
            $total += $subtotal;

            $tratamientosData[$tratamiento->id] = [
                'cantidad' => $item['cantidad'],
                'subtotal' => $subtotal
            ];
        }

        $cotizacion = Cotizacion::create([
            'paciente_id' => $validated['paciente_id'],
            'total' => $total,
        ]);

        $cotizacion->tratamientos()->attach($tratamientosData);

        // Enviar correo con PDF adjunto
        Mail::to($cotizacion->paciente->correo)->send(new CotizacionMail($cotizacion));

        return redirect()->route('admin.cotizaciones.index')
            ->with('success', 'Cotización generada y enviada por correo.');
    }
}
