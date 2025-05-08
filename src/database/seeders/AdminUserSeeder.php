<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'draisabelpierola@admin.com'],
            [
                'name' => 'Dra. Isabel Pierola',
                'password' => Hash::make('CARLU2025'),
                'role' => 'admin',
            ]
        );
    }
}
