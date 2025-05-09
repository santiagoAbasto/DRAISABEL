import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/TailAdminLayout';

export default function Create({ pacientes, tratamientos }) {
  const { data, setData, post, processing, errors } = useForm({
    paciente_id: '',
    tratamiento_id: '',
    fecha: '',
    profesional: '',
    observaciones: '',
    resultado: '',
    foto_antes: null,
    foto_despues: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setData(name, type === 'file' ? files[0] : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('admin.sesiones.store'), {
      forceFormData: true
    });
  };

  return (
    <AdminLayout title="Registrar Sesión">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block font-medium">Paciente</label>
          <select name="paciente_id" className="w-full border rounded px-3 py-2" value={data.paciente_id} onChange={handleChange}>
            <option value="">-- Seleccionar --</option>
            {pacientes.map(p => (
              <option key={p.id} value={p.id}>{p.nombre_completo}</option>
            ))}
          </select>
          {errors.paciente_id && <p className="text-red-500 text-sm">{errors.paciente_id}</p>}
        </div>

        <div>
          <label className="block font-medium">Tratamiento</label>
          <select name="tratamiento_id" className="w-full border rounded px-3 py-2" value={data.tratamiento_id} onChange={handleChange}>
            <option value="">-- Seleccionar --</option>
            {tratamientos.map(t => (
              <option key={t.id} value={t.id}>{t.nombre}</option>
            ))}
          </select>
          {errors.tratamiento_id && <p className="text-red-500 text-sm">{errors.tratamiento_id}</p>}
        </div>

        <div>
          <label className="block font-medium">Fecha</label>
          <input type="date" name="fecha" className="w-full border rounded px-3 py-2" value={data.fecha} onChange={handleChange} />
          {errors.fecha && <p className="text-red-500 text-sm">{errors.fecha}</p>}
        </div>

        <div>
          <label className="block font-medium">Profesional</label>
          <input type="text" name="profesional" className="w-full border rounded px-3 py-2" value={data.profesional} onChange={handleChange} />
          {errors.profesional && <p className="text-red-500 text-sm">{errors.profesional}</p>}
        </div>

        <div>
          <label className="block font-medium">Observaciones</label>
          <textarea name="observaciones" className="w-full border rounded px-3 py-2" value={data.observaciones} onChange={handleChange} />
          {errors.observaciones && <p className="text-red-500 text-sm">{errors.observaciones}</p>}
        </div>

        <div>
          <label className="block font-medium">Resultado</label>
          <textarea name="resultado" className="w-full border rounded px-3 py-2" value={data.resultado} onChange={handleChange} />
          {errors.resultado && <p className="text-red-500 text-sm">{errors.resultado}</p>}
        </div>

        <div>
          <label className="block font-medium">Foto Antes</label>
          <input type="file" name="foto_antes" accept="image/*" onChange={handleChange} />
          {errors.foto_antes && <p className="text-red-500 text-sm">{errors.foto_antes}</p>}
        </div>

        <div>
          <label className="block font-medium">Foto Después</label>
          <input type="file" name="foto_despues" accept="image/*" onChange={handleChange} />
          {errors.foto_despues && <p className="text-red-500 text-sm">{errors.foto_despues}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={processing}
        >
          Registrar Sesión
        </button>
      </form>
    </AdminLayout>
  );
}
