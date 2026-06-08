"use client";

import Image from "next/image";
import { assets } from "@/data/figma-assets";
import type { SwipeImage } from "@/lib/types";

type SwipeCardProps = {
  image: SwipeImage;
  onLike: () => void;
  onDislike: () => void;
  showGuide?: boolean;
};

export default function SwipeCard({
  image,
  onLike,
  onDislike,
  showGuide = false,
}: SwipeCardProps) {
  return (
    <div className="flex flex-1 flex-col">
      {showGuide ? (
        <div className="mb-6 text-center text-lg font-bold leading-[30px] text-[rgba(0,0,0,0.6)]">
          <p>
            마음에 들면 <span className="text-black">오른쪽</span>으로
          </p>
          <p>
            별로예요는 <span className="text-black">왼쪽</span>으로
          </p>
        </div>
      ) : (
        <div className="mb-6 h-[60px]" />
      )}

      <div className="relative mx-auto flex w-full max-w-[328px] items-center justify-center">
        <button
          type="button"
          onClick={onDislike}
          className="absolute -left-1 z-10 flex size-12 items-center justify-center"
          aria-label="별로예요"
        >
          <Image
            src={assets.iconArrow}
            alt=""
            width={48}
            height={48}
            className="rotate-180"
          />
        </button>

        <div className="relative w-[276px]">
          <div
            className="absolute left-3 top-4 h-[412px] w-[265px] -rotate-[7.5deg] overflow-hidden rounded-[40px] opacity-40"
            style={{ backgroundColor: image.color }}
          >
            <Image
              src={image.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="265px"
            />
          </div>
          <div
            className="absolute left-12 top-2 h-[395px] w-[265px] rotate-[4deg] overflow-hidden rounded-[40px] opacity-60"
            style={{ backgroundColor: image.color }}
          >
            <Image
              src={image.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="265px"
            />
          </div>
          <div className="relative h-[412px] w-[276px] -rotate-[5deg] overflow-hidden rounded-[40px] shadow-[0_4px_40px_rgba(0,0,0,0.25)]">
            <Image
              src={image.imageUrl}
              alt={image.label}
              fill
              className="object-cover"
              sizes="276px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        <button
          type="button"
          onClick={onLike}
          className="absolute -right-1 z-10 flex size-12 items-center justify-center shadow-[0_4px_40px_rgba(0,0,0,0.25)]"
          aria-label="좋아요"
        >
          <Image src={assets.iconArrow} alt="" width={48} height={48} />
        </button>
      </div>

      <p className="mt-8 text-center text-lg font-bold text-[rgba(0,0,0,0.6)]">
        스와이프 해주세요
      </p>
    </div>
  );
}
