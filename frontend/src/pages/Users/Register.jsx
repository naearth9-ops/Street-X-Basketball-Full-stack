const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://street-x-basketball-full-stack.onrender.com";

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

    if (data.user.role === "admin") {
      navigate("/admin/products");
    } else {
      navigate("/");
    }
  } catch (err) {
    setError(err.message);
  }
};
export default Register;