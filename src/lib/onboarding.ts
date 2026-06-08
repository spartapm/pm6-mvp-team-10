import type {
  OnboardingResult,
  OnboardingResultType,
  StyleName,
  StyleRatio,
  SwipeChoice,
  SwipeImage,
  SwipeRecord,
} from "./types";

const STYLES: StyleName[] = ["미니멀", "포멀", "페미닌", "캐주얼"];

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickRandomStyle(): StyleName {
  return STYLES[Math.floor(Math.random() * STYLES.length)];
}

export function pickRandomFromStyles(styles: StyleName[]): StyleName {
  if (styles.length === 0) return pickRandomStyle();
  return styles[Math.floor(Math.random() * styles.length)];
}

export function buildInitialDeck(images: SwipeImage[]): SwipeImage[] {
  const required = STYLES.flatMap((style) =>
    images.filter((image) => image.style === style).slice(0, 2),
  );
  return shuffle(required);
}

export function getNinthImage(
  images: SwipeImage[],
  records: SwipeRecord[],
): SwipeImage {
  const likes = records.filter((record) => record.choice === "like");
  const styleCounts = STYLES.map((style) => ({
    style,
    count: likes.filter((like) => like.style === style).length,
  }));
  const maxCount = Math.max(...styleCounts.map((item) => item.count), 0);

  let targetStyles: StyleName[];
  if (maxCount === 0) {
    targetStyles = STYLES;
  } else {
    targetStyles = styleCounts
      .filter((item) => item.count === maxCount)
      .map((item) => item.style);
  }

  const targetStyle = pickRandomFromStyles(targetStyles);
  const candidates = images.filter((image) => image.style === targetStyle);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function countLikesByStyle(
  records: SwipeRecord[],
  choice: SwipeChoice,
): Record<StyleName, number> {
  return STYLES.reduce(
    (acc, style) => {
      acc[style] = records.filter(
        (record) => record.style === style && record.choice === choice,
      ).length;
      return acc;
    },
    {} as Record<StyleName, number>,
  );
}

export function buildStyleRatios(records: SwipeRecord[]): StyleRatio[] {
  const likes = records.filter((record) => record.choice === "like");
  const total = likes.length || 1;

  return STYLES.map((style) => {
    const count = likes.filter((like) => like.style === style).length;
    return {
      style,
      count,
      percent: Math.round((count / total) * 100),
    };
  })
    .filter((ratio) => ratio.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
}

export function resolvePrimaryStyle(records: SwipeRecord[]): StyleName {
  const likeCounts = countLikesByStyle(records, "like");
  const max = Math.max(...Object.values(likeCounts));
  const topStyles = STYLES.filter((style) => likeCounts[style] === max);
  return pickRandomFromStyles(topStyles);
}

export function analyzeSwipeResult(records: SwipeRecord[]): OnboardingResult {
  const likes = records.filter((record) => record.choice === "like");
  const dislikes = records.filter((record) => record.choice === "dislike");

  let type: OnboardingResultType = "normal";
  if (likes.length === records.length) type = "all-liked";
  if (dislikes.length === records.length) type = "all-disliked";

  if (type === "all-liked") {
    const randomStyle = pickRandomStyle();
    return {
      type,
      primaryStyle: randomStyle,
      randomStyle,
      ratios: buildStyleRatios(records),
    };
  }

  if (type === "all-disliked") {
    return {
      type,
      primaryStyle: null,
      ratios: [],
    };
  }

  return {
    type,
    primaryStyle: resolvePrimaryStyle(records),
    ratios: buildStyleRatios(records),
  };
}
