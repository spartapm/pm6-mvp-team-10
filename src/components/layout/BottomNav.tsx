"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/data/figma-assets";
import { useOnboarding } from "@/context/onboarding-context";
import { getSessionHomeStyle, isBestPath, isHomePath, routes } from "@/lib/routes";

export default function BottomNav() {
  const pathname = usePathname();
  const { session } = useOnboarding();
  const homeStyle = getSessionHomeStyle(session.result);
  const homeHref = routes.home(homeStyle);

  const navItems = [
    { href: homeHref, label: "홈", icon: assets.navHome, disabled: false },
    { href: routes.best, label: "카테고리", icon: assets.navCategory, disabled: false },
    { href: homeHref, label: "검색", icon: assets.navSearch, disabled: true },
    { href: homeHref, label: "찜", icon: assets.navLike, disabled: true },
    { href: homeHref, label: "마이", icon: assets.navMy, disabled: true },
  ] as const;

  return (
    <nav className="sticky bottom-0 z-20 border-t border-neutral-100 bg-white px-2 pb-[env(safe-area-inset-bottom)]">
      <ul className="grid h-[50px] grid-cols-5 items-center">
        {navItems.map((item) => {
          const active =
            !item.disabled &&
            (item.href === routes.best
              ? isBestPath(pathname)
              : isHomePath(pathname));

          const icon = (
            <Image
              src={item.icon}
              alt={item.label}
              width={21}
              height={21}
              unoptimized={item.label === "홈"}
              priority={item.label === "홈"}
              className={active ? "opacity-100" : "opacity-50"}
            />
          );

          return (
            <li key={item.label} className="flex justify-center">
              {item.disabled ? (
                <span
                  className="flex cursor-default flex-col items-center pointer-events-none"
                  aria-disabled="true"
                >
                  {icon}
                </span>
              ) : (
                <Link href={item.href} className="flex flex-col items-center">
                  {icon}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
