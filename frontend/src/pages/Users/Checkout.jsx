import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleConfirmOrder = async () => {
    if (cart.length === 0) {
      alert('ไม่มีสินค้าในตะกร้า');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id || null,
          total_price: totalPrice,
          items: cart,
        }),
      });

      if (!res.ok) throw new Error('Order failed');

      alert('สั่งซื้อสินค้าเรียบร้อยแล้ว! ขอบคุณที่ใช้บริการ Street X Basketball');
      clearCart();
      navigate('/');
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการสั่งซื้อ');
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 p-6 rounded-lg space-y-6">
        <h1 className="text-2xl font-black text-orange-500 uppercase">สรุปและยืนยันคำสั่งซื้อ</h1>

        <div className="space-y-3 border-b border-neutral-800 pb-4">
          <h3 className="text-sm font-semibold text-neutral-400">รายการสินค้าในตะกร้า</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.name} x {item.quantity}</span>
              <span className="font-bold text-orange-400">฿{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-lg">
          <span>ยอดชำระทั้งสิ้น:</span>
          <span className="text-2xl font-black text-orange-500">฿{totalPrice.toLocaleString()}</span>
        </div>

        <div className="flex gap-4 pt-2">
          <button
            onClick={() => navigate('/cart')}
            className="w-1/2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 rounded"
          >
            ย้อนกลับไปตะกร้า
          </button>
          <button
            onClick={handleConfirmOrder}
            className="w-1/2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded uppercase"
          >
            ยืนยันการสั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
}