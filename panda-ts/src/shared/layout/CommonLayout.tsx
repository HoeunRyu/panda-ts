import { Header } from "@/shared/Header/Header";
import { Footer } from "@/shared/Footer/Footer";

export function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
