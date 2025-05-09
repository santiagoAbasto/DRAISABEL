<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sesion extends Model
{
    use HasFactory;
    
    protected $table = 'sesiones'; // o el nombre exacto de tu tabla


    protected $fillable = [
        'paciente_id',
        'tratamiento_id',
        'fecha',
        'profesional',
        'observaciones',
        'resultado',
        'foto_antes',
        'foto_despues',
    ];

    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    public function tratamiento()
    {
        return $this->belongsTo(Tratamiento::class);
    }
}
