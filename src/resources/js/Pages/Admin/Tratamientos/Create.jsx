import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/TailAdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    nombre: '',
    categoria: '',
    precio: '',
    cantidad_sesiones: '',
    observaciones: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.tratamientos.store'));
  };

  return (
    <AdminLayout>
      <div className="container py-4">
        <h2 className="mb-4 h4 fw-bold text-primary">
          <i className="fas fa-plus-circle me-2"></i> Nuevo Tratamiento
        </h2>

        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
          <div className="row g-3">
            {/* Nombre */}
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                value={data.nombre}
                onChange={(e) => setData('nombre', e.target.value)}
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>

            {/* Categoría */}
            <div className="col-md-6">
              <label className="form-label">Categoría</label>
              <input
                type="text"
                className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
                value={data.categoria}
                onChange={(e) => setData('categoria', e.target.value)}
              />
              {errors.categoria && <div className="invalid-feedback">{errors.categoria}</div>}
            </div>

            {/* Precio */}
            <div className="col-md-6">
              <label className="form-label">Precio (CLP)</label>
              <input
                type="number"
                step="0.01"
                className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
                value={data.precio}
                onChange={(e) => setData('precio', e.target.value)}
              />
              {errors.precio && <div className="invalid-feedback">{errors.precio}</div>}
            </div>

            {/* Cantidad de Sesiones */}
            <div className="col-md-6">
              <label className="form-label">Cantidad de Sesiones</label>
              <input
                type="number"
                className={`form-control ${errors.cantidad_sesiones ? 'is-invalid' : ''}`}
                value={data.cantidad_sesiones}
                onChange={(e) => setData('cantidad_sesiones', e.target.value)}
              />
              {errors.cantidad_sesiones && <div className="invalid-feedback">{errors.cantidad_sesiones}</div>}
            </div>

            {/* Observaciones */}
            <div className="col-12">
              <label className="form-label">Observaciones</label>
              <textarea
                rows="4"
                className={`form-control ${errors.observaciones ? 'is-invalid' : ''}`}
                value={data.observaciones}
                onChange={(e) => setData('observaciones', e.target.value)}
              ></textarea>
              {errors.observaciones && <div className="invalid-feedback">{errors.observaciones}</div>}
            </div>

            {/* Botón */}
            <div className="col-12 text-end">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={processing}
              >
                <i className="fas fa-save me-2"></i> Guardar Tratamiento
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
