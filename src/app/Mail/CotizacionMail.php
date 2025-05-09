<?php

namespace App\Mail;

use App\Models\Cotizacion;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Barryvdh\DomPDF\Facade\Pdf;

class CotizacionMail extends Mailable
{
    use Queueable, SerializesModels;

    public $cotizacion;

    public function __construct(Cotizacion $cotizacion)
    {
        $this->cotizacion = $cotizacion;
    }

    public function build()
    {
        // Generar PDF usando la misma vista
        $pdf = Pdf::loadView('pdf.cotizacion', [
            'cotizacion' => $this->cotizacion
        ]);

        return $this->subject('Cotización de Tratamientos - Centro Estético')
            ->view('emails.cotizacion') // Vista HTML del correo
            ->attachData($pdf->output(), 'cotizacion.pdf');
    }
}
