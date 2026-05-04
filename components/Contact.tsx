'use client'

import { useLang } from '@/lib/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="py-24 md:py-32 bg-warm-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">{c.label}</p>
          <h2 className="section-heading">{c.heading}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="card space-y-8">
            {[
              { label: c.address_label, icon: '📍', content: [c.address] },
              { label: c.phone_label, icon: '📞', content: [c.phone] },
              { label: c.email_label, icon: '✉️', content: [c.email] },
              { label: c.hours_label, icon: '🕐', content: c.hours },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-rose font-medium tracking-widest uppercase mb-1">{item.label}</p>
                  {item.content.map((line, j) => (
                    <p key={j} className="text-warm-dark text-sm font-light">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="flex gap-4 pt-4 border-t border-warm-light">
              {[
                { name: 'Instagram', href: '#', icon: (
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                ) },
                { name: 'Facebook', href: '#', icon: (
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                ) },
              ].map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 bg-warm-light rounded-full flex items-center justify-center text-warm-mid hover:bg-rose hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.072!2d18.4117!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775903c4de2e069%3A0xe0d0a24f2879ebf8!2sFerhadija%2C%20Sarajevo!5e0!3m2!1sbs!2sba!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silk Studio lokacija"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
