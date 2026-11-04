import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    categoryId: 2, 
    name: "UA Curry 11",
    category: "Basketball Shoes",
    price: "฿6,990",
    badge: "BEST SELLER",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bNKcQ9A2i6CTrDRIk2x1eDSJoArQz-mu_xgy45F2-mXWy-Zdt-pSFjY&s=10",
  },
  {
    id: 2,
    categoryId: 2, 
    name: "Li-Ning Way of Wade 11",
    category: "Basketball Shoes",
    price: "฿4,640",
    badge: "HOT DROP",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULPwYSwwPWXRTllbA2zB3x8qXiQAqNBq-L6PoYCfh30AQUHk1ZSTus6CI&s=10",
  },
  {
    id: 3,
    categoryId: 3, 
    name: "2024 All-Star Street Jersey",
    category: "Apparel",
    price: "฿1,290",
    badge: "NEW",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHxsyUt9QHPwL2buRCmi-XBAhi9ZD1gswx5c9URTQkLTfRP8kFBhmLzmi&s=10",
  },
  {
    id: 4,
    categoryId: 1, 
    name: "Street X Official Game Ball",
    category: "Equipment",
    price: "฿1,590",
    badge: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600",
  },
];

export default function BestSellers() {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate('/shop');
  };

  const handleCardClick = (categoryId) => {
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <section id="bestsellers" className="py-20 bg-neutral-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              TOP RATED PRODUCTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mt-1">
              BEST <span className="text-orange-500">SELLERS</span>
            </h2>
          </div>
          <button 
            onClick={handleViewAll}
            className="mt-4 md:mt-0 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            VIEW ALL PRODUCTS &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.categoryId)}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                  {item.badge}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-black italic text-white group-hover:text-orange-400 transition-colors mt-1">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-800">
                  <span className="text-xl font-black text-yellow-400 font-mono">
                    {item.price}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleCardClick(item.categoryId);
                    }}
                    className="bg-neutral-800 hover:bg-orange-500 hover:text-black text-white p-2.5 rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}