import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/TailAdminLayout';
import { useEffect, useState } from 'react';

export default function Create({ pacientes, tratamientos }) {
  const [total, setTotal] = useState(0);

  const { data, setData, post, processing, errors } = useForm({
    paciente_id: '',
    tratamientos: [], // [{ id: 1, cantidad: 2 }]
  });

  const agregarTratamiento = (id) => {
    if (!data.tratamientos.find(t => t.id === id)) {
      setData('tratamientos', [...data.tratamientos, { id, cantidad: 1 }]);
    }
  };

  const cambiarCantidad = (id, cantidad) => {
    setData('tratamientos', data.tratamientos.map(t =>
      t.id === id ? { ...t, cantidad: parseInt(cantidad) } : t
    ));
  };

  const eliminarTratamiento = (id) => {
    setData('tratamientos', data.tratamientos.filter(t => t.id !== id));
  };

  useEffect(() => {
    const totalCalculado = data.tratamientos.reduce((acc, item) => {
      const t = tratamientos.find(tr => tr.id === item.id);
      return acc + (t ? t.precio * item.cantidad : 0);
    }, 0);
    setTotal(totalCalculado);
  }, [data.tratamientos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.cotizaciones.store'));
  };

  return (
    <AdminLayout title="Nueva Cotización">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-3xl mx-auto space-y-6">
        <div>
          <label className="block font-medium">Paciente</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={data.paciente_id}
            onChange={(e) => setData('paciente_id', e.target.value)}
          >
            <option value="">-- Selecciona --</option>
            {pacientes.map((p) => (
              <option key={p.id} value={p.id}>{p.nombre_completo}</option>
            ))}
          </select>
          {errors.paciente_id && <p className="text-red-500 text-sm">{errors.paciente_id}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Agregar Tratamientos</label>
          <div className="grid grid-cols-2 gap-2">
            {tratamientos.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => agregarTratamiento(t.id)}
                className="bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded"
              >
                {t.nombre} (${t.precio})
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Tratamientos Seleccionados</h3>
          {data.tratamientos.length === 0 ? (
            <p className="text-gray-500">No se han agregado tratamientos.</p>
          ) : (
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Nombre</th>
                  <th className="p-2">Cantidad</th>
                  <th className="p-2">Subtotal</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {data.tratamientos.map(item => {
                  const t = tratamientos.find(tr => tr.id === item.id);
                  return (
                    <tr key={item.id} className="border-t">
                      <td className="p-2">{t?.nombre}</td>
                      <td className="p-2">
                        <input
                          type="number"
                          min="1"
                          className="w-16 border rounded px-2 py-1"
                          value={item.cantidad}
                          onChange={(e) => cambiarCantidad(item.id, e.target.value)}
                        />
                      </td>
                      <td className="p-2">
                        ${(t?.precio * item.cantidad).toFixed(2)}
                      </td>
                      <td className="p-2 text-right">
                        <button
                          type="button"
                          onClick={() => eliminarTratamiento(item.id)}
                          className="text-red-600 hover:underline"
                        >
                          Quitar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="text-right font-bold text-xl">
          Total: ${total.toFixed(2)}
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            disabled={processing}
          >
            Generar y Enviar Cotización
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
