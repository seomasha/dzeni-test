'use client'

import { useLang } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const nav = t.nav

  const links = [
    { href: '#about', label: nav.about },
    { href: '#services', label: nav.services },
    { href: '#gallery', label: nav.gallery },
    { href: '#testimonials', label: nav.testimonials },
    { href: '#contact', label: nav.contact },
  ]

  return (
    <footer className="bg-warm-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="font-serif text-2xl font-light tracking-widest text-white">SILK</div>
              <div className="font-serif text-xs tracking-[0.35em] text-rose font-medium">STUDIO</div>
            </div>
            <p className="text-sm font-light leading-relaxed">{f.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-5">{f.links_heading}</h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-rose transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact brief */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-5">{f.social_heading}</h4>
            <div className="space-y-2 mb-6">
              <p className="text-sm">📍 {t.contact.address}</p>
              <p className="text-sm">📞 {t.contact.phone}</p>
              <p className="text-sm">✉️ {t.contact.email}</p>
            </div>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'TikTok'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="text-xs px-3 py-1.5 border border-white/20 rounded-full hover:border-rose hover:text-rose transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">{f.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
