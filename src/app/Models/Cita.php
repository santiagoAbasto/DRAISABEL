<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    /**
     * Atributos asignables masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'paciente_id',
        'tratamiento_id',
        'profesional',
        'sala',
        'fecha_hora',
        'estado',
        'observaciones',
    ];

    /**
     * Casting de atributos.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'fecha_hora' => 'datetime',
    ];

    /**
     * Relación con el paciente.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    /**
     * Relación con el tratamiento.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tratamiento()
    {
        return $this->belongsTo(Tratamiento::class);
    }
}

