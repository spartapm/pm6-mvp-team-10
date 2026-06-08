import Image from "next/image";
import { assets } from "@/data/figma-assets";

type LogoProps = {
  size?: "sm" | "md";
};

export default function Logo({ size = "md" }: LogoProps) {
  const src = size === "sm" ? assets.logoSm : assets.logo;
  const width = size === "sm" ? 116 : 116;
  const height = size === "sm" ? 15 : 15;

  return (
    <Image
      src={src}
      alt="W CONCEPT"
      width={width}
      height={height}
      unoptimized
      className="h-auto w-[116px]"
      priority
    />
  );
}
