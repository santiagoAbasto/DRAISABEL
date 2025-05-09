import AdminLayout from '@/Layouts/TailAdminLayout';
import { Link, router } from '@inertiajs/react';

export default function Index({ tratamientos }) {
  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar este tratamiento?')) {
      router.delete(route('admin.tratamientos.destroy', id));
    }
  };

  return (
    <AdminLayout title="Tratamientos">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tratamientos</h1>
        <Link
          href={route('admin.tratamientos.create')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nuevo Tratamiento
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Nombre</th>
              <th className="px-4 py-2 text-left font-medium">Categoría</th>
              <th className="px-4 py-2 text-left font-medium">Precio</th>
              <th className="px-4 py-2 text-left font-medium">Sesiones</th>
              <th className="px-4 py-2 text-left font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tratamientos.length > 0 ? (
              tratamientos.map((tratamiento) => (
                <tr key={tratamiento.id}>
                  <td className="px-4 py-2">{tratamiento.nombre}</td>
                  <td className="px-4 py-2">{tratamiento.categoria}</td>
                  <td className="px-4 py-2">${tratamiento.precio}</td>
                  <td className="px-4 py-2">{tratamiento.cantidad_sesiones ?? '—'}</td>
                  <td className="px-4 py-2 space-x-2">
                    <Link
                      href={route('admin.tratamientos.edit', tratamiento.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(tratamiento.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center text-gray-500" colSpan="5">
                  No hay tratamientos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
