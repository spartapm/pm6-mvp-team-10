"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import AppShell from "@/components/layout/AppShell";
import HomeTabNav from "@/components/layout/HomeTabNav";
import PageHeader from "@/components/layout/PageHeader";
import { BEST_PRODUCTS, formatPrice } from "@/data/mock-data";

const CATEGORIES = [
  "전체",
  "의류",
  "가방",
  "신발",
  "액세서리",
  "스포츠/액티브",
  "뷰티",
  "라이프",
] as const;

export default function BestPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("전체");

  const filtered =
    activeCategory === "전체"
      ? BEST_PRODUCTS
      : BEST_PRODUCTS.filter((product) => product.category === activeCategory);

  const products = filtered.length > 0 ? filtered : BEST_PRODUCTS;

  return (
    <AppShell>
      <main className="pb-6">
        <PageHeader />

        <Suspense fallback={<div className="mt-3 h-10" />}>
          <HomeTabNav />
        </Suspense>

        <div className="mt-4 flex gap-2 overflow-x-auto px-3 pb-2 text-sm">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 whitespace-nowrap ${
                activeCategory === category ? "font-bold text-black" : "text-neutral-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3 px-3">
          {products.map((product) => (
            <article key={product.id} className="relative">
              <div className="relative aspect-[193/220] overflow-hidden rounded bg-neutral-100">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                ) : null}
              </div>
              <button
                type="button"
                className="absolute right-2 top-2 text-neutral-300"
                aria-label="찜"
              >
                ♡
              </button>
              <p className="mt-2 text-[8px] text-neutral-500">{product.brand}</p>
              <p className="text-xs">{product.name}</p>
              <div className="mt-1 flex items-center gap-1 text-xs">
                <span className="font-semibold text-rose-500">
                  {product.discountRate}%
                </span>
                <span className="font-semibold">{formatPrice(product.price)}원</span>
              </div>
              <p className="text-[10px] text-neutral-400 line-through">
                {formatPrice(Math.round(product.price / (1 - product.discountRate / 100)))}원
              </p>
              <p className="text-[10px] text-neutral-500">
                ★ {product.rating} ({product.reviewCount.toLocaleString()})
              </p>
              <div className="mt-1 flex gap-1">
                <span className="rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] text-white">
                  10% 쿠폰
                </span>
                <span className="rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] text-white">
                  무료배송
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </AppShell>
  );
}
