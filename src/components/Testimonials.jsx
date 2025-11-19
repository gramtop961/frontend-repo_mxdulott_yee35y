const testimonials = [
  { name: 'Amalie, 19', type: 'Studenterfest', quote: 'Alt spillede! DJ, pynt og lokation – vi skulle bare møde op.' },
  { name: 'Jonas, 24', type: 'Temafest', quote: 'Super professionelt. De styrede leverandører og tidsplan, så vi kunne feste.' },
  { name: 'Nordic Tech', type: 'Firmaevent', quote: 'Elegant opsætning og skarp afvikling – vores team var imponeret.' },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Det siger kunderne</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white">
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/70">{t.name} • {t.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
