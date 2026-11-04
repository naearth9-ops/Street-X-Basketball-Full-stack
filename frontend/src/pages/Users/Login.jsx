import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    "https://street-x-basketball-full-stack.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");

      login(data.user, data.token);
      alert(`เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับคุณ ${data.user.username}`);

      if (data.user.role === "admin") {
        navigate("/admin/products");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-black italic text-center uppercase tracking-wider mb-6">
          LOG <span className="text-orange-500">IN</span>
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-neutral-400">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500"
              placeholder="StreetXBasketball@email.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-neutral-400">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase py-3 rounded-lg transition-all mt-6 cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="text-xs text-neutral-400 text-center mt-6">
          ยังไม่มีบัญชีผู้ใช้?{" "}
          <Link
            to="/register"
            className="text-orange-500 hover:underline font-bold"
          >
            สมัครสมาชิกที่นี่
          </Link>
        </p>
      </div>
    </div>
  );
}