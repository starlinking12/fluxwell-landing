import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Faq } from './components/sections/Faq'
import { Features } from './components/sections/Features'
import { FinalCta } from './components/sections/FinalCta'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { LogoStrip } from './components/sections/LogoStrip'
import { Pricing } from './components/sections/Pricing'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    <div id="top" className="overflow-x-clip">
      <a
        href="#main"
        className="focus:bg-surface focus:text-ink sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
