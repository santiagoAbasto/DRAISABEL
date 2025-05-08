import React from 'react';
import TailAdminLayout from '@/Layouts/TailAdminLayout';

export default function Dashboard() {
  return (
    <TailAdminLayout>
      <h2 className="text-2xl font-bold mb-4">Panel Principal</h2>
      <p>Desde aquí puedes controlar tu sistema del centro estético.</p>
    </TailAdminLayout>
  );
}
