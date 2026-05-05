'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-24 md:pt-0">
      {/* Soft decorative blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-peach/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blush/20 blur-3xl pointer-events-none" />

      {/* Floating dots */}
      <motion.div
        className="absolute top-1/3 left-[12%] w-2.5 h-2.5 rounded-full bg-rose/40"
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-[18%] w-2 h-2 rounded-full bg-gold/60"
        animate={{ y: [0, 14, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center py-12">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <div className="ornament mb-6">
            <span className="font-script text-rose-deep text-2xl">Silk Studio</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-taupe-dark leading-[1.05] mb-6">
            {t.hero.tagline}
          </h1>

          <p className="text-taupe text-lg font-light leading-relaxed mb-10 max-w-md">
            {t.hero.subtitle}
          </p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#booking" className="btn-primary px-10">{t.hero.cta_book}</a>
            <a href="#services" className="btn-outline px-10">{t.hero.cta_services}</a>
          </motion.div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-[280px] h-[380px] md:w-[400px] md:h-[540px] lg:w-[460px] lg:h-[600px]">
            {/* Decorative rings */}
            <div className="absolute -inset-4 border border-rose/25 rounded-[200px] rotate-[8deg] pointer-events-none" />
            <div className="absolute -inset-8 border border-gold/20 rounded-[200px] rotate-[-4deg] pointer-events-none" />

            <div className="relative w-full h-full rounded-[200px] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Silk Studio"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Floating rating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 bg-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2"
            >
              <span className="text-gold text-lg">★</span>
              <span className="font-serif text-sm text-taupe-dark">5.0 / 1200+</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-rose/50" />
        <svg className="w-4 h-4 text-rose/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
