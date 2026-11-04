import React, { useContext } from 'react'; 
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Loading Access...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    alert('คุณไม่มีสิทธิ์เข้าถึงหน้าระบบจัดการ (Admin)');
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}