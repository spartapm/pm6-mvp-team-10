import Image from "next/image";
import Logo from "@/components/ui/Logo";
import { assets } from "@/data/figma-assets";

const HEADER_ICONS = [
  { src: assets.headerIcon1, alt: "검색" },
  { src: assets.headerIcon2, alt: "장바구니" },
] as const;

export default function PageHeader() {
  return (
    <header className="flex items-center justify-between px-5 pt-3">
      <Logo size="sm" />
      <div className="flex gap-3">
        {HEADER_ICONS.map((icon) => (
          <Image
            key={icon.src}
            src={icon.src}
            alt={icon.alt}
            width={24}
            height={24}
          />
        ))}
      </div>
    </header>
  );
}
