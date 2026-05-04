'use client'

import { useLang } from '@/lib/LanguageContext'

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="py-24 md:py-32 bg-warm-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">{s.label}</p>
          <h2 className="section-heading mb-4 whitespace-pre-line">{s.heading}</h2>
          <p className="text-warm-mid font-light max-w-md mx-auto">{s.subtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="card group cursor-default"
            >
              <div className="text-3xl mb-5">{item.icon}</div>
              <h3 className="font-serif text-xl font-medium text-warm-dark mb-3 group-hover:text-rose transition-colors duration-200">
                {item.name}
              </h3>
              <p className="text-warm-mid text-sm leading-relaxed font-light mb-6">{item.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-warm-light">
                <span className="text-rose font-medium text-sm">{item.price}</span>
                <a
                  href="#booking"
                  className="text-xs text-warm-mid hover:text-rose transition-colors tracking-wide underline underline-offset-4"
                >
                  Rezerviši →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
