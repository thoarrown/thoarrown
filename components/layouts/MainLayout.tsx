import React from "react";
import { Header } from "~/components/header/Header";
import Hero from "~/components/hero";
interface MainLayoutProps {
  hero?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, hero }) => {
  if (hero)
    return (
      <>
        <Header />
        <Hero />
        <div className="min-h-screen max-w-[90rem] mx-auto">{children}</div>
      </>
    );
  return (
    <>
      <Header />
      <div className="min-h-screen max-w-[90rem] mx-auto pt-[75px]">
        {children}
      </div>
    </>
  );
};
