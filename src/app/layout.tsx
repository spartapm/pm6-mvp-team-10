import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MobileShell from "@/components/layout/MobileShell";
import PostHogProvider from "@/components/providers/PostHogProvider";
import { OnboardingProvider } from "@/context/onboarding-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "W CONCEPT | 취향 온보딩 MVP",
  description: "W컨셉 스와이프 기반 취향 온보딩 MVP",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "W CONCEPT",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <PostHogProvider>
          <MobileShell>
            <OnboardingProvider>{children}</OnboardingProvider>
          </MobileShell>
        </PostHogProvider>
      </body>
    </html>
  );
}
