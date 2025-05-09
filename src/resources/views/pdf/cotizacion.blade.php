<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cotización</title>
    <style>
        body {
            font-family: sans-serif;
            font-size: 14px;
            color: #333;
        }
        .encabezado {
            margin-bottom: 20px;
        }
        .encabezado h2 {
            margin: 0;
        }
        .datos-paciente, .total, .tratamientos {
            margin-top: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        .total {
            text-align: right;
            font-size: 16px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="encabezado">
        <h2>CENTRO ESTÉTICO</h2>
        <p><strong>Fecha:</strong> {{ $cotizacion->created_at->format('d/m/Y') }}</p>
    </div>

    <div class="datos-paciente">
        <p><strong>Paciente:</strong> {{ $cotizacion->paciente->nombre_completo }}</p>
        @if($cotizacion->paciente->correo)
            <p><strong>Email:</strong> {{ $cotizacion->paciente->correo }}</p>
        @endif
        @if($cotizacion->paciente->telefono)
            <p><strong>Teléfono:</strong> {{ $cotizacion->paciente->telefono }}</p>
        @endif
    </div>

    <div class="tratamientos">
        <h3>Tratamientos Cotizados</h3>
        <table>
            <thead>
                <tr>
                    <th>Tratamiento</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($cotizacion->tratamientos as $t)
                    <tr>
                        <td>{{ $t->nombre }}</td>
                        <td>{{ $t->pivot->cantidad }}</td>
                        <td>${{ number_format($t->precio, 0, ',', '.') }}</td>
                        <td>${{ number_format($t->pivot->subtotal, 0, ',', '.') }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div class="total">
        Total: ${{ number_format($cotizacion->total, 0, ',', '.') }}
    </div>
</body>
</html>
