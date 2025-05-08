import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import {
  HomeIcon,
  UserIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function AdminLayout({ children }) {
  const { auth } = usePage().props;

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: HomeIcon },
    { name: 'Pacientes', href: '/pacientes', icon: UserIcon },
    { name: 'Tratamientos', href: '/tratamientos', icon: ClipboardDocumentCheckIcon },
    { name: 'Agenda', href: '/agenda', icon: CalendarDaysIcon },
    { name: 'Cotizaciones', href: '/cotizaciones', icon: DocumentTextIcon },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    router.post(route('logout'));
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r hidden md:block">
        <div className="p-6 font-bold text-xl border-b border-gray-200">
          Panel de Administración
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 transition ${
                window.location.pathname === item.href ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              <item.icon className="h-5 w-5 text-indigo-600" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-3 flex justify-between items-center border-b">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold hidden sm:block">Panel de Administración</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-1.5 rounded border border-gray-300 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <span className="absolute left-3 top-1.5 text-gray-400">🔍</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(auth.user.name)}&background=4F46E5&color=fff`}
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm text-gray-700 hidden sm:block">{auth.user.name}</div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
