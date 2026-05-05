'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Obrve & trepavice', mdSpan: 'md:col-span-2 md:row-span-2', mdHeight: 'md:h-full' },
  { src: '/images/gallery-2.jpg', alt: 'Trepavice', mdSpan: '', mdHeight: 'md:h-[220px]' },
  { src: '/images/gallery-3.jpg', alt: 'Njega lica', mdSpan: '', mdHeight: 'md:h-[220px]' },
  { src: '/images/gallery-4.jpg', alt: 'Nail art', mdSpan: '', mdHeight: 'md:h-[220px]' },
  { src: '/images/gallery-5.jpg', alt: 'Šminkanje', mdSpan: '', mdHeight: 'md:h-[220px]' },
  { src: '/images/gallery-6.jpg', alt: 'Friziranje', mdSpan: 'md:col-span-2', mdHeight: 'md:h-[260px]' },
  { src: '/images/gallery-7.jpg', alt: 'Glamur', mdSpan: 'md:col-span-2', mdHeight: 'md:h-[260px]' },
]

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery

  return (
    <section id="gallery" className="section bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-blush/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">{g.label}</p>
          <h2 className="section-heading mb-5">{g.heading}</h2>
          <p className="section-subtitle">{g.subtitle}</p>
        </motion.div>

        {/* Mobile: uniform 2-col grid. Desktop: asymmetric. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`${img.mdSpan} h-[200px] sm:h-[240px] ${img.mdHeight} relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-taupe-dark/0 group-hover:from-taupe-dark/40 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-script text-white text-base md:text-xl drop-shadow-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mt-14"
        >
          <p className="text-taupe text-sm font-light">
            Pratite nas na Instagramu{' '}
            <a href="#" className="font-script text-rose-deep text-lg hover:text-rose transition-colors">
              @silkstudio.ba
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
