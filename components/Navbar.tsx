'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, locale, toggleLocale } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-medium tracking-widest text-taupe-dark">SILK</span>
          <span className="font-script text-base text-rose-deep -mt-1">studio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-taupe-dark hover:text-rose-deep transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="text-xs font-medium tracking-widest text-taupe-dark hover:text-rose-deep transition-colors border border-taupe-dark/20 hover:border-rose-deep px-3 py-1.5 rounded-full"
          >
            {locale === 'bs' ? 'EN' : 'BS'}
          </button>
          <a href="#booking" className="btn-primary text-sm py-2.5">
            {t.nav.book}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-taupe-dark"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blush px-6 py-6 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-taupe-dark hover:text-rose-deep transition-colors text-sm tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-blush">
            <button onClick={toggleLocale} className="text-xs font-medium text-taupe-dark hover:text-rose-deep border border-taupe-dark/20 px-3 py-1.5 rounded-full">
              {locale === 'bs' ? 'EN' : 'BS'}
            </button>
            <a href="#booking" className="btn-primary text-sm py-2" onClick={() => setMenuOpen(false)}>
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
