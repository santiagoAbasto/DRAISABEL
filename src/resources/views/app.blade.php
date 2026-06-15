<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#FAF7F2">
        <link rel="icon" href="/brand/favicon.png" type="image/png">
        <link rel="apple-touch-icon" href="/brand/favicon.png">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fuentes de marca: serif editorial (Cormorant) + sans de interfaz (Inter) -->
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link href="https://fonts.bunny.net/css?family=cormorant-garamond:400,500,600,600i,700|inter:400,500,600,700&display=swap" rel="stylesheet" />

        <!-- El reveal solo se activa cuando hay JS (evita contenido invisible sin JS) -->
        <script>document.documentElement.classList.add('js-reveal');</script>

        <!-- Scripts -->
        @routes
        @unless(is_file(storage_path('framework/share-mode')))
            @viteReactRefresh
        @endunless
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
