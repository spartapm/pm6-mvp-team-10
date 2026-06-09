"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SWIPE_IMAGES } from "@/data/mock-data";
import {
  analyzeSwipeResult,
  buildInitialDeck,
  getNinthImage,
} from "@/lib/onboarding";
import {
  completeOnboarding,
  DEFAULT_SESSION,
  getSession,
  saveSession,
} from "@/lib/storage";
import type {
  OnboardingResult,
  SwipeChoice,
  SwipeImage,
  SwipeRecord,
  UserSession,
} from "@/lib/types";

type OnboardingContextValue = {
  session: UserSession;
  deck: SwipeImage[];
  records: SwipeRecord[];
  currentIndex: number;
  currentCard: SwipeImage | null;
  totalCards: number;
  startSwipe: () => void;
  submitChoice: (choice: SwipeChoice) => OnboardingResult | null;
  resetSwipe: () => void;
  updateSession: (patch: Partial<UserSession>) => void;
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

const TOTAL_CARDS = 9;

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<UserSession>(DEFAULT_SESSION);
  const [deck, setDeck] = useState<SwipeImage[]>([]);
  const [records, setRecords] = useState<SwipeRecord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSession(getSession());
  }, []);

  const startSwipe = useCallback(() => {
    setDeck(buildInitialDeck(SWIPE_IMAGES));
    setRecords([]);
    setCurrentIndex(0);
  }, []);

  const resetSwipe = useCallback(() => {
    startSwipe();
  }, [startSwipe]);

  const updateSession = useCallback((patch: Partial<UserSession>) => {
    saveSession(patch);
    setSession((prev) => ({ ...prev, ...patch }));
  }, []);

  const submitChoice = useCallback(
    (choice: SwipeChoice): OnboardingResult | null => {
      const card = deck[currentIndex];
      if (!card) return null;

      const nextRecords: SwipeRecord[] = [
        ...records,
        { imageId: card.id, style: card.style, choice },
      ];
      const nextIndex = currentIndex + 1;

      let nextDeck = deck;
      if (nextIndex === 8 && deck.length === 8) {
        nextDeck = [...deck, getNinthImage(SWIPE_IMAGES, nextRecords)];
      }

      setRecords(nextRecords);
      setDeck(nextDeck);
      setCurrentIndex(nextIndex);

      if (nextIndex >= TOTAL_CARDS) {
        const result = analyzeSwipeResult(nextRecords);
        completeOnboarding(result);
        setSession(getSession());
        return result;
      }

      return null;
    },
    [currentIndex, deck, records],
  );

  const currentCard = useMemo(() => {
    if (currentIndex >= TOTAL_CARDS) return null;
    if (currentIndex < deck.length) return deck[currentIndex];
    return null;
  }, [currentIndex, deck]);

  const value = useMemo(
    () => ({
      session,
      deck,
      records,
      currentIndex,
      currentCard,
      totalCards: TOTAL_CARDS,
      startSwipe,
      submitChoice,
      resetSwipe,
      updateSession,
    }),
    [
      session,
      deck,
      records,
      currentIndex,
      currentCard,
      startSwipe,
      submitChoice,
      resetSwipe,
      updateSession,
    ],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
}
