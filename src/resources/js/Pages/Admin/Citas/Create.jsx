import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/TailAdminLayout';

export default function Create({ pacientes, tratamientos }) {
  const { data, setData, post, processing, errors } = useForm({
    paciente_id: '',
    tratamiento_id: '',
    profesional: '',
    sala: '',
    fecha_hora: '',
    estado: 'pendiente',
    observaciones: '',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.citas.store'));
  };

  return (
    <AdminLayout title="Agendar Nueva Cita">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block font-medium">Paciente</label>
          <select name="paciente_id" value={data.paciente_id} onChange={handleChange} className="w-full border px-3 py-2 rounded">
            <option value="">-- Seleccionar --</option>
            {pacientes.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre_completo}</option>
            ))}
          </select>
          {errors.paciente_id && <p className="text-red-500 text-sm">{errors.paciente_id}</p>}
        </div>

        <div>
          <label className="block font-medium">Tratamiento</label>
          <select name="tratamiento_id" value={data.tratamiento_id} onChange={handleChange} className="w-full border px-3 py-2 rounded">
            <option value="">-- Seleccionar --</option>
            {tratamientos.map((t) => (
              <option key={t.id} value={t.id}>{t.nombre}</option>
            ))}
          </select>
          {errors.tratamiento_id && <p className="text-red-500 text-sm">{errors.tratamiento_id}</p>}
        </div>

        <div>
          <label className="block font-medium">Profesional</label>
          <input type="text" name="profesional" value={data.profesional} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          {errors.profesional && <p className="text-red-500 text-sm">{errors.profesional}</p>}
        </div>

        <div>
          <label className="block font-medium">Sala / Cabina</label>
          <input type="text" name="sala" value={data.sala} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          {errors.sala && <p className="text-red-500 text-sm">{errors.sala}</p>}
        </div>

        <div>
          <label className="block font-medium">Fecha y hora</label>
          <input type="datetime-local" name="fecha_hora" value={data.fecha_hora} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          {errors.fecha_hora && <p className="text-red-500 text-sm">{errors.fecha_hora}</p>}
        </div>

        <div>
          <label className="block font-medium">Estado</label>
          <select name="estado" value={data.estado} onChange={handleChange} className="w-full border px-3 py-2 rounded">
            <option value="pendiente">Pendiente</option>
            <option value="confirmada">Confirmada</option>
            <option value="cancelada">Cancelada</option>
          </select>
          {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
        </div>

        <div>
          <label className="block font-medium">Observaciones</label>
          <textarea name="observaciones" value={data.observaciones} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          {errors.observaciones && <p className="text-red-500 text-sm">{errors.observaciones}</p>}
        </div>

        <div className="text-right">
          <button type="submit" disabled={processing} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Guardar Cita
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
