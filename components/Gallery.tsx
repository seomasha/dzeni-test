'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85', alt: 'Manicure', span: 'md:col-span-2 md:row-span-2', height: 'h-[460px] md:h-full' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85', alt: 'Makeup', span: '', height: 'h-[220px]' },
  { src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=85', alt: 'Hair', span: '', height: 'h-[220px]' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=85', alt: 'Facial', span: '', height: 'h-[220px]' },
  { src: 'https://images.unsplash.com/photo-1571736772567-9a8d2b9b4e30?w=600&q=85', alt: 'Lashes', span: '', height: 'h-[220px]' },
  { src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=85', alt: 'Nails', span: 'md:col-span-2', height: 'h-[220px]' },
]

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery

  return (
    <section id="gallery" className="section bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">{g.label}</p>
          <h2 className="section-heading mb-5">{g.heading}</h2>
          <p className="section-subtitle">{g.subtitle}</p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${img.span} ${img.height} relative rounded-3xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/0 to-transparent group-hover:from-rose-deep/30 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-script text-white text-xl drop-shadow-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
