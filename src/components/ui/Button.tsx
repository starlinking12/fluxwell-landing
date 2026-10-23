import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'inverse' | 'glass'
type Size = 'md' | 'lg'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  children: ReactNode
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition duration-200 ease-out active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-[0_8px_24px_-8px_rgb(99_82_224/0.7),inset_0_1px_0_rgb(255_255_255/0.2)] hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600',
  secondary:
    'border border-line bg-surface/70 text-ink backdrop-blur hover:border-brand-500/40 hover:bg-surface',
  /** For use on the always-dark final call-to-action panel. */
  inverse: 'bg-white text-[#0d0e17] hover:bg-white/90',
  glass: 'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}

/** Call-to-action rendered as a link, since every CTA on the page navigates. */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
