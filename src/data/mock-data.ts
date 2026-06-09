import type { Brand, Product, ShortformItem, StyleName, SwipeImage } from "@/lib/types";

export const STYLE_DESCRIPTIONS: Record<StyleName, string> = {
  미니멀:
    "절제된 라인과 중성적인 컬러를 선호하는 스타일이에요. 단순하지만 세련된 무드로 어떤 상황에서도 품격 있게 완성돼요.",
  포멀:
    "단정하면서도 부드러운 실루엣을 선호하는 스타일이에요. 격식 있는 자리부터 일상까지 흐트러짐 없이 완성돼요.",
  캐주얼:
    "편안한 핏과 자연스러운 컬러를 선호하는 스타일이에요. 힘을 뺀 듯한 무드지만 센스 있는 데일리룩으로 완성돼요.",
  페미닌:
    "깔끔한 실루엣과 부드러운 컬러를 선호하는 스타일이에요. 과하지 않지만 감도 있는 데일리룩과 잘 어울려요.",
};

export const STYLE_COLORS: Record<StyleName, string> = {
  미니멀: "#6B7280",
  포멀: "#1E3A5F",
  페미닌: "#D4A5A5",
  캐주얼: "#8B9A6B",
};

export const STYLE_HASHTAGS: Record<StyleName, string> = {
  미니멀: "미니멀 룩 #케이블니트 #레이어드 셔츠 #플레어 스커트 #숄더백 #데일리룩 #하객룩",
  포멀: "포멀 룩 #슈트셋업 #더블자켓 #스트라이프 #화이트셔츠 #세미와이드 #직장룩",
  캐주얼: "캐주얼 룩 #프린팅티셔츠 #와이드데님 #숄더백 #스니커즈 #데일리룩",
  페미닌: "페미닌 룩 #플라워탑 #롱스커트 #퓨어무드 #데일리룩 #여리핏 #러블리룩",
};

export const SWIPE_IMAGES: SwipeImage[] = [
  {
    id: "m1",
    style: "미니멀",
    label: "미니멀 코디 1",
    imageUrl: "/images/swipe/minimal-1.png",
    color: "#E5E7EB",
  },
  {
    id: "m2",
    style: "미니멀",
    label: "미니멀 코디 2",
    imageUrl: "/images/swipe/minimal-2.png",
    color: "#D1D5DB",
  },
  {
    id: "m3",
    style: "미니멀",
    label: "미니멀 코디 3",
    imageUrl: "/images/swipe/minimal-3.png",
    color: "#9CA3AF",
  },
  {
    id: "f1",
    style: "포멀",
    label: "포멀 코디 1",
    imageUrl: "/images/swipe/formal-1.png",
    color: "#BFDBFE",
  },
  {
    id: "f2",
    style: "포멀",
    label: "포멀 코디 2",
    imageUrl: "/images/swipe/formal-2.png",
    color: "#93C5FD",
  },
  {
    id: "f3",
    style: "포멀",
    label: "포멀 코디 3",
    imageUrl: "/images/swipe/formal-3.png",
    color: "#60A5FA",
  },
  {
    id: "p1",
    style: "페미닌",
    label: "페미닌 코디 1",
    imageUrl: "/images/swipe/feminine-1.png",
    color: "#FBCFE8",
  },
  {
    id: "p2",
    style: "페미닌",
    label: "페미닌 코디 2",
    imageUrl: "/images/swipe/feminine-2.png",
    color: "#F9A8D4",
  },
  {
    id: "p3",
    style: "페미닌",
    label: "페미닌 코디 3",
    imageUrl: "/images/swipe/feminine-3.png",
    color: "#F472B6",
  },
  {
    id: "c1",
    style: "캐주얼",
    label: "캐주얼 코디 1",
    imageUrl: "/images/swipe/casual-1.png",
    color: "#D9F99D",
  },
  {
    id: "c2",
    style: "캐주얼",
    label: "캐주얼 코디 2",
    imageUrl: "/images/swipe/casual-2.png",
    color: "#BEF264",
  },
  {
    id: "c3",
    style: "캐주얼",
    label: "캐주얼 코디 3",
    imageUrl: "/images/swipe/casual-3.png",
    color: "#A3E635",
  },
];

