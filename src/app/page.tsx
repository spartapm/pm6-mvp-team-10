"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomeContent from "@/components/home/HomeContent";
import { routes } from "@/lib/routes";
import { getSession } from "@/lib/storage";

function LoadingScreen() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-900" />
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session.onboardingCompleted) {
      router.replace(routes.onboarding.root);
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomeContent />
    </Suspense>
  );
}
