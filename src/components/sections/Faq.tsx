import { faqs } from '../../data/content'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered" />

        <div className="divide-line border-line mt-14 divide-y border-y">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="text-ink hover:text-brand-600 dark:hover:text-brand-300 flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium transition [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="border-line text-muted grid size-8 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-open:rotate-45">
                  <Icon name="plus" className="size-4" />
                </span>
              </summary>
              <p className="text-muted pr-12 pb-6 text-[15px] leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
