import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom"; // 👈 1. Import useSearchParams
import { useCart } from "../../context/CartContext";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, totalItems } = useCart();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");

  useEffect(() => {
    setLoading(true);

    let url = "http://localhost:5000/api/products";
    if (categoryId) {
      url += `?category_id=${categoryId}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]); 

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/checkout");
  };

  if (loading)
    return <div className="text-white p-6 text-center">กำลังโหลดสินค้า...</div>;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-neutral-800 pb-4 gap-4">
        <div>
          <h1 className="text-3xl font-black text-orange-500 uppercase tracking-widest">
            STREET X BASKETBALL
          </h1>
          {categoryId && (
            <p className="text-xs text-neutral-400 mt-1">
              กำลังแสดงสินค้าเฉพาะหมวดหมู่ #{categoryId}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full text-orange-400 font-bold flex items-center gap-2 border border-neutral-700 text-sm"
          >
            🛒 ตะกร้าสินค้า
            <span className="bg-orange-500 text-black rounded-full px-2 py-0.5 text-xs font-black">
              {totalItems}
            </span>
          </Link>

          <Link
            to="/checkout"
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-full font-black text-sm uppercase transition-colors"
          >
             ชำระเงิน
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center text-neutral-500 py-12">
            ไม่พบสินค้าในหมวดหมู่นี้
          </div>
        ) : (
          products.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-orange-500 transition-colors group"
            >
              <div>
                <div className="w-full h-48 bg-neutral-800 overflow-hidden">
                  <img
                    src={(() => {
                      if (!item.image_url)
                        return "https://via.placeholder.com/300";

                      if (
                        item.image_url.startsWith("http://") ||
                        item.image_url.startsWith("https://")
                      ) {
                        return item.image_url;
                      }

                      if (item.image_url.startsWith("/uploads/")) {
                        return `http://localhost:5000${item.image_url}`;
                      }
                      return `http://localhost:5000/uploads/${item.image_url}`;
                    })()}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300";
                    }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-2">
                    {item.category_name || "Basketball"}
                  </p>
                  <p className="text-orange-400 font-black text-xl">
                    ฿{Number(item.price).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-orange-400 font-bold py-2 rounded uppercase text-sm border border-orange-500/30 transition-colors"
                >
                   เพิ่มลงตะกร้า
                </button>

                <button
                  onClick={() => handleBuyNow(item)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-2 rounded uppercase text-sm transition-colors"
                >
                   ซื้อทันที
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}