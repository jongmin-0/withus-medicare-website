"use client";

import { motion } from "framer-motion";
import { HelpCircle, Users, TrendingDown, Clock } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: <HelpCircle size={32} className="text-[#C8A96E]" />,
      title: "해외 마케팅, 어디서부터 해야 할지 모르겠다",
      description: "채널 선정, 낯선 현지 트렌드, 언어 장벽 등 높은 진입 장벽으로 시작조차 막막합니다."
    },
    {
      icon: <Users size={32} className="text-[#C8A96E]" />,
      title: "콘텐츠를 만들 전문 인력이 없다",
      description: "외국어 영상 제작, 지속적인 SNS 운영을 전담할 내부 인력을 구하기 어렵습니다."
    },
    {
      icon: <TrendingDown size={32} className="text-[#C8A96E]" />,
      title: "에이전시에 맡겼는데 성과가 안 보인다",
      description: "기존 에이전시의 일회성 납품 방식으로 인해 실질적인 환자 유치로 이어지지 않습니다."
    },
    {
      icon: <Clock size={32} className="text-[#C8A96E]" />,
      title: "외국인 환자 응대 인프라가 부족하다",
      description: "통역, 상담, 사후관리 등 내원하는 환자를 케어할 운영 역량이 부재합니다."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-[#0A1628] border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            해외환자 유치를 위한 해외마케팅, <span className="text-[#C8A96E]">위더스가 해결해드립니다</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            병원 마케팅 담당자님, 이런 고민 하고 계신가요?
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 bg-[#C8A96E]/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 leading-snug">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
