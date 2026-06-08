import { formatPrice } from "@/data/mock-data";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <article className={`rounded-xl border border-neutral-100 bg-white ${compact ? "p-3" : "p-4"}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-neutral-400">{product.brand}</p>
          <p className={`truncate font-medium text-neutral-900 ${compact ? "text-sm" : "text-base"}`}>
            {product.name}
          </p>
          <div className="mt-1 flex items-center gap-2">
            {product.discountRate > 0 ? (
              <span className="text-xs font-semibold text-rose-500">
                {product.discountRate}%
              </span>
            ) : null}
            <span className="text-sm font-semibold text-neutral-900">
              {formatPrice(product.price)}원
            </span>
          </div>
          {!compact ? (
            <p className="mt-1 text-xs text-neutral-400">
              ★ {product.rating} ({product.reviewCount.toLocaleString()})
              {product.coupon ? ` · ${product.coupon}` : ""}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          className="shrink-0 text-lg text-neutral-300"
          aria-label="찜"
        >
          ♡
        </button>
      </div>
    </article>
  );
}
