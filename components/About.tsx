'use client'

import { useLang } from '@/lib/LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCountUp } from '@/lib/useCountUp'

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(target)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center px-2">
      <div className="font-display text-3xl sm:text-4xl md:text-6xl font-normal text-rose-deep mb-2 leading-none">
        {value}
        <span className="text-rose">{suffix}</span>
      </div>
      <div className="text-[10px] sm:text-xs text-taupe tracking-[0.15em] sm:tracking-widest uppercase leading-tight">{label}</div>
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section bg-cream relative overflow-hidden">
      {/* Soft decorative shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-blush/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-peach/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{a.label}</p>
          <h2 className="section-heading max-w-2xl mx-auto whitespace-pre-line">{a.heading}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-[120px] overflow-hidden shadow-xl">
              <Image
                src="/images/about.jpg"
                alt="Silk Studio team"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-rose/30 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-gold/40 rounded-full" />
            {/* Floating quote */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lg p-5 max-w-[200px]"
            >
              <p className="font-script text-rose-deep text-2xl leading-tight">
                {a.stat1_num}
              </p>
              <p className="text-xs text-taupe">{a.stat1_label}</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-taupe leading-[1.9] mb-5 font-light text-[17px]">{a.text1}</p>
            <p className="text-taupe leading-[1.9] font-light text-[17px]">{a.text2}</p>
          </motion.div>
        </div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="grid grid-cols-3 gap-3 sm:gap-6 pt-10 sm:pt-12 border-t border-blush"
        >
          <StatCounter target={5} suffix="+" label={a.stat1_label} />
          <StatCounter target={1200} suffix="+" label={a.stat2_label} />
          <StatCounter target={100} suffix="%" label={a.stat3_label} />
        </motion.div>
      </div>
    </section>
  )
}
