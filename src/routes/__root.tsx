import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Preloader } from "@/components/ui/preloader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="relative max-w-md text-center">
        <h1 className="text-8xl font-bold text-brand-gradient">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-7">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground glow-brand-sm hover:glow-brand transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-brand-sm"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/60 transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SP Engineering — Premium Industrial Engineering Solutions" },
      {
        name: "description",
        content:
          "SP Engineering delivers premium industrial fabrication, precision engineering, and turnkey solutions across India. Built on accuracy, innovation, and trust.",
      },
      { name: "author", content: "SP Engineering" },
      { name: "theme-color", content: "#981618" },
      { property: "og:title", content: "SP Engineering — Premium Industrial Engineering Solutions" },
      {
        property: "og:description",
        content:
          "Premium industrial engineering, fabrication, and turnkey project solutions delivered with precision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SP Engineering" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SP Engineering — Premium Industrial Engineering Solutions" },
      {
        name: "twitter:description",
        content: "Premium industrial engineering solutions built on precision and trust.",
      },
      { name: "description", content: "A premium industrial corporate website foundation for SP Engineering, built with Next.js." },
      { property: "og:description", content: "A premium industrial corporate website foundation for SP Engineering, built with Next.js." },
      { name: "twitter:description", content: "A premium industrial corporate website foundation for SP Engineering, built with Next.js." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/babf3318-bc13-4038-8ae7-4e91538b4dfb/id-preview-97386256--8896f62e-41a3-4cca-aa1c-033e759aed58.lovable.app-1779342231430.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/babf3318-bc13-4038-8ae7-4e91538b4dfb/id-preview-97386256--8896f62e-41a3-4cca-aa1c-033e759aed58.lovable.app-1779342231430.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-20">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
