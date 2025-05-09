<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('sesiones', function (Illuminate\Database\Schema\Blueprint $table) {
            $table->id();
            $table->foreignId('paciente_id')->constrained()->onDelete('cascade');
            $table->foreignId('tratamiento_id')->constrained()->onDelete('cascade');
            $table->date('fecha');
            $table->string('profesional')->nullable(); // Médico o esteticista
            $table->text('observaciones')->nullable();
            $table->text('resultado')->nullable();
            $table->string('foto_antes')->nullable();   // 📷 foto antes
            $table->string('foto_despues')->nullable(); // 📷 foto después
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sesiones');
    }
};
