export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10 py-12 text-sm text-gray-400">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              WITHUS<span className="text-[#C8A96E]">MEDICARE</span>
            </h3>
            <p className="mb-4">
              AI 기반 외국인 환자 유치 전문 그룹<br />
              병원의 성공적인 글로벌 진출을 돕습니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">CompanyInfo</h4>
            <ul className="space-y-2">
              <li>상호: WITHUS MEDICARE (위더스메디케어)</li>
              <li>대표: 김종민</li>
              <li>사업자등록번호: 266-88-03809</li>

            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>📞 010-2074-0000</li>
              <li>📧 withusmedicare@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#C8A96E]">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-[#C8A96E]">이용약관</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} WITHUS MEDICARE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
