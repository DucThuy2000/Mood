"use client";

import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export const PageLayout = ({
  children,
  fullWidth = false,
}: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <Header />
      <main className="flex-1">
        <div className={fullWidth ? "w-full" : "container mx-auto py-8"}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