export const BEST_PRODUCTS: Product[] = [
  {
    id: "b1",
    name: "소프트 카라 블라우스",
    brand: "아티드",
    imageUrl: "/images/best/b1.png",
    price: 40170,
    originalPrice: 59000,
    discountRate: 31,
    rating: 4.9,
    reviewCount: 821,
    likeCount: "9,999+",
    category: "상의",
  },
  {
    id: "b2",
    name: "레이스 트리밍 미디 스커트",
    brand: "아티드",
    imageUrl: "/images/best/b2.png",
    price: 43070,
    originalPrice: 59000,
    discountRate: 27,
    rating: 4.8,
    reviewCount: 612,
    likeCount: "9,999+",
    category: "하의",
  },
  {
    id: "b3",
    name: "리넨 루즈 니트",
    brand: "망고매니플리즈",
    imageUrl: "/images/best/b3.png",
    price: 49680,
    originalPrice: 69000,
    discountRate: 28,
    rating: 4.8,
    reviewCount: 1256,
    likeCount: "9,999+",
    category: "상의",
  },
  {
    id: "b4",
    name: "드로스트링 와이드 팬츠",
    brand: "망고매니플리즈",
    imageUrl: "/images/best/b4.png",
    price: 49680,
    originalPrice: 69000,
    discountRate: 28,
    rating: 4.8,
    reviewCount: 900,
    likeCount: "9,999+",
    category: "하의",
  },
  {
    id: "b5",
    name: "소프트 브이넥 가디건",
    brand: "망고매니플리즈",
    imageUrl: "/images/best/b5.png",
    price: 42280,
    originalPrice: 59000,
    discountRate: 28,
    rating: 4.9,
    reviewCount: 759,
    likeCount: "9,999+",
    category: "상의",
  },
  {
    id: "b6",
    name: "플라워 머메이드 스커트",
    brand: "망고매니플리즈",
    imageUrl: "/images/best/b6.png",
    price: 55300,
    originalPrice: 79000,
    discountRate: 30,
    rating: 4.8,
    reviewCount: 699,
    likeCount: "9,999+",
    category: "하의",
  },
  {
    id: "b7",
    name: "하트 자수 스트라이프 카라티",
    brand: "아티드",
    imageUrl: "/images/best/b7.png",
    price: 33810,
    originalPrice: 49000,
    discountRate: 31,
    rating: 4.8,
    reviewCount: 643,
    likeCount: "9,999+",
    category: "상의",
  },
  {
    id: "b8",
    name: "워시드 와이드 데님 팬츠",
    brand: "아티드",
    imageUrl: "/images/best/b8.png",
    price: 49680,
    originalPrice: 69000,
    discountRate: 28,
    rating: 4.8,
    reviewCount: 956,
    likeCount: "9,999+",
    category: "하의",
  },
  {
    id: "b9",
    name: "스트라이프 코튼 셔츠",
    brand: "아티드",
    imageUrl: "/images/best/b9.png",
    price: 33810,
    originalPrice: 49000,
    discountRate: 31,
    rating: 4.8,
    reviewCount: 733,
    likeCount: "9,999+",
    category: "상의",
  },
  {
    id: "b10",
    name: "라이트 와이드 데님 팬츠",
    brand: "아티드",
    imageUrl: "/images/best/b10.png",
    price: 49680,
    originalPrice: 69000,
    discountRate: 28,
    rating: 4.9,
    reviewCount: 1248,
    likeCount: "9,999+",
    category: "하의",
  },
];

