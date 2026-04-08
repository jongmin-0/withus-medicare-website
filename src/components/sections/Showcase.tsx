"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Showcase() {
  const videos = [
    {
      id: 1,
      title: "AI 모델 병원 소개 영상",
      description: "다국어 AI 아바타를 활용하여 현지인에게 자연스럽고 신뢰감 있게 병원을 소개합니다.",
      placeholderSrc: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AI 다국어 시술 안내",
      description: "정확한 딕션의 AI 보이스오버로 복잡한 시술 과정을 쉽고 명확하게 설명합니다.",
      placeholderSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Before & After 숏폼",
      description: "시각적 효과를 극대화하는 트렌디한 편집으로 잠재 환자의 이목을 집중시킵니다.",
      placeholderSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="showcase" className="py-24 bg-[#0A1628]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide"
          >
            ⭐ 킬링 콘텐츠
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            AI가 만드는 병원 콘텐츠,<br />
            <span className="text-gradient">직접 확인하세요</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            기존 인력 의존도를 대폭 낮추면서도 훨씬 빠르고 고퀄리티의 결과물을 만들어냅니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] mb-6 bg-gray-800">
                {/* Fallback image wrapper */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.placeholderSrc})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white
                                border border-white/30 group-hover:bg-[#C8A96E] group-hover:border-transparent transition-all">
                    <Play className="ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
