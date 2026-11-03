import { useEffect, useState } from 'react';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-white p-6 text-center">กำลังโหลดรายการสั่งซื้อ...</div>;

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
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-neutral-800/50">
                <td className="p-4 font-bold text-white">#{order.id}</td>
                <td className="p-4">{order.user_id || 'ลูกค้าทั่วไป'}</td>
                <td className="p-4 text-orange-400 font-bold">฿{Number(order.total_price).toLocaleString()}</td>
                <td className="p-4">
                  <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded text-xs">
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-xs text-neutral-400">
                  {new Date(order.created_at).toLocaleString('th-TH')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}