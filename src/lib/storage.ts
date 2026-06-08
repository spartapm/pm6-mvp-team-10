import type { OnboardingResult, UserSession } from "./types";

const SESSION_KEY = "group10_mvp_session";

export const DEFAULT_SESSION: UserSession = {
  isLoggedIn: false,
  nickname: "송희",
  onboardingCompleted: false,
  skippedOnboarding: false,
  result: null,
};

export function getSession(): UserSession {
  if (typeof window === "undefined") return DEFAULT_SESSION;

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return DEFAULT_SESSION;
    return { ...DEFAULT_SESSION, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SESSION;
  }
}

export function saveSession(session: Partial<UserSession>) {
  if (typeof window === "undefined") return;
  const next = { ...getSession(), ...session };
  localStorage.setItem(SESSION_KEY, JSON.stringify(next));
}

export function completeOnboarding(result: OnboardingResult) {
  saveSession({
    onboardingCompleted: true,
    skippedOnboarding: false,
    result,
  });
}

export function skipOnboarding() {
  saveSession({
    skippedOnboarding: true,
    onboardingCompleted: true,
    result: null,
  });
}

export function resetOnboarding() {
  saveSession({
    onboardingCompleted: false,
    skippedOnboarding: false,
    result: null,
  });
}
