import AdminLayout from '@/Layouts/TailAdminLayout';
import { Link } from '@inertiajs/react';

export default function Index({ cotizaciones }) {
  return (
    <AdminLayout title="Historial de Cotizaciones">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cotizaciones</h1>
        <Link
          href={route('admin.cotizaciones.create')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nueva Cotización
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Paciente</th>
              <th className="px-4 py-2 text-left font-medium">Total</th>
              <th className="px-4 py-2 text-left font-medium">Fecha</th>
              <th className="px-4 py-2 text-left font-medium">Tratamientos</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.length > 0 ? (
              cotizaciones.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="px-4 py-2">{c.paciente?.nombre_completo ?? '-'}</td>
                  <td className="px-4 py-2">${c.total}</td>
                  <td className="px-4 py-2">{new Date(c.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc pl-4">
                      {c.tratamientos.map((t) => (
                        <li key={t.id}>
                          {t.nombre} x{t.pivot.cantidad} (${t.pivot.subtotal})
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No hay cotizaciones registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
