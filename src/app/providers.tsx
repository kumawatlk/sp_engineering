"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Preloader } from "@/components/ui/preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  // Safe instantiation of QueryClient on client-side
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-20">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
