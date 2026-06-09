"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import ShortformPlayer from "@/components/shortform/ShortformPlayer";
import { getShortformsByStyle } from "@/data/mock-data";
import { useOnboarding } from "@/context/onboarding-context";
import { routes } from "@/lib/routes";
import type { StyleName } from "@/lib/types";

export default function ShortformContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { session } = useOnboarding();

  const style = useMemo(() => {
    const param = searchParams.get("style") as StyleName | null;
    return (
      param ??
      session.result?.primaryStyle ??
      session.result?.randomStyle ??
      "미니멀"
    );
  }, [searchParams, session.result]);

  const shortforms = getShortformsByStyle(style);
  const main = shortforms[0];

  if (!main) {
    return (
      <AppShell>
        <main className="flex min-h-[60dvh] flex-col items-center justify-center px-6 text-center">
          <p className="text-neutral-500">아직 준비 중인 콘텐츠예요</p>
          <button
            type="button"
            onClick={() => router.push(routes.home())}
            className="mt-4 text-sm text-black underline"
          >
            홈으로 이동
          </button>
        </main>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <main className="bg-white pb-2">
        <div className="px-[17px] pt-11">
          <h1 className="text-[32px] font-normal leading-none text-black">
            내 취향 숏폼
          </h1>
          <p className="mt-2 text-base font-bold leading-normal text-[rgba(0,0,0,0.6)]">
            {style}을 좋아하는 사람에게 추천하는 콘텐츠예요.
          </p>
        </div>

        <div className="mt-4">
          <ShortformPlayer item={main} />
        </div>
      </main>
    </AppShell>
  );
}
