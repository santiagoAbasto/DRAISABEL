import React from 'react';
import ClienteLayout from '@/Layouts/ClienteLayout';

export default function ClienteDashboard() {
  return (
    <ClienteLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bienvenido(a)</h1>
        <p className="text-sm text-gray-500">
          Aquí puedes revisar tu historial, agendar nuevas citas y ver tus tratamientos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <ClienteCard title="Mis tratamientos activos" value="3" />
        <ClienteCard title="Citas agendadas" value="2" />
        <ClienteCard title="Sesiones completadas" value="5" />
        <ClienteCard title="Última sesión" value="02/Mayo/2025" />
      </div>
    </ClienteLayout>
  );
}

function ClienteCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded shadow flex flex-col gap-1">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-xl font-semibold">{value}</span>
    </div>
  );
}
