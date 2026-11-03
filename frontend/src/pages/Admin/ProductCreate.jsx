import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCreate() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [imageFile, setImageFile] = useState(null); 
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    price: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("category_id", formData.category_id);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("description", formData.description);

    if (imageFile) {
      data.append("image", imageFile);
    }

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, //แนบ JWT
        },
        body: data, 
      });

      if (!res.ok) throw new Error("Failed to create product");

      alert("เพิ่มสินค้าสำเร็จ!");
      navigate("/admin/products");
    } catch (err) {
      alert("เกิดข้อผิดพลาดในการเพิ่มสินค้า");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white uppercase tracking-wider mb-6">
        เพิ่มสินค้าใหม่ (Street X)
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1">
            ชื่อสินค้า
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black border border-neutral-700 rounded p-2 text-white focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              หมวดหมู่
            </label>
            <select
              name="category_id"
              required
              value={formData.category_id}
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded p-2 text-white focus:outline-none focus:border-orange-500"
            >
              <option value="">-- เลือกหมวดหมู่ --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              ราคา (บาท)
            </label>
            <input
              type="number"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded p-2 text-white focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              จำนวนสต็อก
            </label>
            <input
              type="number"
              name="stock"
              required
              value={formData.stock}
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded p-2 text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              อัปโหลดรูปภาพสินค้า
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full bg-black border border-neutral-700 rounded p-1.5 text-white text-sm focus:outline-none focus:border-orange-500 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-orange-500 file:text-black hover:file:bg-orange-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1">
            รายละเอียดสินค้า
          </label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-black border border-neutral-700 rounded p-2 text-white focus:outline-none focus:border-orange-500"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="bg-neutral-700 hover:bg-neutral-600 text-white font-semibold px-4 py-2 rounded"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-4 py-2 rounded uppercase"
          >
            บันทึกสินค้า
          </button>
        </div>
      </form>
    </div>
  );
}