export default function Hero() {
  return (
    <section id="top" className="relative pt-24 sm:pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Vi planlægger festen – du nyder den
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Fra idé til uforglemmelig aften. Vi håndterer planlægning, location, pynt, musik og koordinering.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#booking" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold shadow-lg hover:opacity-90 transition">Planlæg dit event</a>
            <a href="#pakker" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Se vores pakker</a>
          </div>
        </div>
      </div>
    </section>
  )
}
