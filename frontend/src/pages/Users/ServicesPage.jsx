import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "บริการอัดลม & เช็คลูกบาส",
      desc: "บริการเติมลม และตรวจเช็ครั่วซึมลูกบาสเกตบอลฟรีสำหรับลูกค้า Street X"
    },
    {
      title: "Custom เสื้อแข่งบาสเกตบอล",
      desc: "ออกแบบและพิมพ์ลายชุดแข่งทีมบาสแบบครบวงจร พร้อมโลโก้และเบอร์นักกีฬา"
    },
    {
      title: "คำแนะนำการเลือกไซส์รองเท้า",
      desc: "ทีมงานพร้อมให้คำปรึกษาทรงรองเท้า (Wide/Narrow fit) ให้เข้ากับสไตล์การเล่น"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 container mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-2">
        OUR SERVICES
      </h1>
      <p className="text-center text-zinc-400 mb-12">
        บริการครบวงจรเพื่อคนรักบาสเกตบอลโดยเฉพาะ
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition-all">
            <div className="text-5xl mb-4">{srv.icon}</div>
            <h3 className="text-xl font-bold mb-2">{srv.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;