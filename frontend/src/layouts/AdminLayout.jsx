import { Link, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-64 bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-orange-500 tracking-wider">
            STREET X
          </h1>
          <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">
            Admin Management
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          <Link
            to="/admin/products"
            className="block px-4 py-3 rounded-lg bg-neutral-800 text-orange-400 font-semibold border border-neutral-700 hover:bg-neutral-700 transition-colors"
          >
             จัดการสินค้า (Products)
          </Link>
          <Link
            to="/"
            className="block px-4 py-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
             กลับหน้าหลักร้านค้า
          </Link>
        </nav>

        <div className="pt-6 border-t border-neutral-800 text-xs text-neutral-500">
          Logged in as: <span className="text-neutral-300 font-medium">Admin</span>
        </div>
      </aside>


      <main className="flex-1 p-8 bg-neutral-950 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}