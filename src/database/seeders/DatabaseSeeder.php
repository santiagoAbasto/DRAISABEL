<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        // Si deseas crear usuarios de prueba con factory, descomenta esto:
        // User::factory(10)->create();

        // Crea un usuario de prueba
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'), // agrega contraseña si lo usarás
            'role' => 'admin', // opcional, si estás manejando roles
        ]);

        // Llamar a otros seeders
        $this->call([
            AdminUserSeeder::class,
            // Agrega aquí otros seeders si los tienes
        ]);
    }
}
