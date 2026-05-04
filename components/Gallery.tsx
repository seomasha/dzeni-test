'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'

const images = [
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Manicure', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80', alt: 'Makeup', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80', alt: 'Hairstyle', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', alt: 'Facial', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&q=80', alt: 'Lashes', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80', alt: 'Nail art', span: 'col-span-1' },
]

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">{g.label}</p>
          <h2 className="section-heading mb-4">{g.heading}</h2>
          <p className="text-warm-mid font-light max-w-md mx-auto">{g.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/20 transition-all duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Instagram prompt */}
        <div className="text-center mt-12">
          <p className="text-warm-mid text-sm font-light">
            Pratite nas na Instagramu{' '}
            <a href="#" className="text-rose hover:underline underline-offset-4">
              @silkstudio.ba
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
