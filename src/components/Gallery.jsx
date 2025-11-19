import { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1517260739337-6799d3b5f422?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503002736675-4f18b7dc1d74?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517955491543-4a9b2742b0a9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="galleri" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Galleri & inspiration</h2>
          <p className="text-white/70 text-sm max-w-md">Se hvad vi skaber.</p>
        </div>

        {/* Dense, balanced masonry-like grid using fixed aspect ratios */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src) => (
            <button key={src} onClick={() => setActive(src)} className="group relative overflow-hidden rounded-xl">
              <img src={src} alt="Event" className="aspect-[4/5] w-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <img src={active} alt="Preview" className="max-h-[85vh] rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  )
}
