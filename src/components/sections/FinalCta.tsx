import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

export function FinalCta() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#0d0e17] px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_20%_0%,rgb(124_108_246/0.45),transparent),radial-gradient(40%_70%_at_90%_100%,rgb(45_212_191/0.3),transparent)]"
          />
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
          >
            Your next infrastructure change could be your calmest one
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-white/75 sm:text-lg">
            Connect a repository in five minutes and get your first Fluxwell review on the very next
            pull request.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#pricing" size="lg" variant="inverse">
              Start free
              <Icon
                name="arrowRight"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink href="mailto:sales@fluxwell.example" size="lg" variant="glass">
              Talk to sales
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
