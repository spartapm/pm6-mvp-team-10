"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useOnboarding } from "@/context/onboarding-context";
import { getSessionHomeStyle, isBestPath, routes } from "@/lib/routes";
import type { StyleName } from "@/lib/types";

const HOME_TABS = ["추천", "베스트", "신상", "브랜드", "이벤트"] as const;

type HomeTab = (typeof HOME_TABS)[number];

const TAB_HREF: Partial<Record<HomeTab, string>> = {
  추천: routes.home(),
  베스트: routes.best,
};

function getActiveTab(pathname: string): HomeTab {
  if (isBestPath(pathname)) return "베스트";
  return "추천";
}

export default function HomeTabNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { session } = useOnboarding();
  const activeTab = getActiveTab(pathname);

  const styleParam = searchParams.get("style") as StyleName | null;
  const sessionStyle = getSessionHomeStyle(session.result);
  const homeHref = routes.home(styleParam ?? sessionStyle);

  return (
    <div className="mt-3 flex gap-5 overflow-x-auto border-b border-[#ededed] px-5">
      {HOME_TABS.map((tab) => {
        const isActive = tab === activeTab;
        const href = tab === "추천" ? homeHref : TAB_HREF[tab];
        const className = `shrink-0 pb-3 text-lg ${
          isActive
            ? "border-b-2 border-[#604cd1] font-normal text-black"
            : "text-black"
        }`;

        if (href) {
          return (
            <Link key={tab} href={href} className={className}>
              {tab}
            </Link>
          );
        }

        return (
          <button key={tab} type="button" className={className}>
            {tab}
          </button>
        );
      })}
    </div>
  );
}
