import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //ดึงสินค้าทั้งหมด
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ฟังก์ชันลบสินค้า
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("คุณต้องการลบสินค้านี้ใช่หรือไม่?");
    if (!isConfirmed) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.message ||
            data.error ||
            "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ในการลบสินค้า",
        );
      }

      alert("ลบสินค้าเรียบร้อยแล้ว!");
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="text-white p-6">กำลังโหลดข้อมูล...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
          รายการสินค้าทั้งหมด ({products.length})
        </h1>
        <Link
          to="/admin/products/create"
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-4 py-2 rounded uppercase transition-colors"
        >
          + เพิ่มสินค้าใหม่
        </Link>
      </div>

      <div className="overflow-x-auto bg-neutral-900 border border-neutral-800 rounded-lg">
        <table className="w-full text-left text-neutral-300">
          <thead className="bg-neutral-800 text-orange-500 uppercase text-xs">
            <tr>
              <th className="p-4">รูปภาพ</th>
              <th className="p-4">ชื่อสินค้า</th>
              <th className="p-4">หมวดหมู่</th>
              <th className="p-4">ราคา</th>
              <th className="p-4">สต็อก</th>
              <th className="p-4 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-sm">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-800/50">
                <td className="p-4">
                  <img
                    src={
                      item.image_url
                        ? `http://localhost:5000${item.image_url}`
                        : "https://via.placeholder.com/60"
                    }
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded border border-neutral-700"
                  />
                </td>
                <td className="p-4 font-semibold text-white">{item.name}</td>
                <td className="p-4 text-neutral-400">
                  {item.category_name || "-"}
                </td>
                <td className="p-4 text-orange-400 font-bold">
                  ฿{Number(item.price).toLocaleString()}
                </td>
                <td className="p-4">{item.stock} ชิ้น</td>
                <td className="p-4 text-center space-x-2">
                  <Link
                    to={`/admin/products/edit/${item.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold"
                  >
                    แก้ไข
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-semibold"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
