import AdminLayout from '@/Layouts/TailAdminLayout';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendario({ citas }) {
  const eventos = citas.map(c => ({
    id: c.id,
    title: `${c.paciente?.nombre_completo ?? 'Paciente'} - ${c.tratamiento?.nombre ?? ''}`,
    start: c.fecha_hora,
    extendedProps: {
      profesional: c.profesional,
      sala: c.sala,
      estado: c.estado
    }
  }));

  return (
    <AdminLayout title="Calendario de Citas">
      <div className="bg-white p-4 rounded shadow">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          locale="es"
          events={eventos}
          height="auto"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        />
      </div>
    </AdminLayout>
  );
}
