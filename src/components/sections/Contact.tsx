"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { formatPhoneNumber, validatePhone } from "@/utils/phone";

const INTEREST_OPTIONS = ['SNS 콘텐츠', '환자 유치', '통역 서비스', '기타'] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [hospital, setHospital] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
    if (phoneError) setPhoneError("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const toggleInterest = (service: string) => {
    setInterests((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const pErr = validatePhone(phone);
    const eErr = !email.trim()
      ? "이메일을 입력해주세요"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "올바른 이메일 형식을 입력해주세요 (예: example@email.com)"
      : "";

    setPhoneError(pErr);
    setEmailError(eErr);
    if (pErr || eErr) return;

    setStatus("loading");

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hospital, name, phone, email, interests, message }),
      });

      if (!res.ok) throw new Error(`서버 오류 (${res.status})`);

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    }
  };

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent outline-none transition-all text-gray-900";

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
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <CheckCircle2 size={56} className="text-[#2E8B6E]" />
                <h3 className="text-2xl font-bold text-[#0A1628]">문의가 접수되었습니다!</h3>
                <p className="text-gray-500 leading-relaxed">
                  24시간 이내에 전문 매니저가 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">병원명 *</label>
                    <input
                      type="text"
                      value={hospital}
                      onChange={(e) => setHospital(e.target.value)}
                      className={inputClass}
                      placeholder="병원명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">담당자명 *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">연락처 *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={`${inputClass} ${phoneError ? "border-red-400 focus:ring-red-400" : ""}`}
                      placeholder="010-0000-0000"
                    />
                    {phoneError && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle size={13} className="shrink-0" />
                        {phoneError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">이메일 *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`${inputClass} ${emailError ? "border-red-400 focus:ring-red-400" : ""}`}
                      placeholder="example@email.com"
                    />
                    {emailError && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle size={13} className="shrink-0" />
                        {emailError}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">관심 서비스 (중복 선택 가능)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {INTEREST_OPTIONS.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-colors ${
                          interests.includes(service)
                            ? "border-[#C8A96E] bg-[#C8A96E]/10"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(service)}
                          onChange={() => toggleInterest(service)}
                          className="w-4 h-4 text-[#C8A96E] focus:ring-[#C8A96E] rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700 font-medium">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">문의 내용</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="현재 병원의 상황이나 원하시는 마케팅 방향 등을 자유롭게 기재해주세요."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요. ({errorMessage})</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#0A1628] hover:bg-[#152744] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-[#0A1628]/20 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      전송 중...
                    </>
                  ) : (
                    "무료 상담 신청하기"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
