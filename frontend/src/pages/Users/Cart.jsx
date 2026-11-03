import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-black min-h-screen text-white p-6 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">ตะกร้าสินค้าของคุณยังว่างเปล่า</h2>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded uppercase"
        >
          กลับไปเลือกซื้อสินค้า
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold uppercase text-orange-500">ตะกร้าสินค้าของคุณ</h1>
          <button
            onClick={clearCart}
            className="text-xs text-neutral-400 hover:text-red-400 underline"
          >
            ล้างตะกร้าทั้งหมด
          </button>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 space-y-4 mb-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-neutral-800 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <img
                  src={
                    item.image_url
                      ? `http://localhost:5000${item.image_url}`
                      : 'https://via.placeholder.com/60'
                  }
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded border border-neutral-700"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-orange-400 text-sm font-semibold">
                    ฿{Number(item.price).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-neutral-700 rounded bg-black">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 hover:bg-neutral-800 text-orange-500 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 hover:bg-neutral-800 text-orange-500 font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-400 text-sm font-semibold"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-neutral-400">ราคารวมทั้งหมด: </span>
            <span className="text-2xl font-black text-orange-500 ml-2">
              ฿{totalPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-4">
            <Link
              to="/"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-4 py-2 rounded"
            >
              เลือกสินค้าเพิ่ม
            </Link>
            <button
              onClick={() => alert('เข้าสู่ขั้นตอนการชำระเงิน')}
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded uppercase"
            >
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}