import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Packages from './components/Packages'
import EventTypes from './components/EventTypes'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 opacity-[0.15] pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600 blur-[140px]" />
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full bg-yellow-400 blur-[140px]" />
      </div>

      <Navbar />
      <Hero />
      <WhyUs />
      <Packages />
      <EventTypes />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <About />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
