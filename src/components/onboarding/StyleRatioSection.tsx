import { STYLE_BAR_COLORS } from "@/lib/design-tokens";
import type { StyleRatio } from "@/lib/types";

type StyleRatioSectionProps = {
  ratios: StyleRatio[];
};

export default function StyleRatioSection({ ratios }: StyleRatioSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-base font-medium text-black">취향 비율</h2>
      <div className="mt-5 space-y-5">
        {ratios.map((ratio) => (
          <div key={ratio.style}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-base font-medium">{ratio.style}</span>
              <span className="text-base font-bold">{ratio.percent}%</span>
            </div>
            <div className="h-3.5 overflow-hidden rounded-full bg-[#f0f0f0]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${ratio.percent}%`,
                  backgroundColor: STYLE_BAR_COLORS[ratio.style],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
