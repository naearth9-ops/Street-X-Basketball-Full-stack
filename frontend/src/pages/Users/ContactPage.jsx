import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 container mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-2">
        CONTACT US
      </h1>
      <p className="text-center text-zinc-400 mb-12">
        มีข้อสงสัยเกี่ยวกับสินค้าหรือคำสั่งซื้อ ติดต่อทีมงาน Street X ได้ตลอดเวลา
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6 bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 text-white">ช่องทางการติดต่อ</h2>

          <div className="flex items-start gap-4">
            <span className="text-2xl bg-zinc-800 p-3 rounded-xl"></span>
            <div>
              <h3 className="font-semibold">ที่อยู่หน้าร้าน</h3>
              <p className="text-zinc-400 text-sm mt-1">
                123 ถนนบาสเกตบอล แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl bg-zinc-800 p-3 rounded-xl"></span>
            <div>
              <h3 className="font-semibold">โทรศัพท์ / Line</h3>
              <p className="text-zinc-400 text-sm mt-1">081-234-5678</p>
              <p className="text-green-400 text-sm">Line ID: @streetxbasketball</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl bg-zinc-800 p-3 rounded-xl"></span>
            <div>
              <h3 className="font-semibold">อีเมล</h3>
              <p className="text-zinc-400 text-sm mt-1">support@streetxbasketball.com</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-6 text-white">ส่งข้อความถึงเรา</h2>

          {submitted && (
            <div className="bg-green-500/10 border border-green-500/50 text-green-400 text-sm p-3 rounded-xl mb-4 text-center">
              ✅ ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">ชื่อ-นามสกุล</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 text-sm"
                placeholder="สมชาย สายลุย"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">อีเมลหรือเบอร์โทร</label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 text-sm"
                placeholder="example@email.com หรือ 08X-XXX-XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">ข้อความ</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 text-sm resize-none"
                placeholder="พิมพ์ข้อความที่นี่..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;