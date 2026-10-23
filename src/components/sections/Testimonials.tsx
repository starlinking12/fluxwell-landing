import { testimonials } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-line bg-surface-2/40 border-y py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          id="testimonials-title"
          eyebrow="Customers"
          title="Platform teams sleep better with Fluxwell"
        />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <figure className="border-line bg-surface flex h-full flex-col rounded-2xl border p-7">
                <svg
                  viewBox="0 0 24 24"
                  className="text-brand-500/60 size-7"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6a1 1 0 0 1 1-1h3V7zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-4a1 1 0 0 1 1-1h3V7z" />
                </svg>
                <blockquote className="text-ink mt-4 flex-1 text-[15px] leading-relaxed">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="border-line mt-6 flex items-center gap-3 border-t pt-5">
                  <span
                    aria-hidden="true"
                    className="from-brand-500 to-mint-600 grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br text-sm font-semibold text-white"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="text-sm">
                    <span className="text-ink block font-medium">{testimonial.name}</span>
                    <span className="text-subtle block">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="text-subtle mt-10 text-center text-xs">
          Fluxwell is a fictional company. Names, companies and quotes on this page are
          illustrative.
        </p>
      </Container>
    </section>
  )
}
