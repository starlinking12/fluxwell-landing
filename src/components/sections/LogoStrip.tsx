import type { ReactNode } from 'react'
import { customerLogos } from '../../data/content'
import type { CustomerLogo } from '../../types'
import { Container } from '../ui/Container'

const marks: Record<CustomerLogo['mark'], ReactNode> = {
  hex: <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />,
  wave: <path d="M2 14c3-4 5-4 7 0s4 4 6 0 5-4 7 0" fill="none" strokeWidth="2.5" />,
  peak: <path d="M2 20L9 6l4 7 3-4 6 11z" />,
  orbit: (
    <>
      <circle cx="12" cy="12" r="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" strokeWidth="1.8" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" opacity="0.45" />
    </>
  ),
  spark: <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z" />,
}

export function LogoStrip() {
  return (
    <section aria-labelledby="logos-title" className="border-line bg-surface-2/40 border-y py-12">
      <Container>
        <h2 id="logos-title" className="text-subtle text-center text-sm">
          Trusted by platform teams at fast-moving companies
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {customerLogos.map((logo) => (
            <li
              key={logo.name}
              className="text-muted flex items-center justify-center gap-2 opacity-80 transition hover:opacity-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6 fill-current stroke-current"
                aria-hidden="true"
              >
                {marks[logo.mark]}
              </svg>
              <span className="text-[15px] font-semibold tracking-tight">{logo.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
