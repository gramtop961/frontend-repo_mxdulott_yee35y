const types = [
  { title: 'Ungdoms- og klubfester', text: 'Høj energi, solid plan og sikkerhed – vi skaber den perfekte nat.' },
  { title: 'Fødselsdage & temafester', text: 'Fra 18-års til 40-års – tema, pynt og lokation der matcher dig.' },
  { title: 'Studenterfester & galla', text: 'Elegante opsætninger og stram koordinering – I kan fokusere på at fejre.' },
  { title: 'Bryllupper & familiefester', text: 'Hyggelige rammer, personlig stil og trygge forløb.' },
  { title: 'Firmaevents & julefrokoster', text: 'Professionelt setup for teams, kunder og hele organisationen.' },
]

export default function EventTypes() {
  return (
    <section id="eventtyper" className="py-16 sm:py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Eventtyper</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map(t => (
            <div key={t.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white">
              <h3 className="font-semibold text-lg">{t.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
