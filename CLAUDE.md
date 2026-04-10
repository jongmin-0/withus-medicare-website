@AGENTS.md

# WITHUS MEDICARE 웹사이트

## 프로젝트 개요
- 외국인환자유치 에이전시 B2B 랜딩페이지
- React + Netlify 배포 (GitHub push 시 자동 빌드)
- 친구가 초안 제작, Allen이 디자인/UX 개선 담당

## 기술 스택

- **Framework**: Next.js 16.2.2 (App Router)
- **Runtime**: React 19.2.4 / TypeScript 5
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` 방식, PostCSS)
- **Animation**: Framer Motion 12 (`whileInView` + `viewport={{ once: true }}` 패턴)
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge

## 폴더 구조

```
src/
├── app/
│   ├── layout.tsx       # RootLayout (Header/Footer 포함)
│   ├── page.tsx         # 메인 페이지 (섹션 조합)
│   └── globals.css      # 전역 스타일 + Tailwind + 테마 변수
└── components/
    ├── layout/          # Header.tsx, Footer.tsx
    └── sections/        # 섹션 단위 컴포넌트 (Hero, PainPoints, Services, ...)
```

## 디자인 토큰 (globals.css @theme)

- 배경 (다크): `#0A1628`
- 강조 (골드): `#C8A96E`
- 보조 텍스트: `#B0B8C4`
- 밝은 섹션 배경: `#F5F5F7`
- 성공/그린: `#2E8B6E`
- 폰트: Pretendard (한국어) + Inter (영문)
- 레이아웃 기준: `container mx-auto px-6 max-w-[1200px]`
- 커스텀 유틸리티: `.glass-nav`, `.text-gradient`

## 코드 컨벤션

- 모든 컴포넌트 상단에 `"use client"` 선언
- `export default` 함수형 컴포넌트 (named export 없음)
- 데이터 배열은 컴포넌트 내부 로컬 상수로 선언 (별도 data 파일 없음)
- 반응형: `md:`, `lg:` 브레이크포인트 사용
- 섹션별 배경 교차: 다크(`#0A1628`) ↔ 라이트(`#F5F5F7`)
- 색상은 Tailwind 커스텀 변수 또는 인라인 hex(`text-[#C8A96E]`) 혼용

## 작업 원칙
- 기존 코드 컨벤션 유지할 것
- 커밋 메시지는 한글로 작성
- 변경 전 항상 파악 먼저, 수정은 최소 단위로