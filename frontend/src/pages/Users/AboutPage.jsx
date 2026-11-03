import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 container mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-black text-orange-500 mb-4 tracking-wider">
          ABOUT STREET X
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          ศูนย์รวมอุปกรณ์บาสเกตบอลชั้นนำ ที่สร้างขึ้นโดยผู้เล่น เพื่อผู้เล่นอย่างแท้จริง
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">
            เรื่องราวของเรา
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Street X Basketball ก่อตั้งขึ้นเพื่อเป็นจุดนัดพบของคนที่รักในกีฬาสตรีทบาสเกตบอล เราเชื่อว่าอุปกรณ์ที่ดีไม่เพียงแต่ช่วยเพิ่มประสิทธิภาพในการเล่น แต่ยังสะท้อนถึงสไตล์และตัวตนของผู้เล่นบนสนามอีกด้วย
          </p>
          <p className="text-zinc-400 leading-relaxed">
            เราคัดสรรสินค้ารองเท้าบาส ลูกบาสเกตบอลมาตรฐานแข่งขัน อุปกรณ์ซัพพอร์ต และชุดแข่งสตรีทแวร์จากแบรนด์ระดับโลก เพื่อให้มั่นใจว่าลูกค้าทุกคนได้รับสินค้าคุณภาพดีที่สุด
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
            <span className="text-3xl"></span>
            <h3 className="font-bold text-white mt-3 text-lg">สินค้าแท้ 100%</h3>
            <p className="text-xs text-zinc-400 mt-1">รับประกันคุณภาพจากแบรนด์ชั้นนำ</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
            <span className="text-3xl"></span>
            <h3 className="font-bold text-white mt-3 text-lg">จัดส่งรวดเร็ว</h3>
            <p className="text-xs text-zinc-400 mt-1">ส่งตรงถึงหน้าบ้านอย่างปลอดภัย</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
            <span className="text-3xl"></span>
            <h3 className="font-bold text-white mt-3 text-lg">บริการเป็นกันเอง</h3>
            <p className="text-xs text-zinc-400 mt-1">ให้คำปรึกษาเรื่องไซส์และอุปกรณ์</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
            <span className="text-3xl"></span>
            <h3 className="font-bold text-white mt-3 text-lg">ราคายุติธรรม</h3>
            <p className="text-xs text-zinc-400 mt-1">การันตีความคุ้มค่าทุกการสั่งซื้อ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;