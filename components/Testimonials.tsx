'use client'

import { useLang } from '@/lib/LanguageContext'

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const r = t.testimonials

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-warm-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">{r.label}</p>
          <h2 className="section-heading whitespace-pre-line">{r.heading}</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {r.items.map((item, i) => (
            <div key={i} className="card flex flex-col">
              <StarRating />
              <blockquote className="text-warm-mid font-light leading-relaxed text-sm flex-1 italic mb-6">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-warm-light">
                <div className="w-9 h-9 rounded-full bg-blush flex items-center justify-center text-rose font-serif text-sm font-medium">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-warm-dark font-medium text-sm">{item.name}</div>
                  <div className="text-warm-mid text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
