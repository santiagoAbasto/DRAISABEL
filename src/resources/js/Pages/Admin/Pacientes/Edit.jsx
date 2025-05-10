import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/TailAdminLayout';

export default function Edit({ paciente }) {
  const { data, setData, put, processing, errors } = useForm({
    nombre_completo: paciente.nombre_completo || '',
    rut: paciente.rut || '',
    telefono: paciente.telefono || '',
    correo: paciente.correo || '',
    edad: paciente.edad || '',
    sexo: paciente.sexo || '',
    alergias: paciente.alergias || '',
    historial_clinico: paciente.historial_clinico || '',
    notas: paciente.notas || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('admin.pacientes.update', paciente.id));
  };

  return (
    <AdminLayout title="Editar Paciente">
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
          <label className="block font-medium">Edad</label>
          <input
            type="number"
            min="0"
            max="120"
            className="w-full border rounded px-3 py-2"
            value={data.edad}
            onChange={(e) => setData('edad', e.target.value)}
          />
          {errors.edad && <p className="text-red-500 text-sm">{errors.edad}</p>}
        </div>

        <div>
          <label className="block font-medium">Sexo</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={data.sexo}
            onChange={(e) => setData('sexo', e.target.value)}
          >
            <option value="">-- Seleccionar --</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
          {errors.sexo && <p className="text-red-500 text-sm">{errors.sexo}</p>}
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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={processing}
        >
          Actualizar Paciente
        </button>
      </form>
    </AdminLayout>
  );
}
