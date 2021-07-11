import React from "react";
import { Header } from "~/components/header/Header";
import Hero from "~/components/hero";
import Footer from "../footer";
interface MainLayoutProps {
  hero?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, hero }) => {
  if (hero)
    return (
      <>
        <Header />
        <Hero />
        <div className="py-12 min-h-screen max-w-[90rem] mx-auto">
          {children}
        </div>
        <Footer />
      </>
    );
  return (
    <>
      <Header />
      <div className="min-h-screen max-w-[90rem] mx-auto pt-[75px]">
        {children}
      </div>
      <Footer />
    </>
  );
};
