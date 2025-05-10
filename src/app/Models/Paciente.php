<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;

    /**
     * Los atributos que se pueden asignar masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre_completo',
        'rut',
        'telefono',
        'correo',
        'edad',         // ✅ nuevo
        'sexo',         // ✅ nuevo
        'alergias',
        'historial_clinico',
        'notas',
    ];

    /**
     * Relación uno a muchos con sesiones del paciente.
     */
    public function sesiones()
    {
        return $this->hasMany(Sesion::class);
    }

    /**
     * Relación uno a muchos con citas del paciente.
     */
    public function citas()
    {
        return $this->hasMany(Cita::class);
    }
}
