import type { OnboardingResult, StyleName } from "./types";

export function getSessionHomeStyle(
  result: OnboardingResult | null | undefined,
): StyleName | null {
  if (!result || result.type === "all-disliked") return null;
  return result.primaryStyle ?? result.randomStyle ?? null;
}

export const routes = {
  home: (style?: StyleName | string | null) => {
    if (!style) return "/";
    return `/?style=${encodeURIComponent(style)}`;
  },
  best: "/best",
  onboarding: {
    root: "/onboarding",
    swipe: "/onboarding/swipe",
    result: "/onboarding/result",
    allLiked: "/onboarding/result/all-liked",
    allDisliked: "/onboarding/result/all-disliked",
  },
  shortform: {
    index: (style?: StyleName | string | null) => {
      if (!style) return "/shortform";
      return `/shortform?style=${encodeURIComponent(style)}`;
    },
    popup: (style?: StyleName | string | null) => {
      if (!style) return "/shortform/popup";
      return `/shortform/popup?style=${encodeURIComponent(style)}`;
    },
  },
} as const;

export function getOnboardingResultPath(result: OnboardingResult): string {
  if (result.type === "all-disliked") {
    return routes.onboarding.allDisliked;
  }
  if (result.type === "all-liked") {
    return routes.onboarding.allLiked;
  }
  return routes.onboarding.result;
}

export function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "/home";
}

export function isBestPath(pathname: string) {
  return pathname.startsWith(routes.best);
}
