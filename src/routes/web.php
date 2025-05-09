<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Página de bienvenida pública
|--------------------------------------------------------------------------
*/
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});

/*
|--------------------------------------------------------------------------
| Perfil de Usuario (Autenticado)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/*
|--------------------------------------------------------------------------
| Panel de Administración
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', fn () => Inertia::render('Admin/Dashboard'))->name('dashboard');

    // Recursos del admin
    Route::resource('tratamientos', \App\Http\Controllers\Admin\TratamientoController::class);
    Route::resource('pacientes', \App\Http\Controllers\Admin\PacienteController::class);
    Route::resource('cotizaciones', \App\Http\Controllers\Admin\CotizacionController::class);
    Route::resource('sesiones', \App\Http\Controllers\Admin\SesionController::class); // ✅ NUEVO
});

/*
|--------------------------------------------------------------------------
| Panel del Cliente
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:cliente'])->prefix('cliente')->name('cliente.')->group(function () {
    Route::get('/', fn () => Inertia::render('Cliente/Dashboard'))->name('dashboard');
});

/*
|--------------------------------------------------------------------------
| Autenticación (login, registro, etc.)
|--------------------------------------------------------------------------
*/
require __DIR__.'/auth.php';
