import { useEffect, useState } from "react";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    "https://street-x-basketball-full-stack.onrender.com";

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_BASE_URL}/api/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {

        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setOrders([]);
      })
      .finally(() => setLoading(false));
  }, [API_BASE_URL]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "ไม่สามารถอัปเดตสถานะได้");
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );

      alert("อัปเดตสถานะเรียบร้อยแล้ว!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading)
    return (
      <div className="text-white p-6 text-center">
        กำลังโหลดรายการสั่งซื้อ...
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white uppercase tracking-wider mb-6">
        จัดการคำสั่งซื้อ (Orders)
      </h1>

      <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
        <table className="w-full text-left text-neutral-300 text-sm">
          <thead className="bg-neutral-800 text-white uppercase text-xs">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">User ID</th>
              <th className="p-4">ยอดรวม</th>
              <th className="p-4">สถานะ</th>
              <th className="p-4">วันที่สั่งซื้อ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {!Array.isArray(orders) || orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-neutral-500">
                  ยังไม่มีรายการคำสั่งซื้อในระบบ
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-neutral-800/50">
                  <td className="p-4 font-bold text-white">#{order.id}</td>
                  <td className="p-4">{order.user_id || "ลูกค้าทั่วไป"}</td>
                  <td className="p-4 text-orange-400 font-bold">
                    ฿{Number(order.total_price || 0).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className={`border px-2.5 py-1 rounded text-xs focus:outline-none bg-neutral-900 cursor-pointer font-medium ${
                        order.status === "completed"
                          ? "text-emerald-400 border-emerald-500/40"
                          : order.status === "shipped"
                          ? "text-sky-400 border-sky-500/40"
                          : order.status === "cancelled"
                          ? "text-rose-400 border-rose-500/40"
                          : "text-amber-400 border-amber-500/40"
                      }`}
                    >
                      <option
                        value="pending"
                        className="bg-neutral-900 text-amber-400"
                      >
                        pending
                      </option>
                      <option
                        value="shipped"
                        className="bg-neutral-900 text-sky-400"
                      >
                        shipped
                      </option>
                      <option
                        value="completed"
                        className="bg-neutral-900 text-emerald-400"
                      >
                        completed
                      </option>
                      <option
                        value="cancelled"
                        className="bg-neutral-900 text-rose-400"
                      >
                        cancelled
                      </option>
                    </select>
                  </td>
                  <td className="p-4 text-xs text-neutral-400">
                    {order.created_at
                      ? new Date(order.created_at).toLocaleString("th-TH")
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}