export type StyleName = "미니멀" | "포멀" | "페미닌" | "캐주얼";

export type SwipeChoice = "like" | "dislike";

export type OnboardingResultType = "normal" | "all-liked" | "all-disliked";

export interface SwipeImage {
  id: string;
  style: StyleName;
  label: string;
  imageUrl: string;
  color: string;
}

export interface SwipeRecord {
  imageId: string;
  style: StyleName;
  choice: SwipeChoice;
}

export interface StyleRatio {
  style: StyleName;
  count: number;
  percent: number;
}

export interface OnboardingResult {
  type: OnboardingResultType;
  primaryStyle: StyleName | null;
  ratios: StyleRatio[];
  randomStyle?: StyleName;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  imageUrl?: string;
  price: number;
  discountRate: number;
  rating: number;
  reviewCount: number;
  coupon?: string;
  category: string;
  color?: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  style: StyleName;
  imageUrl?: string;
}

export interface ShortformItem {
  id: string;
  style: StyleName;
  creator: string;
  creatorHandle: string;
  description: string;
  hashtags: string;
  color: string;
  posterUrl: string;
  previewPosterUrl?: string;
  videoUrl?: string;
  products: Product[];
  extraProductCount?: number;
}

export interface UserSession {
  isLoggedIn: boolean;
  nickname: string;
  onboardingCompleted: boolean;
  skippedOnboarding: boolean;
  result: OnboardingResult | null;
}
