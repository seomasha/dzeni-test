'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=80"
          alt="Silk Studio salon"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-dark/70 via-warm-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl">
          <div className="ornament mb-6 justify-start">
            <span className="text-gold text-xs tracking-[0.3em] font-medium uppercase">Silk Studio</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            {t.hero.tagline}
          </h1>

          <p className="text-white/80 text-lg font-light leading-relaxed mb-10 max-w-md">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#booking" className="btn-primary px-10 py-3.5">
              {t.hero.cta_book}
            </a>
            <a
              href="#services"
              className="border border-white/60 text-white px-10 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              {t.hero.cta_services}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/60" />
        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
