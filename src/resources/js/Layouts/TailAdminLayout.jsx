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

  const currentPath = window.location.pathname;

  const handleLogout = (e) => {
    e.preventDefault();
    router.post(route('logout'));
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r hidden md:block">
        <div className="p-5 text-xl font-extrabold text-indigo-600 border-b">
          <i className="fas fa-spa mr-2"></i> Admin
        </div>
        <nav className="px-4 pt-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all font-medium
                ${
                  currentPath.startsWith(item.href)
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
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
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-indigo-600 hidden sm:block">
              Panel de Administración
            </h1>
            <div className="relative w-64 hidden sm:block">
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <span className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">🔍</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(auth.user.name)}&background=4F46E5&color=fff`}
              alt="avatar"
              className="w-9 h-9 rounded-full shadow-sm ring-2 ring-indigo-500"
            />
            <div className="text-sm text-gray-700 hidden sm:block font-medium">{auth.user.name}</div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-600 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
