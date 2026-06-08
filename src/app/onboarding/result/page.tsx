"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StyleRatioSection from "@/components/onboarding/StyleRatioSection";
import { STYLE_DESCRIPTIONS } from "@/data/mock-data";
import { useOnboarding } from "@/context/onboarding-context";
import { getOnboardingResultPath, routes } from "@/lib/routes";
export default function ResultPage() {
  const router = useRouter();
  const { session } = useOnboarding();
  const result = session.result;

  useEffect(() => {
    if (!result) {
      router.replace(routes.onboarding.root);
      return;
    }
    if (result.type !== "normal") {
      router.replace(getOnboardingResultPath(result));
    }
  }, [result, router]);

  if (!result || result.type !== "normal" || !result.primaryStyle) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[#604cd1]" />
      </div>
    );
  }

  const { primaryStyle, ratios } = result;
  const nickname = session.isLoggedIn ? session.nickname : null;

  return (
    <main className="flex min-h-dvh flex-col px-4 pb-10 pt-16">
      <h1 className="text-[35px] leading-normal">
        {nickname ? (
          <>
            {nickname}님의
            <br />
          </>
        ) : (
          "나의 "
        )}
        <span className="text-[#7561d7]">취향</span>을 찾았어요!
      </h1>

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-white px-4">
          <p className="text-xl font-bold">나의 스타일</p>
        </div>
        <div className="mt-6 rounded-[15px] border border-[#dddbdb] bg-white px-6 pb-8 pt-10 shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
          <p className="text-center text-[32px] font-medium">{primaryStyle}</p>
          <p className="mt-4 text-center text-base leading-6">
            {STYLE_DESCRIPTIONS[primaryStyle]}
          </p>
        </div>
      </div>

      <StyleRatioSection ratios={ratios} />

      <div className="mt-auto pt-10">
        <button
          type="button"
          onClick={() => router.push(routes.shortform.popup(primaryStyle))}
          className="h-[61px] w-full rounded-[13px] bg-black text-2xl text-white"
        >
          추천 보러가기
        </button>
      </div>
    </main>
  );
}
