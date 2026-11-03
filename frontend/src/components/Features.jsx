import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-16 bg-neutral-900 border-t border-b border-neutral-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/80">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="font-extrabold italic text-lg uppercase tracking-wide">100% AUTHENTIC</h4>
            <p className="text-xs text-neutral-400">การันตีของแท้ 100% จากแบรนด์ Under Armour & Li-Ning</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/80">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-extrabold italic text-lg uppercase tracking-wide">EXPRESS DELIVERY</h4>
            <p className="text-xs text-neutral-400">จัดส่งด่วนพิเศษถึงมือภายใน 1-2 วันทำการ</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/80">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h4 className="font-extrabold italic text-lg uppercase tracking-wide">EASY RETURNS</h4>
            <p className="text-xs text-neutral-400">เปลี่ยนไซส์ได้ฟรีภายใน 7 วัน เปลี่ยนง่ายไม่ยุ่งยาก</p>
          </div>
        </div>

      </div>
    </section>
  );
}