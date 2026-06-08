"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/onboarding/ProgressBar";
import SwipeCard from "@/components/onboarding/SwipeCard";
import { useOnboarding } from "@/context/onboarding-context";
import { getOnboardingResultPath } from "@/lib/routes";
import type { SwipeChoice } from "@/lib/types";

export default function SwipePage() {
  const router = useRouter();
  const {
    currentCard,
    currentIndex,
    totalCards,
    deck,
    session,
    startSwipe,
    submitChoice,
  } = useOnboarding();

  useEffect(() => {
    if (deck.length === 0) startSwipe();
  }, [deck.length, startSwipe]);

  // 9장 완료 후 결과 페이지로 이동
  useEffect(() => {
    if (currentIndex < totalCards || !session.result) return;
    router.replace(getOnboardingResultPath(session.result));
  }, [currentIndex, totalCards, session.result, router]);

  const handleChoice = (choice: SwipeChoice) => {
    submitChoice(choice);
  };

  const isCompleting = currentIndex >= totalCards;

  if (isCompleting) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[#604cd1]" />
        <p className="text-sm text-neutral-500">취향을 분석하고 있어요...</p>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[#604cd1]" />
      </div>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col px-5 pb-8 pt-6">
      <ProgressBar current={currentIndex + 1} total={totalCards} />

      <div className="mt-8 flex flex-1 flex-col">
        <SwipeCard
          image={currentCard}
          showGuide={currentIndex === 0}
          onLike={() => handleChoice("like")}
          onDislike={() => handleChoice("dislike")}
        />
      </div>
    </main>
  );
}
