import type { StyleName } from "@/lib/types";

export type ShortformProductImages = {
  thumbnails: [string, string, string];
  more: string;
};

export const SHORTFORM_PRODUCT_IMAGES: Record<StyleName, ShortformProductImages> = {
  미니멀: {
    thumbnails: [
      "/images/shortform/products/minimal-1.png",
      "/images/shortform/products/minimal-2.png",
      "/images/shortform/products/minimal-3.png",
    ],
    more: "/images/shortform/products/minimal-more.png",
  },
  포멀: {
    thumbnails: [
      "/images/shortform/products/formal-1.png",
      "/images/shortform/products/formal-2.png",
      "/images/shortform/products/formal-3.png",
    ],
    more: "/images/shortform/products/formal-more.png",
  },
  페미닌: {
    thumbnails: [
      "/images/shortform/products/feminine-1.png",
      "/images/shortform/products/feminine-2.png",
      "/images/shortform/products/feminine-3.png",
    ],
    more: "/images/shortform/products/feminine-more.png",
  },
  캐주얼: {
    thumbnails: [
      "/images/shortform/products/casual-1.png",
      "/images/shortform/products/casual-2.png",
      "/images/shortform/products/casual-3.png",
    ],
    more: "/images/shortform/products/casual-more.png",
  },
};
