import { useState } from 'react'
import { plans } from '../../data/content'
import type { BillingCycle, Plan } from '../../types'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

function billingNote(plan: Plan, cycle: BillingCycle): string {
  if (!plan.price) return 'Volume pricing, billed yearly'
  if (plan.price[cycle] === 0) return 'Free forever'
  return cycle === 'annual' ? 'Billed yearly' : 'Billed monthly'
}

function PlanCard({ plan, cycle }: { plan: Plan; cycle: BillingCycle }) {
  const highlighted = plan.highlighted === true

  return (
    <li
      className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${
        highlighted
          ? 'border-brand-500/50 bg-surface ring-brand-500/20 shadow-[0_30px_60px_-30px_rgb(99_82_224/0.55)] ring-1'
          : 'border-line bg-surface/60'
      }`}
    >
      {highlighted && (
        <p className="bg-brand-600 dark:bg-brand-500 absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-medium text-white">
          Most popular
        </p>
      )}

      <h3 className="text-ink text-lg font-semibold">{plan.name}</h3>
      <p className="text-muted mt-2 min-h-12 text-sm leading-relaxed">{plan.tagline}</p>

      <div className="mt-6">
        <p className="flex items-baseline gap-1.5">
          <span className="text-ink text-5xl font-semibold tracking-tight tabular-nums">
            {plan.price ? `$${plan.price[cycle]}` : 'Custom'}
          </span>
          {plan.price && plan.price[cycle] > 0 && (
            <span className="text-subtle text-sm">per user / month</span>
          )}
        </p>
        <p className="text-subtle mt-2 h-5 text-sm">{billingNote(plan, cycle)}</p>
      </div>

      <ButtonLink
        href="#cta"
        variant={highlighted ? 'primary' : 'secondary'}
        className="mt-7 w-full"
      >
        {plan.cta}
      </ButtonLink>

      <ul className="border-line mt-8 space-y-3 border-t pt-7 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="text-muted flex gap-3">
            <Icon
              name="check"
              className="text-mint-600 dark:text-mint-400 mt-px size-[18px] shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>
    </li>
  )
}

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>('annual')
  const isAnnual = cycle === 'annual'

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple pricing that scales with your team"
          description="Start free, upgrade when your reviews need more than previews. Every paid plan includes a 14-day trial."
        />

        <div className="mt-10 flex items-center justify-center gap-3 text-sm">
          <span className={isAnnual ? 'text-subtle' : 'text-ink font-medium'}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Bill yearly"
            onClick={() => setCycle(isAnnual ? 'monthly' : 'annual')}
            className={`border-line relative h-7 w-12 rounded-full border transition-colors ${
              isAnnual ? 'bg-brand-600 dark:bg-brand-500' : 'bg-surface-2'
            }`}
          >
            <span
              className={`absolute top-1/2 left-0.5 size-5 -translate-y-1/2 rounded-full bg-white shadow transition-transform duration-200 ${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={isAnnual ? 'text-ink font-medium' : 'text-subtle'}>
            Yearly{' '}
            <span className="bg-mint-400/15 text-mint-600 dark:text-mint-400 ml-1 rounded-full px-2 py-0.5 text-xs font-medium">
              Save 20%
            </span>
          </span>
        </div>

        <ul className="mx-auto mt-14 grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} cycle={cycle} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
