import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'

const navItems = [
  { label: 'Forside', href: '#top' },
  { label: 'Pakker & priser', href: '#pakker' },
  { label: 'Eventtyper', href: '#eventtyper' },
  { label: 'Galleri', href: '#galleri' },
  { label: 'Om os', href: '#om' },
  { label: 'Kontakt / Booking', href: '#booking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-black/70 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-yellow-400"></div>
          <span className="font-semibold text-white tracking-tight">Nova Events</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition">
              {item.label}
            </a>
          ))}
          <a href="#booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:opacity-90 transition">
            <Calendar className="w-4 h-4" />
            Få tilbud
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="block text-white/90" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              Få tilbud
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
