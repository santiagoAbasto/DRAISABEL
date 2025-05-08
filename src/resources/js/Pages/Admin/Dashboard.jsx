import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import TailAdminLayout from '@/Layouts/TailAdminLayout';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function AdminDashboard() {
  const chartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sesiones',
        data: [120, 180, 150, 220, 300, 250],
        backgroundColor: '#6366F1',
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <TailAdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <p className="text-sm text-gray-500">Resumen general de la actividad del centro estético</p>
      </div>

      {/* Cards estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card title="Pacientes registrados" value="328" growth="+12%" />
        <Card title="Sesiones realizadas" value="1,238" growth="+8%" />
        <Card title="Ingresos del mes" value="$4,500.00" growth="+15%" />
        <Card title="Tratamientos activos" value="11" growth="+2%" />
      </div>

      {/* Gráfico */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Sesiones por mes</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </TailAdminLayout>
  );
}

function Card({ title, value, growth }) {
  return (
    <div className="bg-white p-5 rounded shadow flex flex-col gap-1">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-xl font-bold">{value}</span>
      <span className="text-xs text-green-500">{growth}</span>
    </div>
  );
}
