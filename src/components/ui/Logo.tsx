interface LogoProps {
  className?: string
}

/** Fluxwell wordmark. The mark is a single gradient stroke suggesting a smoothed change curve. */
export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <defs>
          <linearGradient id="fluxwell-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c6cf6" />
            <stop offset="1" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#fluxwell-mark)" />
        <path
          d="M9 21c3-8 5-10 7-10s3 4 4 6 2 3 3 3"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[17px]">Fluxwell</span>
    </span>
  )
}
