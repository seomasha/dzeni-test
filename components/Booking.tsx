'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'

interface FormState {
  name: string
  phone: string
  service: string
  date: string
  message: string
}

export default function Booking() {
  const { t } = useLang()
  const b = t.booking
  const f = b.form

  const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = '!'
    if (!form.phone.trim()) e.phone = '!'
    if (!form.service) e.service = '!'
    if (!form.date) e.date = '!'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setErrors({})
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-cream border rounded-2xl px-4 py-3 text-sm text-taupe-dark placeholder-taupe/60 outline-none transition-all duration-200 focus:border-rose focus:ring-2 focus:ring-rose/15 ${
      errors[field] ? 'border-red-300' : 'border-blush'
    }`

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="section bg-soft-gradient relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-blush/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="section-label mb-4">{b.label}</p>
          <h2 className="section-heading mb-5">{b.heading}</h2>
          <p className="section-subtitle">{b.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {[
              { icon: '📍', label: t.contact.address_label, text: t.contact.address },
              { icon: '📞', label: t.contact.phone_label, text: t.contact.phone },
              { icon: '🕐', label: t.contact.hours_label, text: t.contact.hours[0] },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-rose-deep tracking-widest uppercase mb-0.5">{item.label}</p>
                  <p className="text-sm text-taupe-dark">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="card p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl text-taupe-dark mb-3">{f.success_heading}</h3>
                <p className="text-taupe leading-relaxed mb-8">{f.success_text}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', date: '', message: '' }) }}
                  className="btn-outline"
                >
                  {f.success_back}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-taupe mb-1.5 tracking-widest uppercase">{f.name}</label>
                    <input
                      type="text"
                      placeholder={f.name_ph}
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-taupe mb-1.5 tracking-widest uppercase">{f.phone}</label>
                    <input
                      type="tel"
                      placeholder={f.phone_ph}
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-taupe mb-1.5 tracking-widest uppercase">{f.service}</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    className={inputClass('service')}
                  >
                    <option value="">{f.service_ph}</option>
                    {b.services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-taupe mb-1.5 tracking-widest uppercase">{f.date}</label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                    className={inputClass('date')}
                  />
                </div>

                <div>
                  <label className="block text-xs text-taupe mb-1.5 tracking-widest uppercase">{f.message}</label>
                  <textarea
                    rows={3}
                    placeholder={f.message_ph}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 mt-2">
                  {f.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
