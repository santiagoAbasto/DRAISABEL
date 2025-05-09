<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cotizacion extends Model
{
    use HasFactory;

    protected $table = 'cotizaciones'; // 👈 esto es lo importante

    protected $fillable = ['paciente_id', 'total'];

    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    public function tratamientos()
    {
        return $this->belongsToMany(Tratamiento::class)
                    ->withPivot(['cantidad', 'subtotal'])
                    ->withTimestamps();
    }
}

