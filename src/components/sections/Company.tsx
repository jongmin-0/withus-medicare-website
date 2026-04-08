"use client";

import { motion } from "framer-motion";


export default function Company() {
  return (
    <section id="company" className="py-24 bg-[#0A1628] text-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative bg-gray-800">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-[#0A1628]/30 mix-blend-multiply" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              WITHUS<span className="text-[#C8A96E]">MEDICARE</span>
            </h2>
            <p className="text-xl text-gray-300 font-light mb-8 leading-relaxed">
              우리는 뛰어난 한국의 의료 기술을 전 세계에 알립니다.
              <br />단순한 에이전시가 아닌, 병원의 글로벌 성장 파트너가 되겠습니다.
            </p>
            


            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-gray-400 text-sm mb-2">설립 가치</h4>
                <p className="text-lg font-medium text-white">신뢰와 혁신</p>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-2">핵심 역량</h4>
                <p className="text-lg font-medium text-[#C8A96E]">AI 콘텐츠 인프라</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
