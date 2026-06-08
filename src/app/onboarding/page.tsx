"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import FeatureCard from "@/components/ui/FeatureCard";
import Logo from "@/components/ui/Logo";
import { assets } from "@/data/figma-assets";
import { useOnboarding } from "@/context/onboarding-context";
import { routes } from "@/lib/routes";
import { skipOnboarding } from "@/lib/storage";

export default function OnboardingGuidePage() {
  const router = useRouter();
  const { startSwipe } = useOnboarding();

  const handleStart = () => {
    startSwipe();
    router.push(routes.onboarding.swipe);
  };

  const handleSkip = () => {
    skipOnboarding();
    router.push(routes.home());
  };

  return (
    <main className="flex min-h-dvh flex-col px-7 pb-10 pt-11">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="mt-10 text-center">
        <h1 className="text-[31px] font-normal leading-[50px] text-black">
          30초만에 내 취향을 찾고,
          <br />
          맞춤 추천을 받아보세요
        </h1>
        <p className="mt-4 text-[17px] leading-[30px] text-[rgba(0,0,0,0.7)]">
          좋아하는 코디만 선택하면,
          <br />
          내 스타일을 분석해 취향에 맞는 상품과
          <br />
          숏폼을 먼저 보여드려요.
        </p>
      </div>

      <div className="mt-8 space-y-2">
        <FeatureCard
          icon={assets.iconTouch}
          title="검색 없이 쉽게"
          description="코디를 보고 고르기만 하면 돼요"
        />
        <FeatureCard
          icon={assets.iconOptimization}
          title="내 스타일 발견"
          description="어떤 스타일인지 한눈에 알려드려요"
        />
        <FeatureCard
          icon={assets.iconShop}
          title="맞춤 추천 제공"
          description="취향에 맞는 상품과 숏폼을 먼저 보여드려요"
          tall
        />
      </div>

      <div className="mt-6 flex h-11 items-center justify-center gap-2 rounded-[10px] bg-[rgba(241,240,252,0.7)]">
        <Image src={assets.iconClock} alt="" width={20} height={20} unoptimized />
        <p className="text-[15px] font-bold tracking-[1.05px] text-[rgba(0,0,0,0.7)]">
          총 9개 선택 · 약 30초 소요
        </p>
      </div>

      <div className="mt-auto space-y-5 pt-8">
        <button
          type="button"
          onClick={handleStart}
          className="h-16 w-full rounded-[10px] bg-black text-[20px] text-white"
        >
          취향 탐색 시작하기
        </button>
        <button
          type="button"
          onClick={handleSkip}
          className="mx-auto block text-[15px] text-[rgba(0,0,0,0.59)] underline underline-offset-2"
        >
          나중에 할게요
        </button>
      </div>
    </main>
  );
}
