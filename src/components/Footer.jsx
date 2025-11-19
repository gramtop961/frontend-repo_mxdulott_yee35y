export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black relative overflow-hidden">
      {/* subtle top gradient banner */}
      <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-r from-purple-600/30 via-fuchsia-500/20 to-yellow-400/30 blur-2xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-yellow-400"></div>
              <span className="font-semibold">Nova Events</span>
            </div>
            <p className="text-white/70 text-sm mt-3">Vi skaber mindeværdige events – uden stress.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Kontakt</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>hello@novaevents.dk</div>
              <div>+45 12 34 56 78</div>
              <div>København, Danmark</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Links</div>
            <div className="text-white/70 text-sm space-y-1">
              <a href="#pakker" className="hover:text-white">Pakker</a><br/>
              <a href="#booking" className="hover:text-white">Kontakt</a><br/>
              <a href="#faq" className="hover:text-white">FAQ</a><br/>
              <a href="#" className="hover:text-white">Privatlivspolitik</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Følg os</div>
            <div className="text-white/70 text-sm space-x-4">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>

        {/* bottom CTA bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div>
            <div className="font-semibold">Klar til at planlægge?</div>
            <div className="text-white/70 text-sm">Fortæl os om dit event – vi svarer inden for 24 timer.</div>
          </div>
          <a href="#booking" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold shadow hover:opacity-90 transition">Planlæg dit event</a>
        </div>

        <div className="mt-6 text-xs text-white/60">© {new Date().getFullYear()} Nova Events. Alle rettigheder forbeholdes.</div>
      </div>
    </footer>
  )
}
