import AdminLayout from '@/Layouts/TailAdminLayout';
import { Link, router } from '@inertiajs/react';

export default function Index({ pacientes }) {
  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      router.delete(route('admin.pacientes.destroy', id));
    }
  };

  return (
    <AdminLayout title="Pacientes">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Listado de Pacientes</h1>
        <Link
          href={route('admin.pacientes.create')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nuevo Paciente
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Nombre</th>
              <th className="px-4 py-2 text-left font-medium">Edad</th> {/* nuevo */}
              <th className="px-4 py-2 text-left font-medium">Sexo</th> {/* nuevo */}
              <th className="px-4 py-2 text-left font-medium">RUT</th>
              <th className="px-4 py-2 text-left font-medium">Teléfono</th>
              <th className="px-4 py-2 text-left font-medium">Correo</th>
              <th className="px-4 py-2 text-left font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pacientes.length > 0 ? (
              pacientes.map((p) => (
                <tr key={p.id}>
                  <td className="px-4 py-2">{p.nombre_completo}</td>
                  <td className="px-4 py-2">{p.edad ?? '—'}</td> {/* nuevo */}
                  <td className="px-4 py-2 capitalize">{p.sexo ?? '—'}</td> {/* nuevo */}
                  <td className="px-4 py-2">{p.rut ?? '—'}</td>
                  <td className="px-4 py-2">{p.telefono ?? '—'}</td>
                  <td className="px-4 py-2">{p.correo ?? '—'}</td>
                  <td className="px-4 py-2 space-x-2">
                    <Link
                      href={route('admin.pacientes.edit', p.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
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
                  No hay pacientes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
