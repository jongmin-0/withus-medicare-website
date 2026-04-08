"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A1628]/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-transparent to-[#0A1628] z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Placeholder for actual background video. For now, a dark gradient fallback is used if video fails */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-professional-checking-on-patient-in-hospital-41887-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          AI 콘텐츠로 <br className="hidden md:block" />
          <span className="text-gradient">해외 환자</span>를 연결합니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI 기반 숏폼 콘텐츠 제작부터 환자 상담, 통역까지.
          <br className="hidden md:block" />
          병원의 해외 환자 유치 전 과정을 WITHUS MEDICARE와 함께 시작하세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-[#C8A96E] hover:bg-[#b0935d] text-[#0A1628] px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
          >
            무료 상담 신청 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto border border-white/30 hover:border-white/80 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            서비스 알아보기
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-sm tracking-widest text-gray-400">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
