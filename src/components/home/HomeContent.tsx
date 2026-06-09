"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import HomeTabNav from "@/components/layout/HomeTabNav";
import PageHeader from "@/components/layout/PageHeader";
import {
  getBrandsByStyle,
  getHomeContentsByStyle,
  getProductsByStyle,
} from "@/data/mock-data";
import type { StyleName } from "@/lib/types";

export default function HomeContent() {
  const searchParams = useSearchParams();

  const styleParam = searchParams.get("style") as StyleName | null;
  const isPersonalized = Boolean(styleParam);
  const activeStyle: StyleName = styleParam ?? "미니멀";
  const products = getProductsByStyle(activeStyle);
  const brands = getBrandsByStyle(activeStyle);
  const homeContents = getHomeContentsByStyle(activeStyle);

  return (
    <AppShell>
      <main className="pb-6">
        <PageHeader />

        <HomeTabNav />

        {isPersonalized ? (
          <div className="mx-4 mt-3 flex items-center justify-between rounded-[10px] bg-[#efecfb] px-4 py-2">
            <p className="text-base font-medium text-[#5200b7]">
              {activeStyle} 취향에 맞춰 추천했어요.
            </p>
            <span className="text-lg font-bold text-[#6f2dc4]">{">"}</span>
          </div>
        ) : null}

        <section className="mt-6 px-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-base font-bold">
              방금 선택한 취향과 비슷한 상품
            </h2>
            <button type="button" className="text-sm text-[#787474]">
              더보기 {">"}
            </button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {products.map((product) => (
              <article key={product.id}>
                <div className="relative aspect-[106/140] overflow-hidden rounded-[10px]">
                  <Image
                    src={product.imageUrl!}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 text-[10px] font-bold leading-tight">
                  <p>{product.brand}</p>
                  <p>{product.name}</p>
                  <p>₩ {product.price.toLocaleString("ko-KR")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 px-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[15px] font-bold">
              이 스타일을 좋아한다면 이런 브랜드도 추천해요
            </h2>
            <button type="button" className="shrink-0 text-sm text-[#787474]">
              더보기 {">"}
            </button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {brands.map((brand) => (
              <article key={brand.id}>
                <div className="relative aspect-[106/110] overflow-hidden rounded-[10px]">
                  <Image
                    src={brand.imageUrl!}
                    alt={brand.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-[10px] font-bold">{brand.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 px-3 pb-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-base font-bold">취향에 맞는 스타일 콘텐츠</h2>
            <button type="button" className="text-sm text-[#787474]">
              더보기 {">"}
            </button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {homeContents.map((content, index) => (
              <div key={`${content}-${index}`} className="relative aspect-[106/148] overflow-hidden rounded-[10px]">
                <Image
                  src={content}
                  alt={`${activeStyle} 스타일 콘텐츠 ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
