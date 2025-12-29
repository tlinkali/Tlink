import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Small delay to ensure the page content has started rendering
    const timer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('page-ready'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
