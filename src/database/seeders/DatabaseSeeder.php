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

        // Crea o actualiza un usuario de prueba para que el seeder sea idempotente
        User::updateOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => bcrypt('password'),
                'role' => 'admin',
            ]
        );

        // Llamar a otros seeders
        $this->call([
            AdminUserSeeder::class,
            // Agrega aquí otros seeders si los tienes
        ]);
    }
}
