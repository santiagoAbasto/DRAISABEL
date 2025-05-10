import AdminLayout from '@/Layouts/TailAdminLayout';
import { Link, router } from '@inertiajs/react';

export default function Index({ citas }) {
  const handleDelete = (id) => {
    if (confirm('¿Seguro que deseas eliminar esta cita?')) {
      router.delete(route('admin.citas.destroy', id));
    }
  };

  return (
    <AdminLayout title="Citas Agendadas">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-2xl font-bold">Citas Agendadas</h1>
        <div className="flex gap-2">
          <Link
            href={route('admin.citas.calendario')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Ver Calendario
          </Link>
          <Link
            href={route('admin.citas.create')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Nueva Cita
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Fecha y Hora</th>
              <th className="px-4 py-2 text-left">Paciente</th>
              <th className="px-4 py-2 text-left">Tratamiento</th>
              <th className="px-4 py-2 text-left">Profesional</th>
              <th className="px-4 py-2 text-left">Sala</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.length > 0 ? (
              citas.map((cita) => (
                <tr key={cita.id} className="border-t">
                  <td className="px-4 py-2">{new Date(cita.fecha_hora).toLocaleString()}</td>
                  <td className="px-4 py-2">{cita.paciente?.nombre_completo ?? '—'}</td>
                  <td className="px-4 py-2">{cita.tratamiento?.nombre ?? '—'}</td>
                  <td className="px-4 py-2">{cita.profesional}</td>
                  <td className="px-4 py-2">{cita.sala ?? '—'}</td>
                  <td className="px-4 py-2 capitalize">{cita.estado}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(cita.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
                  No hay citas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
