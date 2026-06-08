"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/data/figma-assets";
import { useOnboarding } from "@/context/onboarding-context";
import { routes } from "@/lib/routes";

const RECOMMEND_ITEMS = [
  { icon: assets.iconTouch, label: "실시간 인기 상품" },
  { icon: assets.iconOptimization, label: "많이 저장된 스타일" },
  { icon: assets.iconShop, label: "베스트 브랜드" },
];

export default function AllDislikedResultPage() {
  const router = useRouter();
  const { session, resetSwipe } = useOnboarding();
  const nickname = session.isLoggedIn ? session.nickname : null;

  const handleRetry = () => {
    resetSwipe();
    router.push(routes.onboarding.swipe);
  };

  return (
    <main className="flex min-h-dvh flex-col px-4 pb-10 pt-14">
      <h1 className="text-[35px] leading-normal">
        {nickname ? (
          <>
            {nickname}님,
            <br />
          </>
        ) : null}
        <span className="text-[#7561d7]">취향에 맞는 코디</span>가
        <br />
        없으셨나요?
      </h1>

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-white px-4">
          <p className="text-xl font-bold">추천 방식</p>
        </div>
        <div className="mt-6 rounded-[15px] border border-[#dddbdb] bg-white px-5 pb-8 pt-10 shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
          <p className="text-center text-lg leading-normal">
            선택한 코디 중 선호하는 스타일이 없어
            <br />
            W컨셉에서 가장 반응이 좋은 스타일을
            <br />
            먼저 보여드릴게요.
          </p>
        </div>
      </div>

      <p className="mt-8 text-base font-bold text-black">이런 방식으로 추천해요</p>
      <div className="mt-3 space-y-3">
        {RECOMMEND_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex h-14 items-center gap-4 rounded-[13px] bg-[#f2f2f2] px-5"
          >
            <Image src={item.icon} alt="" width={28} height={28} />
            <span className="text-base font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-5 pt-10">
        <button
          type="button"
          onClick={() => router.push(routes.best)}
          className="h-[61px] w-full rounded-[13px] bg-black text-xl text-white"
        >
          인기 상품 보러가기
        </button>
        <button
          type="button"
          onClick={handleRetry}
          className="w-full text-center text-xl font-bold text-[rgba(0,0,0,0.45)]"
        >
          다시 선택하기
        </button>
      </div>
    </main>
  );
}
