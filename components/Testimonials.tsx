'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=85',
]

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-gold" viewBox="0 0 20 20">
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
    <section id="testimonials" className="section bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-pink/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-peach/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">{r.label}</p>
          <h2 className="section-heading whitespace-pre-line">{r.heading}</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {r.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="card p-8 flex flex-col relative"
            >
              {/* Big quote mark */}
              <div className="absolute top-5 right-7 font-display text-7xl text-blush leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <StarRating />

              <blockquote className="font-serif text-taupe-dark leading-relaxed text-lg flex-1 italic mb-6 relative z-10">
                {item.text}
              </blockquote>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-5 border-t border-blush">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blush flex-shrink-0">
                  <Image src={avatars[i]} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-display text-base text-taupe-dark">{item.name}</div>
                  <div className="text-xs text-taupe flex items-center gap-1.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
