import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WITHUS MEDICARE | 프리미엄 AI 해외환자유치",
  description: "AI 기반 외국인 환자 유치 전문 에이전시, 병원의 성공적인 글로벌 진출을 돕습니다.",
  openGraph: {
    title: "WITHUS MEDICARE | 프리미엄 AI 해외환자유치",
    description: "AI 기반 숏폼 콘텐츠 제작부터 환자 상담, 통역까지. 병원의 해외 환자 유치의 전 과정을 함께합니다.",
    url: "https://withusmedicare.co.kr",
    siteName: "WITHUS MEDICARE",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
