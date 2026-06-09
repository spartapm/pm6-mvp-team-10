type IconProps = {
  className?: string;
  size?: number;
};

export function ShortformFollowIcon({ className, size = 27 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="4.5"
        y="4.5"
        width="18"
        height="18"
        rx="3.5"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 9v9M9 13.5h9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShortformMuteIcon({ className, size = 27 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M7.5 11.5v4h2.8l3.7 3.2V8.3l-3.7 3.2H7.5z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 10.8l3.5 3.5M21.7 10.8l-3.5 3.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShortformUnmuteIcon({ className, size = 27 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M8.5 11.5v4h3l4 3.5V8l-4 3.5h-3z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 11c.8.8.8 2.2 0 3M20.5 9c1.6 1.6 1.6 4.4 0 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShortformShareIcon({ className, size = 27 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="18.5" cy="6.5" r="2.5" stroke="white" strokeWidth="1.5" />
      <circle cx="7.5" cy="13.5" r="2.5" stroke="white" strokeWidth="1.5" />
      <circle cx="18.5" cy="20.5" r="2.5" stroke="white" strokeWidth="1.5" />
      <path
        d="M9.8 12.2l6.9-3.9M9.8 14.8l6.9 3.9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShortformLikeIcon({ className, size = 27 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M13.5 21.5s-7-4.4-7-9.2c0-2.5 2-4.3 4.5-4.3 1.4 0 2.7.7 3.5 1.8.8-1.1 2.1-1.8 3.5-1.8 2.5 0 4.5 1.8 4.5 4.3 0 4.8-7 9.2-7 9.2z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
