import { useEffect, useState } from 'react'
import { navLinks } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-line bg-canvas/80 backdrop-blur-xl backdrop-saturate-150'
          : 'border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="Fluxwell home" className="text-ink">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:bg-surface-2 hover:text-ink rounded-full px-3.5 py-2 text-sm transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href="#pricing">Get started</ButtonLink>
          </div>
          <button
            type="button"
            className="border-line text-ink grid size-10 place-items-center rounded-full border md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-line border-t md:hidden">
          <Container className="py-4">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="text-ink hover:bg-surface-2 block rounded-lg px-2 py-3 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink href="#pricing" size="lg" onClick={closeMenu} className="mt-3 w-full">
              Get started
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
