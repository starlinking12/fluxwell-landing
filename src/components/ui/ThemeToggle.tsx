import { useTheme } from '../../hooks/useTheme'
import { Icon } from './Icon'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="border-line text-muted hover:border-brand-500/40 hover:text-ink grid size-10 place-items-center rounded-full border transition"
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="size-[18px]" />
    </button>
  )
}
