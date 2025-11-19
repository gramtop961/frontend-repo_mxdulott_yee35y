import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function BookingForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      event_type: form.get('event_type'),
      date_preference: form.get('date_preference'),
      guests: form.get('guests'),
      package: form.get('package'),
      message: form.get('message')
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Serverfejl')
      setStatus({ ok: true, msg: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message || 'Noget gik galt' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold text-white text-center">Booking & Kontakt</h2>
          <p className="text-white/70 text-center mt-2">Alle forespørgsler sendes direkte til vores koordinator – du får svar inden for 24 timer.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <input name="name" required placeholder="Navn" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
            <input name="email" type="email" required placeholder="Email" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
            <input name="phone" required placeholder="Telefon" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
            <select name="event_type" required className="bg-black/40 border border-white/10 rounded-lg px-4 py-3">
              <option value="">Type af event</option>
              <option>Ungdomsfest</option>
              <option>Fødselsdag</option>
              <option>Studentergalla</option>
              <option>Bryllup</option>
              <option>Firmaevent</option>
            </select>
            <input name="date_preference" placeholder="Ønsket dato / periode" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
            <input name="guests" placeholder="Antal gæster" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
            <select name="package" required className="bg-black/40 border border-white/10 rounded-lg px-4 py-3">
              <option value="">Ønsket pakke</option>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
              <option>Ved ikke endnu</option>
            </select>
            <div className="md:col-span-2">
              <textarea name="message" placeholder="Beskriv kort dine ønsker" rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <button disabled={loading} className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold shadow hover:opacity-90 transition disabled:opacity-50">
                {loading ? 'Sender...' : 'Indsend'}
              </button>
              {status && (
                <div className={`${status.ok ? 'text-green-400' : 'text-red-400'} text-sm`}>{status.msg}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
