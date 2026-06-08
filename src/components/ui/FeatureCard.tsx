import Image from "next/image";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  tall?: boolean;
};

export default function FeatureCard({
  icon,
  title,
  description,
  tall = false,
}: FeatureCardProps) {
  return (
    <div
      className={`flex items-start gap-4 rounded-3xl border border-[rgba(143,143,144,0.28)] bg-white px-4 py-4 ${tall ? "min-h-[85px]" : "min-h-[73px]"}`}
    >
      <Image
        src={icon}
        alt=""
        width={50}
        height={50}
        unoptimized
        className="shrink-0"
      />
      <div className="min-w-0 pt-0.5">
        <p className="text-[17px] text-black">{title}</p>
        <p className="mt-0.5 text-sm leading-snug text-[rgba(0,0,0,0.7)]">
          {description}
        </p>
      </div>
    </div>
  );
}
