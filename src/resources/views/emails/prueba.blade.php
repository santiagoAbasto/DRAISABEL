<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Correo HTML</title>
</head>
<body>
    <h2 style="color:#0d6efd;">¡Hola {{ $nombre }}!</h2>
    <p>Este es un <strong>correo de prueba en HTML</strong> enviado desde Laravel con Mailtrap.</p>
    <p>Funciona correctamente con <span style="color:green;">texto formateado</span> y diseño personalizado.</p>
    <hr>
    <small>Centro Estético - {{ now()->format('d/m/Y H:i') }}</small>
</body>
</html>
