import { PartyPopper, Headphones, MapPin, User } from 'lucide-react'

const items = [
  { icon: PartyPopper, title: 'Færdige festpakker – ingen stress', text: 'Klare valgmuligheder, gennemsigtige priser og alt samlet ét sted.' },
  { icon: Headphones, title: 'Erfaring med ungdom og virksomheder', text: 'Studenterfester, firmaevents, galla og meget mere – vi har prøvet det før.' },
  { icon: MapPin, title: 'Vi finder location og leverandører', text: 'Lokation, pynt, musik, mad og drikke – vi koordinerer hele vejen.' },
  { icon: User, title: 'Fast kontaktperson', text: 'Én dedikeret koordinator følger dig fra start til slut.' },
]

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Hvorfor vælge os?</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, text}) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white">
              <Icon className="w-8 h-8 text-yellow-400" />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/80 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
