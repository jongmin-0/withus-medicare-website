import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://withusmedicare.com";
const DESCRIPTION = "AI 기반 숏폼 콘텐츠 제작부터 환자 상담, 통역까지. 병원의 해외 환자 유치 전 과정을 WITHUS MEDICARE와 함께 시작하세요.";

export const metadata: Metadata = {
  title: "WITHUS MEDICARE | 프리미엄 AI 해외환자유치",
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WITHUS MEDICARE | 프리미엄 AI 해외환자유치",
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: "WITHUS MEDICARE",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WITHUS MEDICARE - 프리미엄 AI 해외환자유치 에이전시",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WITHUS MEDICARE | 프리미엄 AI 해외환자유치",
    description: DESCRIPTION,
    images: ["/og-image.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://withusmedicare.com/#organization",
                  name: "WITHUS MEDICARE",
                  alternateName: "위더스메디케어",
                  url: "https://withusmedicare.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://withusmedicare.com/og-image.png",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+82-10-2074-0000",
                    email: "withusmedicare@gmail.com",
                    contactType: "customer service",
                    availableLanguage: ["Korean", "English"],
                  },
                  areaServed: "KR",
                  description:
                    "AI 기반 숏폼 콘텐츠 제작부터 환자 상담, 통역까지. 병원의 해외 환자 유치 전 과정을 지원하는 외국인 환자 유치 전문 에이전시",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://withusmedicare.com/#website",
                  url: "https://withusmedicare.com",
                  name: "WITHUS MEDICARE",
                  publisher: {
                    "@id": "https://withusmedicare.com/#organization",
                  },
                  inLanguage: "ko-KR",
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://withusmedicare.com/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "어떤 병원이 서비스를 이용할 수 있나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "규모에 관계없이 해외 환자 유치를 원하는 모든 병원이 이용 가능합니다. 성형외과, 피부과, 치과, 한방병원 등 외국인 환자 수요가 높은 진료과에 특히 효과적이며, 현재 해외 마케팅 경험이 없어도 처음부터 함께 전략을 수립해 드립니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "계약 후 얼마나 빠르게 서비스가 시작되나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "계약 완료 후 2주 이내에 타겟 국가 분석 및 콘텐츠 전략 수립을 완료하고, 첫 번째 AI 콘텐츠 제작에 착수합니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "어떤 나라의 환자를 타겟으로 하나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "중국, 동남아시아(베트남·태국·인도네시아·말레이시아), 중동, 중앙아시아 등 한국 의료에 관심이 높은 국가를 중심으로 진행합니다. 병원의 진료 특성과 기존 내원 환자 데이터를 분석해 가장 성과가 높을 타겟 국가를 함께 선정합니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "AI 콘텐츠가 기존 콘텐츠보다 효과적인가요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "AI 기반 콘텐츠는 제작 속도와 다국어 현지화 측면에서 기존 방식 대비 월등한 효율을 제공합니다. 동일한 콘텐츠를 여러 언어로 빠르게 제작할 수 있어 각 타겟 국가에 맞는 맞춤형 홍보가 가능합니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "기존 마케팅팀이 있어도 협업이 가능한가요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "네, 가능합니다. 기존 내부 마케팅팀과 역할을 분리하여 해외 채널 특화 업무를 WITHUS MEDICARE가 전담하는 방식으로 운영합니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "서비스 비용은 어떻게 산정되나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "병원의 규모, 타겟 국가 수, 원하는 서비스 범위에 따라 맞춤 견적을 제공합니다. 무료 상담 신청 후 담당자가 24시간 이내 연락드립니다.",
                      },
                    },
                  ],
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://withusmedicare.com/#service",
                  name: "WITHUS MEDICARE 외국인 환자 유치 서비스",
                  provider: {
                    "@id": "https://withusmedicare.com/#organization",
                  },
                  serviceType: "외국인 환자 유치 에이전시",
                  areaServed: {
                    "@type": "Country",
                    name: "Korea",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "서비스 목록",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "AI 기반 SNS 콘텐츠 제작",
                          description:
                            "AI 숏폼 영상 제작, 타겟 국가별 맞춤 콘텐츠 현지화, Instagram·YouTube Shorts·TikTok 운영",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "외국인 환자 유치 마케팅",
                          description:
                            "타겟 국가별 SNS 광고, 현지 인플루언서 협업, 해외 포털 SEO 전략, 퍼포먼스 마케팅",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "환자 커뮤니케이션 & 컨시어지",
                          description:
                            "다국어 전담 매니저 상담, 전문 의료 통역, 비자·항공·숙소 입국 지원, 귀국 후 사후관리",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
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
