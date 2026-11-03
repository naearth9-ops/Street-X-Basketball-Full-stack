import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & About*/}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black italic tracking-wider text-white">
                STREET <span className="text-orange-500">X</span>
              </span>
              <span className="text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded">
                BASKETBALL
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              ศูนย์รวมอุปกรณ์บาสเกตบอลสายสตรีทระดับพรีเมียม สั่งซื้อรองเท้าและอุปกรณ์การแข่งแท้ 100% จากแบรนด์ระดับโลกเพื่อสายดังก์สายลุยทุกคน
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-orange-400 hover:border-orange-500/50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://web.facebook.com/" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-orange-400 hover:border-orange-500/50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-orange-400 hover:border-orange-500/50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
              CATEGORIES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#categories" className="hover:text-orange-400 transition-colors">Signature Kicks</a></li>
              <li><a href="#categories" className="hover:text-orange-400 transition-colors">Street Apparel</a></li>
              <li><a href="#categories" className="hover:text-orange-400 transition-colors">Pro Basketballs</a></li>
              <li><a href="#categories" className="hover:text-orange-400 transition-colors">Accessories & Gear</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://www.size.ly/calculator/shoe-size-conversion-calculator" className="hover:text-orange-400 transition-colors">Size Guide</a></li>
              <li><a href="/#features" className="hover:text-orange-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
              JOIN THE SQUAD
            </h4>
            <p className="text-xs text-neutral-400 mb-3">
              รับข่าวสารสินค้าดร็อปใหม่และโค้ดส่วนลด 10%
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="อีเมลของคุณ..."
                className="w-full bg-neutral-900 border border-neutral-800 text-xs px-3.5 py-2.5 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all shadow-lg shadow-orange-500/10"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© 2026 STREET X BASKETBALL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}