const STYLE_PRODUCTS: Record<StyleName, Product[]> = {
  미니멀: [
    {
      id: "mp1",
      name: "울 블렌드 오버핏 코트",
      brand: "TIME",
      imageUrl: "/images/home/products/minimal-1.png",
      price: 189000,
      discountRate: 15,
      rating: 4.9,
      reviewCount: 312,
      category: "아우터",
      color: "#E5E7EB",
    },
    {
      id: "mp2",
      name: "코튼 크루넥 니트",
      brand: "LE",
      imageUrl: "/images/home/products/minimal-2.png",
      price: 89000,
      discountRate: 10,
      rating: 4.8,
      reviewCount: 198,
      category: "상의",
      color: "#D1D5DB",
    },
    {
      id: "mp3",
      name: "와이드 슬랙스",
      brand: "SYSTEM",
      imageUrl: "/images/home/products/minimal-3.png",
      price: 129000,
      discountRate: 20,
      rating: 4.7,
      reviewCount: 445,
      category: "하의",
      color: "#9CA3AF",
    },
  ],
  포멀: [
    {
      id: "fp1",
      name: "더블 브레스티드 자켓",
      brand: "MICHAA",
      imageUrl: "/images/home/products/formal-1.png",
      price: 259000,
      discountRate: 25,
      rating: 4.9,
      reviewCount: 156,
      category: "아우터",
      color: "#BFDBFE",
    },
    {
      id: "fp2",
      name: "스트라이프 셔츠",
      brand: "JJ JIGOTT",
      imageUrl: "/images/home/products/formal-2.png",
      price: 79000,
      discountRate: 12,
      rating: 4.8,
      reviewCount: 289,
      category: "상의",
      color: "#93C5FD",
    },
    {
      id: "fp3",
      name: "세미 와이드 팬츠",
      brand: "SJYP",
      imageUrl: "/images/home/products/formal-3.png",
      price: 119000,
      discountRate: 18,
      rating: 4.7,
      reviewCount: 201,
      category: "하의",
      color: "#60A5FA",
    },
  ],
  페미닌: [
    {
      id: "pp1",
      name: "루시 러플 스커트",
      brand: "로렌데이",
      imageUrl: "/images/home/products/feminine-1.png",
      price: 89000,
      discountRate: 22,
      rating: 4.9,
      reviewCount: 367,
      category: "하의",
      color: "#FBCFE8",
    },
    {
      id: "pp2",
      name: "잔꽃 블라우스",
      brand: "라비엘로",
      imageUrl: "/images/home/products/feminine-2.png",
      price: 69000,
      discountRate: 15,
      rating: 4.8,
      reviewCount: 234,
      category: "상의",
      color: "#F9A8D4",
    },
    {
      id: "pp3",
      name: "레이스 가디건",
      brand: "클로에딘",
      imageUrl: "/images/home/products/feminine-3.png",
      price: 78000,
      discountRate: 30,
      rating: 4.9,
      reviewCount: 412,
      category: "상의",
      color: "#F472B6",
    },
  ],
  캐주얼: [
    {
      id: "cp1",
      name: "그래픽 프린팅 티셔츠",
      brand: "STUDIO TOMBOY",
      imageUrl: "/images/home/products/casual-1.png",
      price: 49000,
      discountRate: 10,
      rating: 4.7,
      reviewCount: 521,
      category: "상의",
      color: "#D9F99D",
    },
    {
      id: "cp2",
      name: "워시드 와이드 데님",
      brand: "KUHO",
      imageUrl: "/images/home/products/casual-2.png",
      price: 138000,
      discountRate: 20,
      rating: 4.8,
      reviewCount: 678,
      category: "하의",
      color: "#BEF264",
    },
    {
      id: "cp3",
      name: "캔버스 숄더백",
      brand: "STAND OIL",
      imageUrl: "/images/home/products/casual-3.png",
      price: 68000,
      discountRate: 5,
      rating: 4.9,
      reviewCount: 892,
      category: "가방",
      color: "#A3E635",
    },
  ],
};

export const STYLE_BRANDS: Record<StyleName, Brand[]> = {
  미니멀: [
    { id: "mb1", name: "MONO FORM", description: "절제된 실루엣의 모던 클래식", style: "미니멀", imageUrl: "/images/home/brands/minimal-1.png" },
    { id: "mb2", name: "NU ETUDE", description: "미니멀 라이프스타일 브랜드", style: "미니멀", imageUrl: "/images/home/brands/minimal-2.png" },
    { id: "mb3", name: "ATELIER NOIR", description: "세련된 오피스 룩의 정석", style: "미니멀", imageUrl: "/images/home/brands/minimal-3.png" },
  ],
  포멀: [
    { id: "fb1", name: "VÉRITÉ", description: "우아한 오피스 룩의 대표", style: "포멀", imageUrl: "/images/home/brands/formal-1.png" },
    { id: "fb2", name: "LUMIÈRE", description: "단정한 실루엣의 포멀웨어", style: "포멀", imageUrl: "/images/home/brands/formal-2.png" },
    { id: "fb3", name: "RECOUR", description: "모던 포멀의 새로운 기준", style: "포멀", imageUrl: "/images/home/brands/formal-3.png" },
  ],
  페미닌: [
    { id: "pb1", name: "Fleurette", description: "로맨틱 무드의 페미닌 룩", style: "페미닌", imageUrl: "/images/home/brands/feminine-1.png" },
    { id: "pb2", name: "ma chère", description: "부드러운 컬러의 데일리룩", style: "페미닌", imageUrl: "/images/home/brands/feminine-2.png" },
    { id: "pb3", name: "L’onde", description: "여성스러운 실루엣의 정수", style: "페미닌", imageUrl: "/images/home/brands/feminine-3.png" },
  ],
  캐주얼: [
    { id: "cb1", name: "DAY NOTE", description: "캐주얼의 자유로운 무드", style: "캐주얼", imageUrl: "/images/home/brands/casual-1.png" },
    { id: "cb2", name: "PLAIN ROOM", description: "편안한 데님 스타일", style: "캐주얼", imageUrl: "/images/home/brands/casual-2.png" },
    { id: "cb3", name: "SOFT WEEK", description: "데일리 액세서리의 감성", style: "캐주얼", imageUrl: "/images/home/brands/casual-3.png" },
  ],
};

