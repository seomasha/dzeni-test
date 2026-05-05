'use client'

import { useLang } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="section bg-cream relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">{c.label}</p>
          <h2 className="section-heading">{c.heading}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="card p-6 sm:p-8 md:p-10 space-y-8"
          >
            {[
              { label: c.address_label, icon: '📍', content: [c.address] },
              { label: c.phone_label, icon: '📞', content: [c.phone] },
              { label: c.email_label, icon: '✉️', content: [c.email] },
              { label: c.hours_label, icon: '🕐', content: c.hours },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 bg-blush rounded-full flex items-center justify-center flex-shrink-0 text-base">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-rose-deep tracking-widest uppercase mb-1">{item.label}</p>
                  {item.content.map((line, j) => (
                    <p key={j} className="text-taupe-dark text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-4 border-t border-blush">
              {['Instagram', 'Facebook', 'TikTok'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="text-xs px-4 py-2 border border-blush rounded-full text-taupe hover:border-rose hover:text-rose-deep hover:bg-blush/30 transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden shadow-md h-[500px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.072!2d18.4117!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775903c4de2e069%3A0xe0d0a24f2879ebf8!2sFerhadija%2C%20Sarajevo!5e0!3m2!1sbs!2sba!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silk Studio lokacija"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
