import React from "react";
import productsImg from "../assets/curry11.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-neutral-950 text-white overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ปุ่ม CTA*/}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag/Badge ด้านบน */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              New Collection 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none italic">
              Dominate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-white">
                The Street
              </span>{" "}
              <br />
              Court.
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              ยกระดับเกมการเล่นของคุณด้วยอุปกรณ์บาสเกตบอลและแฟชั่นสตรีทระดับพรีเมียม
              ออกแบบมาเพื่อความทนทาน พร้อมลุยได้ทุกสนาม
            </p>

            {/*ปุ่มCTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 group uppercase tracking-wider"
              >
                Shop Now
                <svg
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              {/* ปุ่มรอง ดูคอลเลกชัน */}
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-neutral-800 uppercase tracking-wider"
              >
                Explore Gear
              </a>
            </div>

            {/* Stats สถิติตัวเลขสั้นๆ */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800/80 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  100%
                </p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Authentic
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  24 Hours
                </p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Fast Delivery
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  20k+
                </p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Users Trust
                </p>
              </div>
            </div>
          </div>

          {/*ฝั่งขวา Mockup สินค้าไฮไลต์ */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* กรอบรูป */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-neutral-900 border border-neutral-800 p-4 shadow-2xl overflow-hidden group">
              <img
                src={productsImg}
                alt="Street Basketball High Performance"
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              {/* Badge ลอยบนรูป */}
              <div className="absolute bottom-8 left-8 right-8 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                    Featured Gear
                  </p>
                  <p className="text-sm font-extrabold text-white">
                    Under Armour Curry 11
                  </p>
                </div>
                <span className="text-lg font-black text-yellow-400 font-mono">
                  ฿6,990
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
