'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80"
                alt="Silk Studio interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6 max-w-[180px]">
              <div className="text-3xl font-serif font-light text-rose mb-1">{a.stat2_num}</div>
              <div className="text-xs text-warm-mid leading-tight">{a.stat2_label}</div>
            </div>
            {/* Gold decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/40 rounded-full" />
          </div>

          {/* Text side */}
          <div>
            <p className="section-label mb-4">{a.label}</p>
            <h2 className="section-heading mb-8 whitespace-pre-line">{a.heading}</h2>

            <p className="text-warm-mid leading-relaxed mb-5 font-light">{a.text1}</p>
            <p className="text-warm-mid leading-relaxed mb-10 font-light">{a.text2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warm-light">
              {[
                { num: a.stat1_num, label: a.stat1_label },
                { num: a.stat2_num, label: a.stat2_label },
                { num: a.stat3_num, label: a.stat3_label },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-serif font-light text-rose mb-1">{stat.num}</div>
                  <div className="text-xs text-warm-mid leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
