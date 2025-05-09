<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tratamiento extends Model
{
    use HasFactory;

    /**
     * Los atributos que se pueden asignar masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'categoria',
        'precio',
        'cantidad_sesiones',
        'observaciones',
    ];

    /**
     * Relación muchos a muchos con cotizaciones.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function cotizaciones()
    {
        return $this->belongsToMany(Cotizacion::class)
                    ->withPivot(['cantidad', 'subtotal'])
                    ->withTimestamps();
    }

    /**
     * Relación uno a muchos con sesiones.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sesiones()
    {
        return $this->hasMany(Sesion::class);
    }
}
