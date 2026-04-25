import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SmoothScroll />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
