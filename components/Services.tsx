'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

const serviceImages = [
  '/images/service-manikir.jpg',
  '/images/service-njega-lica.jpg',
  '/images/service-sminkanje.jpg',
  '/images/service-friziranje.jpg',
  '/images/service-depilacija.jpg',
  '/images/service-trepavice.jpg',
]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="section bg-soft-gradient relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blush/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-peach/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">{s.label}</p>
          <h2 className="section-heading mb-5 whitespace-pre-line">{s.heading}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {s.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image — no emoji icon */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={serviceImages[i]}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taupe-dark/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display text-2xl text-taupe-dark mb-3 group-hover:text-rose-deep transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-taupe text-sm leading-relaxed font-light mb-6">{item.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-section">
                  <span className="font-script text-rose-deep text-xl">{item.price}</span>
                  <a
                    href="#booking"
                    className="text-xs text-taupe hover:text-rose-deep transition-colors tracking-widest uppercase flex items-center gap-1.5 group/link"
                  >
                    Rezerviši
                    <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
