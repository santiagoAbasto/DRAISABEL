<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tratamiento;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TratamientoController extends Controller
{
    private array $categorias = [
        'Bioestimuladores',
        'Mesoterapia',
        'Hilos tensores',
        'Toxina botulínica',
        'Armonización con ácido hialurónico',
        'Rejuvenecimiento facial',
        'Tratamientos reductivos',
        'Tratamientos con energía plasmática',
    ];

    public function index()
    {
        return Inertia::render('Admin/Tratamientos/Index', [
            'tratamientos' => Tratamiento::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Tratamientos/Create', [
            'categorias' => $this->categorias
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre'             => 'required|string|max:255',
            'categoria'          => 'required|string|max:255',
            'precio'             => 'required|numeric|min:0',
            'cantidad_sesiones' => 'nullable|integer|min:1',
            'observaciones'      => 'nullable|string',
        ]);

        Tratamiento::create($validated);

        return redirect()->route('admin.tratamientos.index')->with('success', 'Tratamiento creado con éxito.');
    }

    public function edit(Tratamiento $tratamiento)
    {
        return Inertia::render('Admin/Tratamientos/Edit', [
            'tratamiento' => $tratamiento,
            'categorias'  => $this->categorias
        ]);
    }

    public function update(Request $request, Tratamiento $tratamiento)
    {
        $validated = $request->validate([
            'nombre'             => 'required|string|max:255',
            'categoria'          => 'required|string|max:255',
            'precio'             => 'required|numeric|min:0',
            'cantidad_sesiones' => 'nullable|integer|min:1',
            'observaciones'      => 'nullable|string',
        ]);

        $tratamiento->update($validated);

        return redirect()->route('admin.tratamientos.index')->with('success', 'Tratamiento actualizado.');
    }

    public function destroy(Tratamiento $tratamiento)
    {
        $tratamiento->delete();

        return redirect()->route('admin.tratamientos.index')->with('success', 'Tratamiento eliminado.');
    }
}
