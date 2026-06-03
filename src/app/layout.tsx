import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SP Engineering — Premium Industrial Engineering Solutions",
  description:
    "SP Engineering delivers premium industrial fabrication, precision engineering, and turnkey solutions across India. Built on accuracy, innovation, and trust.",
  authors: [{ name: "SP Engineering" }],
  themeColor: "#981618",
  openGraph: {
    title: "SP Engineering — Premium Industrial Engineering Solutions",
    description:
      "Premium industrial engineering, fabrication, and turnkey project solutions delivered with precision.",
    type: "website",
    siteName: "SP Engineering",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/babf3318-bc13-4038-8ae7-4e91538b4dfb/id-preview-97386256--8896f62e-41a3-4cca-aa1c-033e759aed58.lovable.app-1779342231430.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Engineering — Premium Industrial Engineering Solutions",
    description: "Premium industrial engineering solutions built on precision and trust.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/babf3318-bc13-4038-8ae7-4e91538b4dfb/id-preview-97386256--8896f62e-41a3-4cca-aa1c-033e759aed58.lovable.app-1779342231430.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased overflow-x-hidden bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
