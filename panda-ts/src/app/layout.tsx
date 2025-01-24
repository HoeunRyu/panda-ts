import type { Metadata } from "next";
import localFont from "next/font/local";
import "public/globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

// 이건 서버컴포넌트에서만 가능 metadata <- seo잡을 떄 유리
// nextjs에서는 이렇게 metadata라고 변수 만들고 내보내면 그 페이지 메타데이터(정보) 만드는 것
export const metadata: Metadata = {
  title: "판다마켓", // 웹페이지 제목
  description: "일상의 모든 물건을 거래해보세요", // 웹페이지 설명
  // openGraph : {
  //   title : "판다마켓",
  //   description : "일상의 모든 물건을 거래해보세요"
  // } 나중 카카오 공유할 떄 쓰면댐
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
