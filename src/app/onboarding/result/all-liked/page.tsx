"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/data/figma-assets";
import { useOnboarding } from "@/context/onboarding-context";
import { routes } from "@/lib/routes";
const RECOMMEND_ITEMS = [
  { icon: assets.iconTouch, label: "랜덤 스타일 추천" },
  { icon: assets.iconShop, label: "추천 상품 홈" },
  { icon: assets.iconOptimization, label: "추천 숏폼 콘텐츠" },
];

export default function AllLikedResultPage() {
  const router = useRouter();
  const { session } = useOnboarding();
  const result = session.result;
  const style = result?.randomStyle ?? result?.primaryStyle;
  const nickname = session.isLoggedIn ? session.nickname : null;

  if (!result || !style) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[#604cd1]" />
      </div>
    );
  }

  const goHome = () => router.push(routes.home(style));
  const goShortform = () => router.push(routes.shortform.index(style));

  return (
    <main className="flex min-h-dvh flex-col px-4 pb-10 pt-16">
      <h1 className="text-[35px] leading-normal">
        {nickname ? (
          <>
            {nickname}님,
            <br />
          </>
        ) : null}
        <span className="text-[#604cd1]">다양한 스타일</span>을
        <br />
        좋아하시는군요!
      </h1>

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-white px-4">
          <p className="text-xl font-bold">추천 방식</p>
        </div>
        <div className="mt-6 rounded-[15px] border border-[#dddbdb] bg-white px-5 pb-6 pt-10 shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
          <p className="text-center text-base leading-6">
            여러 스타일에 고르게 관심이 있어
            <br />
            W컨셉이 추천하는 다양한 취향의 상품과
            <br />
            콘텐츠를 먼저 보여드릴게요.
          </p>
        </div>
      </div>

      <p className="mt-8 text-base font-medium">추천 탐색</p>
      <div className="mt-3 space-y-3">
        {RECOMMEND_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex h-[61px] items-center gap-4 rounded-[13px] bg-[#f4f2f3] px-5"
          >
            <Image src={item.icon} alt="" width={28} height={28} />
            <span className="text-base font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-3 pt-10">
        <button
          type="button"
          onClick={goHome}
          className="h-[61px] w-full rounded-[13px] bg-black text-xl text-white"
        >
          추천 상품 보러가기
        </button>
        <button
          type="button"
          onClick={goShortform}
          className="h-[61px] w-full rounded-[13px] border border-black bg-white text-xl text-black"
        >
          추천 숏폼 보러가기
        </button>
        <p className="text-center text-[15px] text-[#787474]">
          더 많이 탐색할수록 취향 추천이 정교해져요
        </p>
      </div>
    </main>
  );
}
