import { features } from '../../data/content'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow="Product"
          title="Everything your reviewers wish the plan output told them"
          description="Fluxwell turns raw infrastructure diffs into decisions: what changes, what it touches, what it costs and whether it is allowed."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="group border-line bg-surface hover:border-brand-500/30 relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgb(99_82_224/0.45)] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="bg-brand-500/10 absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
              />
              <span className="border-line bg-surface-2 text-brand-600 dark:text-brand-300 grid size-11 place-items-center rounded-xl border">
                <Icon name={feature.icon} className="size-[22px]" />
              </span>
              <h3 className="text-ink mt-5 text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted mt-2 text-[15px] leading-relaxed">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
