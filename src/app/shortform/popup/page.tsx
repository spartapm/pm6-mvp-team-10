"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ShortformPlayer from "@/components/shortform/ShortformPlayer";
import { getShortformPreview } from "@/data/mock-data";
import { useOnboarding } from "@/context/onboarding-context";
import { routes } from "@/lib/routes";
import type { StyleName } from "@/lib/types";

function ShortformPopupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { session } = useOnboarding();

  const style = useMemo(() => {
    const param = searchParams.get("style") as StyleName | null;
    return (
      param ??
      session.result?.primaryStyle ??
      session.result?.randomStyle ??
      null
    );
  }, [searchParams, session.result]);

  useEffect(() => {
    if (!style) {
      router.replace(routes.home());
    }
  }, [style, router]);

  if (!style) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#8f8f90]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      </div>
    );
  }

  const preview = getShortformPreview(style);

  const goShortform = () => router.push(routes.shortform.index(style));
  const goHome = () => router.push(routes.home(style));
  const closeToHome = () => router.push(routes.home());

  return (
    <div className="relative min-h-dvh bg-[#8f8f90]">
      <button
        type="button"
        onClick={closeToHome}
        className="absolute inset-0 z-0"
        aria-label="닫기"
      />

      <div className="relative z-10 mx-auto min-h-dvh max-w-[402px] pt-[127px]">
        <div className="min-h-[761px] rounded-[20px] border border-black/20 bg-white px-[25px] pb-10 pt-[65px]">
          <h2 className="px-4 text-[28px] font-bold leading-tight text-black">
            이 스타일이 마음에 든다면?
          </h2>

          <div className="mt-8">
            <ShortformPlayer item={preview} variant="preview" />
          </div>

          <div className="mt-8 text-center text-xl font-bold leading-normal text-black">
            <p>방금 선택한 취향과</p>
            <p>비슷한 스타일 콘텐츠예요.</p>
          </div>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={goShortform}
              className="h-[66px] w-full rounded-2xl bg-[rgba(0,0,0,0.96)] text-xl font-bold text-white"
            >
              숏폼 더 보러가기
            </button>
            <button
              type="button"
              onClick={goHome}
              className="h-[66px] w-full rounded-2xl border border-black/25 bg-white text-xl font-bold text-black"
            >
              홈에서 상품 먼저 볼래요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShortformPopupPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center bg-[#8f8f90]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        </div>
      }
    >
      <ShortformPopupContent />
    </Suspense>
  );
}
