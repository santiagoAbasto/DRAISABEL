
# Centro Estético - Sistema de Gestión

Este proyecto es una plataforma moderna para administrar un centro estético. Incluye gestión de usuarios por roles (administrador y cliente), autenticación, dashboard dinámico con Tailwind, integración con Laravel + React (Inertia), y entorno completo en Docker.

---

## 🚀 Tecnologías utilizadas

- Laravel 12
- Inertia.js + React
- Tailwind CSS
- Docker + Docker Compose
- PostgreSQL
- Mailhog (entorno local)
- Chart.js

---

## 📦 Instalación (modo desarrollo)

1. Clona el repositorio:

```bash
git clone https://github.com/usuario/centro-estetico.git
cd centro-estetico
```

2. Levanta los servicios base con Docker:

```bash
docker compose up -d --build
```

3. Entra al contenedor `app`:

```bash
docker exec -it centro_estetico_app bash
```

4. Ejecuta las migraciones y seeders:

```bash
php artisan migrate --seed
```

Nota: el proyecto ya corre Vite dentro de Docker. No hace falta Node local.

---

## ✅ Accesos de prueba

### Admin:
- **Email**: draisabelpierola@admin.com
- **Contraseña**: CARLU2025

---

## 🌐 Accede en el navegador

- Backend: [http://localhost:8010](http://localhost:8010)
- Frontend Vite: [http://localhost:5174](http://localhost:5174)
- Mailhog: [http://localhost:8026](http://localhost:8026)

---

## ☁️ Exponer con Cloudflare Tunnel

Si quieres publicar el proyecto desde Docker usando Cloudflare:

1. Crea un túnel en Cloudflare Zero Trust y copia el `TUNNEL_TOKEN`.
2. Crea tu archivo de variables:

```bash
cp .env.docker.example .env.docker
```

3. Coloca el token en `.env.docker`:

```bash
CLOUDFLARED_TOKEN=tu_token_aqui
```

4. Levanta el proyecto con el perfil de Cloudflare:

```bash
docker compose --env-file .env.docker --profile cloudflare up -d --build
```

El contenedor `cloudflared` publicará el servicio `nginx` del proyecto. Internamente apunta al puerto `80` del servicio `nginx`, que es el que sirve la app Laravel en Docker.

### Compartir sin token

Si solo quieres compartir el proyecto rápido y sin configurar una cuenta o token dentro del contenedor, puedes usar un Quick Tunnel de Cloudflare:

```bash
docker compose --profile share up -d
```

Luego mira la URL pública en los logs:

```bash
docker logs -f centro_estetico_cloudflared_quick
```

Cloudflare imprimirá una URL parecida a:

```text
https://algo-aleatorio.trycloudflare.com
```

Notas:

- Esta URL es temporal.
- Puede cambiar si reinicias el contenedor.
- Sirve bien para demos y revisiones rápidas.
- Si quieres un dominio fijo tuyo, ahí sí necesitas un túnel autenticado con Cloudflare.

Cuando activas `share`, el proyecto compila assets estáticos y desactiva temporalmente el modo Vite HMR para que el enlace público no apunte a `localhost:5174`.

Si luego quieres volver al modo de desarrollo con HMR local:

```bash
docker compose restart vite
```

---

## 🗂️ Estructura del proyecto

- `src/` → Código fuente Laravel + React
- `docker/` → Archivos de configuración (Dockerfile, nginx)
- `database/seeders/` → Carga inicial con usuario admin

---

## 📌 Pendiente por implementar

- Dashboard con datos reales (pacientes, sesiones, ingresos)
- Gestión completa de pacientes y tratamientos
- Notificaciones y emisión de cotizaciones PDF

---

## 🤝 Licencia

MIT — libre para usar y modificar con fines educativos o comerciales.
