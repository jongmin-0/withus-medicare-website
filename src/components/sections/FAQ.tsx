"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "어떤 병원이 서비스를 이용할 수 있나요?",
    answer:
      "규모에 관계없이 해외 환자 유치를 원하는 모든 병원이 이용 가능합니다. 성형외과, 피부과, 치과, 한방병원 등 외국인 환자 수요가 높은 진료과에 특히 효과적이며, 현재 해외 마케팅 경험이 없어도 처음부터 함께 전략을 수립해 드립니다.",
  },
  {
    question: "계약 후 얼마나 빠르게 서비스가 시작되나요?",
    answer:
      "계약 완료 후 2주 이내에 타겟 국가 분석 및 콘텐츠 전략 수립을 완료하고, 첫 번째 AI 콘텐츠 제작에 착수합니다. 빠른 실행을 위해 온보딩 과정을 최소화하고 병원 측 부담을 줄이는 방향으로 진행합니다.",
  },
  {
    question: "어떤 나라의 환자를 타겟으로 하나요?",
    answer:
      "중국, 동남아시아(베트남·태국·인도네시아·말레이시아), 중동, 중앙아시아 등 한국 의료에 관심이 높은 국가를 중심으로 진행합니다. 병원의 진료 특성과 기존 내원 환자 데이터를 분석해 가장 성과가 높을 타겟 국가를 함께 선정합니다.",
  },
  {
    question: "AI 콘텐츠가 기존 콘텐츠보다 효과적인가요?",
    answer:
      "AI 기반 콘텐츠는 제작 속도와 다국어 현지화 측면에서 기존 방식 대비 월등한 효율을 제공합니다. 특히 AI 모델 및 보이스오버를 활용하면 동일한 콘텐츠를 여러 언어로 빠르게 제작할 수 있어, 각 타겟 국가에 맞는 맞춤형 홍보가 가능합니다.",
  },
  {
    question: "기존 마케팅팀이 있어도 협업이 가능한가요?",
    answer:
      "네, 가능합니다. 기존 내부 마케팅팀과 역할을 분리하여 해외 채널 특화 업무를 WITHUS MEDICARE가 전담하는 방식으로 운영합니다. 국내 마케팅은 내부에서, 해외 환자 유치는 저희가 맡는 구조로 효율적인 협업이 가능합니다.",
  },
  {
    question: "서비스 비용은 어떻게 산정되나요?",
    answer:
      "병원의 규모, 타겟 국가 수, 원하는 서비스 범위에 따라 맞춤 견적을 제공합니다. 문의 후 초기 상담을 통해 병원 상황에 맞는 최적의 플랜을 안내해 드립니다. 무료 상담 신청 후 담당자가 24시간 이내 연락드립니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2E8B6E] font-semibold tracking-wider text-sm mb-3 uppercase"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0A1628]"
          >
            자주 묻는 질문
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#0A1628] text-base leading-snug">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus size={18} className="shrink-0 text-[#C8A96E]" />
                ) : (
                  <Plus size={18} className="shrink-0 text-[#C8A96E]" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
