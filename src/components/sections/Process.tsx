"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { num: "01", title: "상담 & 니즈 파악", desc: "병원의 현황 및 마케팅 목표 분석" },
    { num: "02", title: "전략 수립", desc: "타겟 국가, 채널, 콘텐츠 방향 설계" },
    { num: "03", title: "콘텐츠 제작", desc: "AI 기반 숏폼/SNS 콘텐츠 메이킹" },
    { num: "04", title: "채널 운영 & 광고", desc: "SNS 운영, 타겟 광고, 인플루언서 협업" }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4"
          >
            체계적인 <span className="text-[#C8A96E]">협업 프로세스</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            문의부터 계약, 실제 환자 유치까지 모든 단계를 투명하게 진행합니다.
          </motion.p>
        </div>

        <div className="relative">
          {/* Scroll progress line placeholder (for visual connection) */}
          <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-1 bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-white lg:bg-transparent"
              >
                <div className="w-20 h-20 bg-[#0A1628] rounded-2xl flex items-center justify-center text-[#C8A96E] font-bold text-2xl mb-6 shadow-lg border border-gray-100 mx-auto lg:mx-0">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
