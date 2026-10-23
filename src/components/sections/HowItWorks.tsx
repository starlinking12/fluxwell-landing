import { steps } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="border-line bg-surface-2/40 relative border-y py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From install to first review in one coffee"
          description="No agents to run, no pipeline rewrite. Fluxwell plugs into the workflow your team already uses."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="via-brand-500/40 absolute top-6 right-[16%] left-[16%] hidden h-px bg-linear-to-r from-transparent to-transparent md:block"
          />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-5 md:flex-col md:items-center md:text-center"
              >
                <span className="border-brand-500/30 bg-canvas text-brand-600 dark:text-brand-300 relative grid size-12 shrink-0 place-items-center rounded-full border font-mono text-sm font-semibold shadow-[0_0_0_6px_var(--color-canvas)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-ink text-lg font-semibold tracking-tight md:mt-5">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-2 text-[15px] leading-relaxed">{step.description}</p>
                  <p className="text-subtle mt-3 text-sm">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
