import AdminLayout from '@/Layouts/TailAdminLayout';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Index({ sesiones }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imagenActual, setImagenActual] = useState('');

  const handleDelete = (id) => {
    if (confirm('¿Seguro que deseas eliminar esta sesión?')) {
      router.delete(route('admin.sesiones.destroy', id));
    }
  };

  const verImagen = (ruta) => {
    setImagenActual(ruta);
    setIsOpen(true);
  };

  return (
    <AdminLayout title="Historial de Sesiones">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Historial de Sesiones</h1>
        <Link
          href={route('admin.sesiones.create')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nueva Sesión
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Paciente</th>
              <th className="px-4 py-2 text-left">Tratamiento</th>
              <th className="px-4 py-2 text-left">Profesional</th>
              <th className="px-4 py-2 text-left">Observaciones</th>
              <th className="px-4 py-2 text-left">Fotos</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sesiones.length > 0 ? (
              sesiones.map((s) => (
                <tr key={s.id}>
                  <td className="px-4 py-2">{s.fecha}</td>
                  <td className="px-4 py-2">{s.paciente?.nombre_completo ?? '—'}</td>
                  <td className="px-4 py-2">{s.tratamiento?.nombre ?? '—'}</td>
                  <td className="px-4 py-2">{s.profesional ?? '—'}</td>
                  <td className="px-4 py-2">{s.observaciones?.slice(0, 30) ?? '—'}...</td>
                  <td className="px-4 py-2 space-x-2">
                    {s.foto_antes && (
                      <button
                        onClick={() => verImagen(`/storage/${s.foto_antes}`)}
                        className="text-blue-600 underline"
                      >
                        Antes
                      </button>
                    )}
                    {s.foto_despues && (
                      <button
                        onClick={() => verImagen(`/storage/${s.foto_despues}`)}
                        className="text-green-600 underline"
                      >
                        Después
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center text-gray-500">
                  No hay sesiones registradas aún.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de imagen */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-3xl w-full p-4 rounded shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <img
              src={imagenActual}
              alt="Foto de sesión"
              className="w-full h-auto rounded"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </AdminLayout>
  );
}
