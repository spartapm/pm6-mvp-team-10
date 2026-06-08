"use client";

import Image from "next/image";
import { assets } from "@/data/figma-assets";
import { SHORTFORM_PRODUCT_IMAGES } from "@/data/shortform-product-images";
import type { ShortformItem } from "@/lib/types";

const TABS = ["추천", "랭킹", "팔로잉"] as const;

type ShortformPlayerProps = {
  item: ShortformItem;
  variant?: "full" | "preview";
  activeTab?: (typeof TABS)[number];
};

export default function ShortformPlayer({
  item,
  variant = "full",
  activeTab = "추천",
}: ShortformPlayerProps) {
  const poster = item.previewPosterUrl ?? item.posterUrl;
  const products = item.products.slice(0, 3);
  const productImages = SHORTFORM_PRODUCT_IMAGES[item.style];

  if (variant === "preview") {
    return (
      <div
        className="relative mx-auto w-[182px] overflow-hidden rounded-sm bg-[#c3c3c3]"
        style={{ aspectRatio: "941 / 1672" }}
      >
        {item.videoUrl ? (
          <video
            className="h-full w-full object-contain"
            src={item.videoUrl}
            poster={item.posterUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <Image
            src={poster}
            alt="숏폼 미리보기"
            fill
            className="object-contain"
            sizes="182px"
            unoptimized
          />
        )}
        <Image
          src={assets.shortformMuteSm}
          alt=""
          width={10}
          height={10}
          unoptimized
          className="absolute right-1.5 top-1.5"
        />
      </div>
    );
  }

  const videoUrl = item.videoUrl;

  return (
    <div className="relative h-[659px] w-full overflow-hidden rounded-[20px] bg-neutral-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="h-full w-full object-cover object-center"
          src={videoUrl}
          poster={item.posterUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

      <div className="absolute left-[35px] top-4 flex items-center gap-3">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              className={`text-xl font-semibold ${
                isActive
                  ? "rounded-[20px] bg-black px-3 py-2 text-white"
                  : "pt-2 text-black"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="absolute top-[457px] left-[342px] flex h-fit w-[50px] flex-col items-center gap-4">
        <Image
          src={assets.shortformPointBadge}
          alt="포인트받기"
          width={81}
          height={30}
          className="absolute top-[-31px] left-[-1px] h-auto w-[81px]"
          unoptimized
        />
        <Image src={assets.shortformFollow} alt="팔로우" width={27} height={27} />
        <Image src={assets.shortformMute} alt="음소거" width={27} height={27} />
        <Image src={assets.shortformShare} alt="공유" width={27} height={27} />
        <Image src={assets.shortformLike} alt="좋아요" width={27} height={27} />
      </div>

      <div className="absolute top-[463px] left-[22px] h-fit w-fit">
        <div className="flex items-center gap-2">
          <Image
            src={assets.shortformAvatar}
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-base font-bold text-white">
            {item.creatorHandle}
          </span>
        </div>
        <p className="text-base font-bold text-white">{item.style} 스타일</p>
      </div>

      <div className="absolute bottom-6 left-[22px] flex gap-1">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative h-[98px] overflow-hidden rounded-sm"
            style={{ width: index === 1 ? 62 : 61 }}
          >
            <Image
              src={productImages.thumbnails[index]}
              alt={product.name}
              width={index === 1 ? 62 : 61}
              height={98}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="relative h-[98px] w-[61px] overflow-hidden rounded-sm">
          <Image
            src={productImages.more}
            alt="더보기"
            width={61}
            height={98}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
