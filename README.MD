
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

2. Levanta los servicios con Docker:

```bash
docker-compose up -d --build
```

3. Entra al contenedor `app`:

```bash
docker exec -it centro_estetico_app bash
```

4. Instala dependencias:

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

5. Ejecuta las migraciones y seeders:

```bash
php artisan migrate --seed
```

6. Corre Vite para frontend (desde dentro del contenedor):

```bash
npm run dev
```

---

## ✅ Accesos de prueba

### Admin:
- **Email**: draisabelpierola@admin.com
- **Contraseña**: CARLU2025

---

## 🌐 Accede en el navegador

- Backend: [http://localhost:8010](http://localhost:8010)
- Mailhog: [http://localhost:8026](http://localhost:8026)

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
