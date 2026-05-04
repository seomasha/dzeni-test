'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'

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
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-warm-dark placeholder-warm-mid/60 outline-none transition-all duration-200 focus:border-rose focus:ring-2 focus:ring-rose/10 ${
      errors[field] ? 'border-red-300' : 'border-warm-light'
    }`

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <p className="section-label mb-4">{b.label}</p>
            <h2 className="section-heading mb-6">{b.heading}</h2>
            <p className="text-warm-mid font-light leading-relaxed mb-10">{b.subtitle}</p>

            {/* Quick info cards */}
            <div className="space-y-4">
              {[
                { icon: '📍', text: t.contact.address },
                { icon: '📞', text: t.contact.phone },
                { icon: '🕐', text: t.contact.hours[0] },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-warm-light rounded-xl">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-warm-mid">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="card">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-warm-dark mb-3">{f.success_heading}</h3>
                <p className="text-warm-mid text-sm leading-relaxed mb-8">{f.success_text}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', date: '', message: '' }) }}
                  className="btn-outline"
                >
                  {f.success_back}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-warm-mid mb-1.5 tracking-wide">{f.name}</label>
                    <input
                      type="text"
                      placeholder={f.name_ph}
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-warm-mid mb-1.5 tracking-wide">{f.phone}</label>
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
                  <label className="block text-xs text-warm-mid mb-1.5 tracking-wide">{f.service}</label>
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
                  <label className="block text-xs text-warm-mid mb-1.5 tracking-wide">{f.date}</label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                    className={inputClass('date')}
                  />
                </div>

                <div>
                  <label className="block text-xs text-warm-mid mb-1.5 tracking-wide">{f.message}</label>
                  <textarea
                    rows={3}
                    placeholder={f.message_ph}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3.5 mt-2">
                  {f.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
