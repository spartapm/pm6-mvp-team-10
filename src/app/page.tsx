"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HomeContent from "@/components/home/HomeContent";
import { getSessionHomeStyle, routes } from "@/lib/routes";
import { getSession } from "@/lib/storage";

function LoadingScreen() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-900" />
    </div>
  );
}

function HomePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session.onboardingCompleted) {
      router.replace(routes.onboarding.root);
      return;
    }

    const sessionStyle = getSessionHomeStyle(session.result);
    const paramStyle = searchParams.get("style");

    if (sessionStyle && !paramStyle) {
      router.replace(routes.home(sessionStyle));
      return;
    }

    setReady(true);
  }, [router, searchParams]);

  if (!ready) {
    return <LoadingScreen />;
  }

  return <HomeContent />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomePageContent />
    </Suspense>
  );
}
