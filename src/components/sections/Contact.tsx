"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0A1628] mb-4"
          >
            해외 환자 유치, <br className="md:hidden" />
            <span className="text-[#C8A96E]">지금 시작하세요</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            기본 정보와 문의 사항을 남겨주시면, 담당자가 빠르게 연락드리겠습니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A1628] text-white rounded-3xl p-8 h-full shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-[#C8A96E]">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#C8A96E] mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-gray-400 mb-1">Phone</h4>
                    <p className="text-lg font-semibold">010-2074-0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-[#C8A96E] mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-gray-400 mb-1">Email</h4>
                    <p className="text-lg font-semibold">Withusmedicare@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-[#C8A96E] mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-gray-400 mb-1">Office</h4>
                    <p className="text-lg font-semibold">대한민국</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  문의 접수 후 24시간 이내에 전문 매니저가 회신해 드립니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">병원명 *</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent outline-none transition-all" placeholder="병원명을 입력해주세요" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">담당자명 *</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent outline-none transition-all" placeholder="성함을 입력해주세요" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">연락처 *</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">이메일 *</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent outline-none transition-all" placeholder="example@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">관심 서비스 (중복 선택 가능)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['SNS 콘텐츠', '환자 유치', '통역 서비스', '기타'].map((service) => (
                    <label key={service} className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="w-4 h-4 text-[#C8A96E] focus:ring-[#C8A96E] rounded border-gray-300" />
                      <span className="text-sm text-gray-700 font-medium">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">문의 내용</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent outline-none transition-all resize-none" 
                  placeholder="현재 병원의 상황이나 원하시는 마케팅 방향 등을 자유롭게 기재해주세요."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-[#0A1628] hover:bg-[#152744] text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-[#0A1628]/20"
              >
                무료 상담 신청하기
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
