import { Header } from "@/shared/Header/Header";
import { Footer } from "@/shared/Footer/Footer";
import { Stack } from "@mui/material";

export function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
