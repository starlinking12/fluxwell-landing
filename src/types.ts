import type { IconName } from './components/ui/Icon'

export interface NavLink {
  label: string
  href: `#${string}`
}

export interface Feature {
  icon: IconName
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
  detail: string
}

export type BillingCycle = 'monthly' | 'annual'

export interface Plan {
  name: string
  tagline: string
  /** Price per user per month, or `null` for "talk to us" plans. */
  price: Record<BillingCycle, number> | null
  cta: string
  features: string[]
  highlighted?: boolean
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

export interface Faq {
  question: string
  answer: string
}

export interface CustomerLogo {
  name: string
  mark: 'hex' | 'wave' | 'peak' | 'orbit' | 'grid' | 'spark'
}
