type Risk = 'low' | 'medium' | 'high'
type Action = 'create' | 'modify' | 'destroy'

interface Change {
  action: Action
  resource: string
  summary: string
  risk: Risk
}

const changes: Change[] = [
  {
    action: 'modify',
    resource: 'aws_rds_cluster.payments',
    summary: 'engine 15.4 → 16.2, in-place',
    risk: 'medium',
  },
  {
    action: 'create',
    resource: 'aws_security_group_rule.api_ingress',
    summary: 'allow 443 from load balancer',
    risk: 'low',
  },
  {
    action: 'destroy',
    resource: 'aws_s3_bucket.legacy_exports',
    summary: '2.1 TB, read by 1 service',
    risk: 'high',
  },
  {
    action: 'modify',
    resource: 'kubernetes_deployment.checkout',
    summary: 'replicas 3 → 5',
    risk: 'low',
  },
]

const actionStyles: Record<Action, { symbol: string; className: string }> = {
  create: { symbol: '+', className: 'bg-mint-400/15 text-mint-600 dark:text-mint-400' },
  modify: { symbol: '~', className: 'bg-amber-400/15 text-amber-600 dark:text-amber-400' },
  destroy: { symbol: '−', className: 'bg-rose-400/15 text-rose-600 dark:text-rose-400' },
}

const riskStyles: Record<Risk, string> = {
  low: 'border-mint-400/30 text-mint-600 dark:text-mint-400',
  medium: 'border-amber-400/40 text-amber-700 dark:text-amber-400',
  high: 'border-rose-400/40 text-rose-600 dark:text-rose-400',
}

const RISK_SCORE = 42
const RING_RADIUS = 26
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

/** Illustrative Fluxwell pull-request review, drawn entirely with HTML, CSS and SVG. */
export function ProductMockup() {
  return (
    <figure className="relative min-w-0">
      <figcaption className="sr-only">
        Illustration of a Fluxwell review on a pull request: four infrastructure changes with risk
        labels, an overall risk score of 42 out of 100, a cost increase of 212 dollars a month and
        12 of 12 policy checks passing.
      </figcaption>

      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -inset-y-8 -z-10 bg-[radial-gradient(60%_60%_at_50%_40%,rgb(124_108_246/0.35),transparent_70%)] blur-2xl dark:bg-[radial-gradient(60%_60%_at_50%_40%,rgb(124_108_246/0.45),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="border-line bg-surface/80 overflow-hidden rounded-2xl border shadow-[0_30px_80px_-30px_rgb(15_18_35/0.35)] ring-1 ring-white/5 backdrop-blur-xl dark:shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]"
      >
        {/* Window chrome */}
        <div className="border-line relative flex items-center gap-3 overflow-hidden border-b px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-rose-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="bg-mint-400/80 size-2.5 rounded-full" />
          </div>
          <p className="text-subtle truncate font-mono text-[11px] sm:text-xs">
            platform/infra · PR #482 · Upgrade payments database
          </p>
          <span className="via-brand-500/15 motion-safe:animate-scan absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent to-transparent" />
        </div>

        <div className="bg-line grid grid-cols-1 gap-px sm:grid-cols-[11rem_minmax(0,1fr)]">
          {/* Summary column */}
          <div className="bg-line grid grid-cols-3 gap-px sm:grid-cols-1">
            <div className="bg-surface flex flex-col items-center justify-center gap-1 p-3 sm:flex-row sm:justify-start sm:gap-3 sm:p-4">
              <svg viewBox="0 0 64 64" className="size-12 -rotate-90 sm:size-14">
                <circle
                  cx="32"
                  cy="32"
                  r={RING_RADIUS}
                  className="stroke-line fill-none"
                  strokeWidth="6"
                />
                <circle
                  cx="32"
                  cy="32"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="url(#risk-ring)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_CIRCUMFERENCE * (1 - RISK_SCORE / 100)}
                />
                <defs>
                  <linearGradient id="risk-ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#2dd4bf" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center sm:text-left">
                <p className="text-ink text-lg leading-none font-semibold sm:text-xl">
                  {RISK_SCORE}
                </p>
                <p className="text-subtle mt-1 text-[11px]">Risk score</p>
              </div>
            </div>
            <div className="bg-surface flex flex-col justify-center p-3 text-center sm:p-4 sm:text-left">
              <p className="text-ink text-lg leading-none font-semibold sm:text-xl">+$212</p>
              <p className="text-subtle mt-1 text-[11px]">Cost / month</p>
            </div>
            <div className="bg-surface flex flex-col justify-center p-3 text-center sm:p-4 sm:text-left">
              <p className="text-ink text-lg leading-none font-semibold sm:text-xl">12/12</p>
              <p className="text-subtle mt-1 text-[11px]">Policies passed</p>
            </div>
          </div>

          {/* Change list */}
          <div className="bg-surface">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <p className="text-ink text-xs font-medium">4 changes</p>
              <p className="text-subtle text-[11px]">Sorted by blast radius</p>
            </div>
            <ul className="divide-line divide-y">
              {changes.map((change) => {
                const action = actionStyles[change.action]
                return (
                  <li key={change.resource} className="flex items-center gap-3 px-4 py-3">
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-md font-mono text-sm ${action.className}`}
                    >
                      {action.symbol}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-ink truncate font-mono text-[12px]">{change.resource}</p>
                      <p className="text-subtle truncate text-[11px]">{change.summary}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium capitalize ${riskStyles[change.risk]}`}
                    >
                      {change.risk}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating bot comment */}
      <div
        aria-hidden="true"
        className="border-line bg-surface/90 motion-safe:animate-float mx-auto mt-4 flex w-fit max-w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:absolute sm:-right-6 sm:-bottom-9 sm:mt-0 sm:max-w-[calc(100%-2rem)]"
      >
        <span className="from-brand-400 to-mint-400 grid size-7 shrink-0 place-items-center rounded-full bg-linear-to-br text-[11px] font-semibold text-white">
          F
        </span>
        <div className="min-w-0">
          <p className="text-ink truncate text-xs font-medium">Fluxwell commented</p>
          <p className="text-subtle truncate text-[11px]">
            Review the bucket delete, the rest is safe
          </p>
        </div>
      </div>
    </figure>
  )
}
