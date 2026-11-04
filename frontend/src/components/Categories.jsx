import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    categoryId: 2, 
    title: 'SIGNATURE KICKS',
    subtitle: 'รองเท้าบาสระดับโปร UA & Li-Ning',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GnguMc0YBL6D_BA8946MW8m2a6KuLl41SLYJg19ZolFajYGXYK8N5Op7&s=10',
    tag: 'HOT DROP',
    gridSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    categoryId: 3, 
    title: 'STREET APPAREL',
    subtitle: 'เสื้อบาสและกางเกงสตรีท',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcOLQFqgGtGNxB-oDQaHJpBAfafNDcA8nDe56CAORhP5Czjn8MKNB6gYr&s=10',
    tag: 'NEW ARRIVAL',
    gridSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    categoryId: 1, 
    title: 'PRO BASKETBALLS',
    subtitle: 'ลูกบาสเกตบอลสำหรับฝึกซ้อมและแข่งขัน',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQegg-6I1Y1BAGBR9_BpiM_J1PSWqKbeNrmvriHS9UidviukwQ22mXEM&s=10',
    tag: 'GEAR',
    gridSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    categoryId: 4, 
    title: 'ACCESSORIES & PROTECTION',
    subtitle: 'อุปกรณ์ซัพพอร์ต ถุงเท้าบาส และอุปกรณ์ป้องกัน',
    image: 'https://contents.mediadecathlon.com/p2569599/k$6d62e53bda8c86710057804add561515/%E0%B8%96%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B9%81%E0%B8%9E%E0%B9%87%E0%B8%84%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-8828293.jpg?f=1920x0&format=auto',
    tag: 'ESSENTIALS',
    gridSpan: 'md:col-span-2 lg:col-span-2',
  },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleCardClick = (categoryId) => {
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <section id="categories" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              BROWSE BY CATEGORY
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mt-1">
              CHOOSE YOUR <span className="text-orange-500">ARMOR</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm mt-4 md:mt-0">
            เลือกช้อปอุปกรณ์บาสเกตบอลสายสตรีทที่ผ่านการคัดสรรมาเพื่อสายลุยโดยเฉพาะ
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.categoryId}
              onClick={() => handleCardClick(cat.categoryId)}
              className={`group relative h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer ${cat.gridSpan}`}
            >

              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

             
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-black font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black italic tracking-wide group-hover:text-orange-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">{cat.subtitle}</p>
                </div>

                
                <div className="w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all">
                  <svg
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}