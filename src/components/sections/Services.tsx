"use client";

import { motion } from "framer-motion";
import { Sparkles, Megaphone, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "content",
      icon: <Sparkles size={40} className="mb-6 text-[#C8A96E]" />,
      title: "AI 기반 SNS 콘텐츠 제작",
      description: "고퀄리티 영상 콘텐츠를 외국어로 신속하게 제작하여 글로벌 잠재 환자에게 병원을 알립니다.",
      features: [
        "AI 숏폼 영상 제작 (병원 소개, 시술 안내 등)",
        "AI 모델을 활용한 프리미엄 홍보 콘텐츠",
        "타겟 국가/언어별 맞춤 콘텐츠 현지화",
        "Instagram, YouTube Shorts, TikTok 운영"
      ]
    },
    {
      id: "marketing",
      icon: <Megaphone size={40} className="mb-6 text-[#C8A96E]" />,
      title: "외국인 환자 유치 마케팅",
      description: "현지에 맞는 채널과 전략으로 병원의 노출을 극대화하고 실질적인 DB를 확보합니다.",
      features: [
        "타겟 국가별 최적화 SNS 광고 집행",
        "현지 뷰티/의료 인플루언서 섭외 및 협업",
        "해외 포털 검색 최적화(SEO) 전략",
        "데이터 기반 퍼포먼스 마케팅 최적화"
      ]
    },
    {
      id: "concierge",
      icon: <HeartHandshake size={40} className="mb-6 text-[#C8A96E]" />,
      title: "환자 커뮤니케이션 & 컨시어지",
      description: "언어 장벽 없는 매끄러운 상담부터 입국 지원, 사후관리까지 원스톱으로 지원합니다.",
      features: [
        "다국어 전담 매니저 상담 대응 (DM, 메신저 등)",
        "전문 의료 통역 서비스 (내원 시 동행)",
        "비자, 항공, 숙소 등 원활한 입국 지원",
        "귀국 후 사후관리 및 지속적인 팔로업"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2E8B6E] font-semibold tracking-wider text-sm mb-3 uppercase"
          >
            Our Services
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4"
          >
            해외 환자 유치의 모든 것, <br className="md:hidden" />
            <span className="text-[#C8A96E]">한 곳에서 완벽하게</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed h-[80px]">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#2E8B6E] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
