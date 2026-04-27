import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTop } from "./ScrollToTop";
import { CustomCursor } from "./CustomCursor";
import { AmbientBackdrop } from "./AmbientBackdrop";
import { ThemeToggle } from "./ThemeToggle";
import { ViewTransitions } from "./ViewTransitions";


export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AmbientBackdrop />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </div>
  );
}
