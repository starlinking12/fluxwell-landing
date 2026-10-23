import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { ProductMockup } from '../visuals/ProductMockup'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] bg-[size:56px_56px]" />
        <div className="bg-brand-500/20 dark:bg-brand-500/25 absolute top-[-12rem] left-1/2 h-[32rem] w-[56rem] max-w-none -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <Container className="grid items-center gap-16 pt-14 pb-24 sm:pt-20 lg:grid-cols-2 lg:gap-12 lg:pt-24 lg:pb-32">
        <div className="min-w-0 text-center lg:text-left">
          <a
            href="#features"
            className="group border-line bg-surface/60 text-muted hover:border-brand-500/40 hover:text-ink inline-flex items-center gap-2 rounded-full border py-1 pr-3 pl-1 text-xs backdrop-blur transition"
          >
            <span className="bg-brand-500/15 text-brand-700 dark:text-brand-300 rounded-full px-2 py-0.5 font-medium">
              New
            </span>
            Cost deltas on every pull request
            <Icon name="arrowRight" className="size-3.5 transition group-hover:translate-x-0.5" />
          </a>

          <h1
            id="hero-title"
            className="text-ink mt-6 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[3.25rem] xl:text-[3.6rem]"
          >
            Ship infrastructure changes{' '}
            <span className="from-brand-500 via-brand-400 to-mint-400 bg-linear-to-r bg-clip-text text-transparent">
              without the 2&nbsp;a.m.&nbsp;surprises
            </span>
          </h1>

          <p className="text-muted mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg lg:mx-0">
            Fluxwell reads every Terraform and Kubernetes change, scores its blast radius and
            explains it in plain English, right in the pull request. Reviewers see what matters in
            seconds.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <ButtonLink href="#pricing" size="lg">
              Start free
              <Icon
                name="arrowRight"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink href="#how-it-works" size="lg" variant="secondary">
              See how it works
            </ButtonLink>
          </div>

          <p className="text-subtle mt-5 text-sm">Free for up to 3 contributors. No credit card.</p>
        </div>

        <ProductMockup />
      </Container>
    </section>
  )
}
