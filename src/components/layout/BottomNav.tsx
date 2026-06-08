"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/data/figma-assets";
import { isBestPath, isHomePath, routes } from "@/lib/routes";

const NAV_ITEMS = [
  { href: routes.home(), label: "홈", icon: assets.navHome },
  { href: routes.best, label: "카테고리", icon: assets.navCategory },
  { href: routes.home(), label: "검색", icon: assets.navSearch },
  { href: routes.home(), label: "찜", icon: assets.navLike },
  { href: routes.home(), label: "마이", icon: assets.navMy },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-20 border-t border-neutral-100 bg-white px-2 pb-[env(safe-area-inset-bottom)]">
      <ul className="grid h-[50px] grid-cols-5 items-center">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === routes.best
              ? isBestPath(pathname)
              : isHomePath(pathname);
          return (
            <li key={item.label} className="flex justify-center">
              <Link href={item.href} className="flex flex-col items-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={21}
                  height={21}
                  unoptimized={item.label === "홈"}
                  priority={item.label === "홈"}
                  className={active ? "opacity-100" : "opacity-50"}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
