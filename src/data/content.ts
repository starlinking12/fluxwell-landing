import type { CustomerLogo, Faq, Feature, NavLink, Plan, Step, Testimonial } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Product', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const customerLogos: CustomerLogo[] = [
  { name: 'Helix Freight', mark: 'hex' },
  { name: 'Tidepool', mark: 'wave' },
  { name: 'Quarryline', mark: 'peak' },
  { name: 'Novacraft', mark: 'orbit' },
  { name: 'Brightloom', mark: 'grid' },
  { name: 'Ardent', mark: 'spark' },
]

export const features: Feature[] = [
  {
    icon: 'diff',
    title: 'Readable plan previews',
    description:
      'Terraform, Pulumi and Kubernetes diffs rendered as a plain-English summary right inside the pull request. No more scrolling 4,000 lines of plan output.',
  },
  {
    icon: 'radar',
    title: 'Blast-radius scoring',
    description:
      'Fluxwell maps every resource to the services that depend on it and scores each change from 0 to 100, so reviewers know where to look first.',
  },
  {
    icon: 'shield',
    title: 'Policy guardrails',
    description:
      'Codify the rules your team already follows: no public buckets, no untagged databases, no Friday deletes. Violations block the merge with a clear reason.',
  },
  {
    icon: 'drift',
    title: 'Drift detection',
    description:
      'A nightly read-only scan compares live infrastructure with what is in git and opens a tidy pull request whenever someone changed things by hand.',
  },
  {
    icon: 'coin',
    title: 'Cost before merge',
    description:
      'See the monthly cost delta of every change next to the diff. Catch the accidental 64-core instance before finance does.',
  },
  {
    icon: 'ledger',
    title: 'Audit-ready history',
    description:
      'Every plan, approval and apply is recorded with who, what and why, and exports straight into your SOC 2 and ISO 27001 evidence.',
  },
]

export const steps: Step[] = [
  {
    title: 'Connect in five minutes',
    description: 'Install the GitHub or GitLab app and attach a read-only cloud role.',
    detail: 'Fluxwell never needs write access to production.',
  },
  {
    title: 'Open a pull request',
    description: 'Fluxwell runs the plan, scores the risk and comments with a clear summary.',
    detail: 'Typical analysis time: under 40 seconds.',
  },
  {
    title: 'Merge with confidence',
    description: 'Reviewers approve with full context, and the apply is logged automatically.',
    detail: 'Rollback notes are attached to every change.',
  },
]

export const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'For side projects and small teams getting started with IaC.',
    price: { monthly: 0, annual: 0 },
    cta: 'Start for free',
    features: [
      'Up to 3 contributors',
      'Plan previews on every PR',
      'Community policy packs',
      '7-day history',
    ],
  },
  {
    name: 'Team',
    tagline: 'For platform teams shipping infrastructure every day.',
    price: { monthly: 24, annual: 19 },
    cta: 'Start 14-day trial',
    highlighted: true,
    features: [
      'Unlimited contributors',
      'Blast-radius scoring',
      'Custom policy guardrails',
      'Drift detection and cost deltas',
      '1-year audit history',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For organisations with compliance and scale requirements.',
    price: null,
    cta: 'Talk to sales',
    features: [
      'Everything in Team',
      'SSO, SCIM and audit export',
      'Self-hosted runner option',
      'Dedicated support engineer',
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'We used to dread infra reviews. Now the risky line is highlighted before anyone opens the diff, and our change-failure rate dropped by half in one quarter.',
    name: 'Amara Okafor',
    role: 'Head of Platform',
    company: 'Helix Freight',
    initials: 'AO',
  },
  {
    quote:
      'The cost delta alone paid for Fluxwell in the first week. Someone tried to ship a GPU node pool to staging and the comment caught it instantly.',
    name: 'Daniel Reyes',
    role: 'Staff SRE',
    company: 'Tidepool',
    initials: 'DR',
  },
  {
    quote:
      'Our auditors asked for change evidence and I exported a year of approvals in two clicks. That used to be a two-week spreadsheet project.',
    name: 'Priya Natarajan',
    role: 'Security Lead',
    company: 'Brightloom',
    initials: 'PN',
  },
]

export const faqs: Faq[] = [
  {
    question: 'Does Fluxwell need write access to my cloud account?',
    answer:
      'No. Fluxwell runs plans with a read-only role you control. Applies stay in your existing pipeline, so production credentials never leave your environment.',
  },
  {
    question: 'Which tools and providers are supported?',
    answer:
      'Terraform, OpenTofu, Pulumi and Kubernetes manifests (including Helm and Kustomize) across AWS, Google Cloud and Azure. GitHub and GitLab are supported for pull requests.',
  },
  {
    question: 'How is the blast-radius score calculated?',
    answer:
      'Fluxwell builds a dependency graph from your state files and service metadata, then weighs each change by what it touches, whether it is destructive and how much traffic sits downstream.',
  },
  {
    question: 'Can we run Fluxwell inside our own network?',
    answer:
      'Yes. Enterprise plans include a self-hosted runner that executes plans in your VPC and only sends anonymised results back to the dashboard.',
  },
  {
    question: 'What happens when the trial ends?',
    answer:
      'You can pick a plan or drop back to Starter. Nothing is deleted, and there is no credit card required to begin.',
  },
]
