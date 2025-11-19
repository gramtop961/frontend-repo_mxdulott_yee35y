const packages = [
  {
    name: 'Basic',
    price: 'Fra 4.995 kr.',
    features: [
      'Planlægning og koordinering',
      'Lokationsforslag',
      'Simpel dekoration',
      'Mail/telefonsupport',
    ],
  },
  {
    name: 'Standard',
    price: 'Fra 12.995 kr.',
    features: [
      'Alt i Basic',
      'Temapynt og styling',
      'Leverandørhåndtering',
      'Tidslinje for aftenen',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'Pris: efter behov',
    features: [
      'Alt i Standard',
      'Mad / drikke',
      'Musik, lys og fuld koordinering',
      'On-site koordinator',
    ],
  },
]

export default function Packages() {
  return (
    <section id="pakker" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Pakker & priser</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border ${p.highlight ? 'bg-gradient-to-b from-purple-600/20 to-yellow-400/10 border-yellow-400/30' : 'bg-white/5 border-white/10'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{p.name}-pakke</h3>
                <span className="text-sm text-white/70">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#booking" className="inline-block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold shadow hover:opacity-90 transition">Få tilbud</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
