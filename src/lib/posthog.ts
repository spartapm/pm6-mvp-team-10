import posthog from "posthog-js";

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();
export const POSTHOG_HOST = (
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com"
)
  .trim()
  .replace(/\/$/, "");

export const isPostHogEnabled = Boolean(POSTHOG_KEY);

export function isValidPostHogKey(key = POSTHOG_KEY): boolean {
  return Boolean(key?.startsWith("phc_"));
}

export function captureEvent(
  event: string,
  properties?: Record<string, unknown>,
) {
  if (!isPostHogEnabled) return;
  posthog.capture(event, properties);
}

export function identifyUser(
  distinctId: string,
  properties?: Record<string, unknown>,
) {
  if (!isPostHogEnabled) return;
  posthog.identify(distinctId, properties);
}

export function resetUser() {
  if (!isPostHogEnabled) return;
  posthog.reset();
}
