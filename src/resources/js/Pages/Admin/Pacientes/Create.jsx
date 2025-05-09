import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/TailAdminLayout'; // O '@/Layouts/AdminLayout'

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    nombre_completo: '',
    rut: '',
    telefono: '',
    correo: '',
    alergias: '',
    historial_clinico: '',
    notas: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.pacientes.store'));
  };

  return (
    <AdminLayout title="Nuevo Paciente">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">Nombre Completo</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={data.nombre_completo}
            onChange={(e) => setData('nombre_completo', e.target.value)}
          />
          {errors.nombre_completo && <p className="text-red-500 text-sm">{errors.nombre_completo}</p>}
        </div>

        <div>
          <label className="block font-medium">RUT</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={data.rut}
            onChange={(e) => setData('rut', e.target.value)}
          />
          {errors.rut && <p className="text-red-500 text-sm">{errors.rut}</p>}
        </div>

        <div>
          <label className="block font-medium">Teléfono</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={data.telefono}
            onChange={(e) => setData('telefono', e.target.value)}
          />
          {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
        </div>

        <div>
          <label className="block font-medium">Correo</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={data.correo}
            onChange={(e) => setData('correo', e.target.value)}
          />
          {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}
        </div>

        <div>
          <label className="block font-medium">Alergias</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={data.alergias}
            onChange={(e) => setData('alergias', e.target.value)}
          />
          {errors.alergias && <p className="text-red-500 text-sm">{errors.alergias}</p>}
        </div>

        <div>
          <label className="block font-medium">Historial Clínico</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={data.historial_clinico}
            onChange={(e) => setData('historial_clinico', e.target.value)}
          />
          {errors.historial_clinico && <p className="text-red-500 text-sm">{errors.historial_clinico}</p>}
        </div>

        <div>
          <label className="block font-medium">Notas</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={data.notas}
            onChange={(e) => setData('notas', e.target.value)}
          />
          {errors.notas && <p className="text-red-500 text-sm">{errors.notas}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={processing}
        >
          Guardar Paciente
        </button>
      </form>
    </AdminLayout>
  );
}
