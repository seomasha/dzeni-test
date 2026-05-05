'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

const serviceImages = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85',  // manicure
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85',  // facial
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85',  // makeup
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=85',  // hair
  'https://images.unsplash.com/photo-1591019479261-1a103585c559?w=800&q=85',  // waxing/spa
  'https://images.unsplash.com/photo-1571736772567-9a8d2b9b4e30?w=800&q=85',  // lashes/brows
]

const serviceTints = [
  'from-blush/60',
  'from-peach/60',
  'from-pink/60',
  'from-lavender/70',
  'from-mint/60',
  'from-blush/60',
]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="section bg-soft-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-pink/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-lavender/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={serviceImages[i]}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${serviceTints[i]} via-transparent to-transparent`} />
                {/* Floating icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display text-2xl text-taupe-dark mb-3 group-hover:text-rose-deep transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-taupe text-sm leading-relaxed font-light mb-6">{item.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-blush">
                  <span className="font-script text-rose-deep text-xl">{item.price}</span>
                  <a
                    href="#booking"
                    className="text-xs text-taupe hover:text-rose-deep transition-colors tracking-widest uppercase flex items-center gap-1.5 group/link"
                  >
                    Rezerviši
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
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
