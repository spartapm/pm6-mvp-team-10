type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = (current / total) * 100;

  return (
    <div className="space-y-3">
      <p className="text-center text-[15px] text-black">
        {current} / {total}
      </p>
      <div className="relative mx-auto h-[7px] w-[269px] overflow-hidden rounded-full bg-[#d9d9d9]">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#8132e2] transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
