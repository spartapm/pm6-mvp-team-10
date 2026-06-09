"use client";

import { PostHogProvider as PHProvider, usePostHog } from "@posthog/react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { Suspense, useEffect, type ReactNode } from "react";
import {
  isPostHogEnabled,
  isValidPostHogKey,
  POSTHOG_HOST,
  POSTHOG_KEY,
} from "@/lib/posthog";

let posthogInitialized = false;

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const client = usePostHog();

  useEffect(() => {
    if (!client || !pathname) return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    client.capture("$pageview", {
      $current_url: url,
    });
  }, [client, pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!isPostHogEnabled || !POSTHOG_KEY || posthogInitialized) return;

    if (!isValidPostHogKey(POSTHOG_KEY)) {
      console.error(
        "[PostHog] NEXT_PUBLIC_POSTHOG_KEY must be a Project API Key (phc_...). " +
          "Personal API Key(phx_...) is not supported in the browser.",
      );
      return;
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") {
          ph.debug();
        }
      },
    });

    posthogInitialized = true;
  }, []);

  if (!isPostHogEnabled || !isValidPostHogKey(POSTHOG_KEY)) {
    return children;
  }

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
