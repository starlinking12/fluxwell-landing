import { navLinks } from '../../data/content'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="border-line border-t py-12">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <a href="#top" aria-label="Fluxwell home" className="text-ink">
            <Logo />
          </a>
          <p className="text-muted mt-4 text-sm leading-relaxed">
            Change intelligence for infrastructure teams. A fictional product, designed as a
            portfolio piece.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-4 md:gap-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted hover:text-ink transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="border-line text-subtle mt-12 flex flex-col-reverse gap-4 border-t pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Fluxwell, Inc. (fictional). All rights reserved.</p>
        <a
          href="https://github.com/starlinking12/fluxwell-landing"
          className="hover:text-ink inline-flex items-center gap-2 transition"
        >
          <Icon name="github" className="size-4" />
          View source on GitHub
        </a>
      </Container>
    </footer>
  )
}
