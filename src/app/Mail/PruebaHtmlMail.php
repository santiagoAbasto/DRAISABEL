<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PruebaHtmlMail extends Mailable
{
    use Queueable, SerializesModels;

    public $nombre;

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
    }

    public function build()
    {
        return $this->subject('Correo HTML desde Laravel')
                    ->view('emails.prueba');
    }
}