const HOME_CONTENT_IMAGES: Record<StyleName, string[]> = {
  미니멀: [
    "/images/home/contents/minimal-1.png",
    "/images/home/contents/minimal-2.png",
    "/images/home/contents/minimal-3.png",
  ],
  포멀: [
    "/images/home/contents/formal-1.png",
    "/images/home/contents/formal-2.png",
    "/images/home/contents/formal-3.png",
  ],
  페미닌: [
    "/images/home/contents/feminine-1.png",
    "/images/home/contents/feminine-2.png",
    "/images/home/contents/feminine-3.png",
  ],
  캐주얼: [
    "/images/home/contents/casual-1.png",
    "/images/home/contents/casual-2.png",
    "/images/home/contents/casual-3.png",
  ],
};

const SHORTFORM_POSTERS: Record<StyleName, string> = {
  미니멀: "/images/shortform/poster-minimal.png",
  포멀: "/images/shortform/poster-formal.png",
  페미닌: "/images/shortform/poster-feminine.png",
  캐주얼: "/images/shortform/poster-casual.png",
};

const SHORTFORM_VIDEOS: Record<StyleName, string> = {
  미니멀: "/videos/shortform/minimal.mp4",
  포멀: "/videos/shortform/formal.mp4",
  페미닌: "/videos/shortform/feminine.mp4",
  캐주얼: "/videos/shortform/casual.mp4",
};

export const SHORTFORM_ITEMS: ShortformItem[] = [
  {
    id: "sf-m1",
    style: "미니멀",
    creator: "TIME",
    creatorHandle: "Fashionnn1",
    description: STYLE_HASHTAGS.미니멀,
    hashtags: STYLE_HASHTAGS.미니멀,
    color: "#E5E7EB",
    posterUrl: SHORTFORM_POSTERS.미니멀,
    previewPosterUrl: SHORTFORM_POSTERS.미니멀,
    videoUrl: SHORTFORM_VIDEOS.미니멀,
    products: STYLE_PRODUCTS.미니멀,
    extraProductCount: 4,
  },
  {
    id: "sf-f1",
    style: "포멀",
    creator: "MICHAA",
    creatorHandle: "Fashionnn1",
    description: STYLE_HASHTAGS.포멀,
    hashtags: STYLE_HASHTAGS.포멀,
    color: "#BFDBFE",
    posterUrl: SHORTFORM_POSTERS.포멀,
    previewPosterUrl: SHORTFORM_POSTERS.포멀,
    videoUrl: SHORTFORM_VIDEOS.포멀,
    products: STYLE_PRODUCTS.포멀,
    extraProductCount: 4,
  },
  {
    id: "sf-p1",
    style: "페미닌",
    creator: "DEW E DEW E",
    creatorHandle: "Fashionnn1",
    description: STYLE_HASHTAGS.페미닌,
    hashtags: STYLE_HASHTAGS.페미닌,
    color: "#FBCFE8",
    posterUrl: SHORTFORM_POSTERS.페미닌,
    previewPosterUrl: SHORTFORM_POSTERS.페미닌,
    videoUrl: SHORTFORM_VIDEOS.페미닌,
    products: STYLE_PRODUCTS.페미닌,
    extraProductCount: 4,
  },
  {
    id: "sf-c1",
    style: "캐주얼",
    creator: "STUDIO TOMBOY",
    creatorHandle: "Fashionnn1",
    description: STYLE_HASHTAGS.캐주얼,
    hashtags: STYLE_HASHTAGS.캐주얼,
    color: "#D9F99D",
    posterUrl: SHORTFORM_POSTERS.캐주얼,
    previewPosterUrl: SHORTFORM_POSTERS.캐주얼,
    videoUrl: SHORTFORM_VIDEOS.캐주얼,
    products: STYLE_PRODUCTS.캐주얼,
    extraProductCount: 4,
  },
];

export function getProductsByStyle(style: StyleName): Product[] {
  return STYLE_PRODUCTS[style];
}

export function getBrandsByStyle(style: StyleName): Brand[] {
  return STYLE_BRANDS[style];
}

export function getShortformsByStyle(style: StyleName): ShortformItem[] {
  return SHORTFORM_ITEMS.filter((item) => item.style === style);
}

export function getHomeContentsByStyle(style: StyleName): string[] {
  return HOME_CONTENT_IMAGES[style];
}

export function getShortformPreview(style: StyleName): ShortformItem {
  return SHORTFORM_ITEMS.find((item) => item.style === style) ?? SHORTFORM_ITEMS[0];
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR");
}
