import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://street-x-basketball-full-stack.onrender.com";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "เกิดข้อผิดพลาดในการลงทะเบียน");
      }

      login(data.user, data.token);

      if (data.user?.role === "admin") {
        navigate("/admin/products");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", color: "#fff", backgroundColor: "#121212", borderRadius: "8px" }}>
      <h2 style={{ textTransform: "uppercase", marginBottom: "20px", textAlign: "center" }}>สมัครสมาชิก</h2>
      {error && <p style={{ color: "#ff4d4d", marginBottom: "15px", textAlign: "center" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #333", backgroundColor: "#222", color: "#fff" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #333", backgroundColor: "#222", color: "#fff" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #333", backgroundColor: "#222", color: "#fff" }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "12px", backgroundColor: "#ff6600", color: "#fff", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}