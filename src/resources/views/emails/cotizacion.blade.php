<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cotización</title>
</head>
<body>
    <h2 style="color:#0d6efd;">¡Hola {{ $cotizacion->paciente->nombre_completo }}!</h2>
    <p>Adjuntamos tu cotización con los tratamientos seleccionados en el Centro Estético.</p>

    <p><strong>Total:</strong> ${{ number_format($cotizacion->total, 0, ',', '.') }}</p>

    <p>Gracias por confiar en nosotros.<br>
    <small>Este correo contiene tu PDF adjunto 📎</small></p>

    <hr>
    <small style="color:gray;">Centro Estético - {{ now()->format('d/m/Y H:i') }}</small>
</body>
</html>
