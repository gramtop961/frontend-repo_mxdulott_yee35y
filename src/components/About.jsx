export default function About() {
  return (
    <section id="om" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Om os</h2>
        <p className="mt-6 text-white/80 text-lg text-center">Vi er et dedikeret team af eventplanlæggere, der gør det enkelt at skabe mindeværdige fester. Vi arbejder struktureret, gennemsigtigt og med fokus på tryghed – fra første idé til sidste sang.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop" alt="Eventplanner" />
              <div>
                <div className="font-semibold">Sara Madsen</div>
                <div className="text-white/70 text-sm">Eventplanner / Koordinator</div>
              </div>
            </div>
            <p className="mt-4 text-white/80 text-sm">Specialist i ungdomsfester og temaopsætninger med øje for detaljen.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop" alt="Koordinator" />
              <div>
                <div className="font-semibold">Jonas Lind</div>
                <div className="text-white/70 text-sm">Projektleder</div>
              </div>
            </div>
            <p className="mt-4 text-white/80 text-sm">Styrer leverandører, tidsplan og sikre processer – så du kan slappe af.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
