const faqs = [
  { q: 'Hvad koster et event?', a: 'Vi tilbyder pakker fra basis til premium. Skriv for et præcist tilbud – vi skræddersyr efter behov.' },
  { q: 'Hvordan booker jeg?', a: 'Udfyld formularen her på siden. Vi bekræfter inden for 24 timer og tager dialogen videre.' },
  { q: 'Kan jeg afbestille?', a: 'Ja, vi har klare vilkår for afbestilling – de fremgår af vores handelsbetingelser.' },
  { q: 'Hvilke betalingstyper accepterer I?', a: 'Faktura og bankoverførsel. For private tilbyder vi ratebetaling på visse pakker.' },
  { q: 'Hvor lang tid tager planlægningen?', a: 'Typisk 2–8 uger afhængigt af størrelse og sæson. Vi kan også lave express-løsninger.' },
]

export default function FAQ() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-4">
              <div className="font-semibold">{f.q}</div>
              <div className="text-white/80 text-sm mt-1">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
