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
        'user_id',
        'nombre_completo',
        'rut',
        'telefono',
        'correo',
        'edad',
        'sexo',
        'alergias',
        'historial_clinico',
        'notas',
    ];

    /**
     * Relación uno a muchos con sesiones del paciente.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sesiones()
    {
        return $this->hasMany(Sesion::class);
    }

    /**
     * Relación uno a muchos con citas del paciente.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function citas()
    {
        return $this->hasMany(Cita::class);
    }

    /**
     * Relación con el usuario (si el paciente tiene login).
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
