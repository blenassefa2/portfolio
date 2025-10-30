import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ExperienceAndAwards from './sections/ExperienceAndAwards'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ArrowButton from './components/ArrowButton'
import Featured from './sections/Featured'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)

  const sections = ['home', 'featured', 'experience', 'about', 'contact']

  const scrollToNext = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth
    const newScroll =
      direction === 'right'
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount

    container.scrollTo({ left: newScroll, behavior: 'smooth' })
  }

  // Track which section is currently visible
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth)
      setCurrentSection(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 relative">
      <Navbar />

      <div className="relative">
        {/* Conditionally render arrows */}
        {currentSection > 0 && (
          <ArrowButton direction="left" onClick={() => scrollToNext('left')} />
        )}
        {currentSection < sections.length - 1 && (
          <ArrowButton direction="right" onClick={() => scrollToNext('right')} />
        )}

        <main
          ref={containerRef}
          id="sections"
          className="h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scroll-smooth"
        >
          <section id="home" className="min-w-full h-screen snap-start">
            <div className="h-full w-full px-4 sm:px-6 lg:px-8">
              <Hero />
            </div>
          </section>
          <section id="featured" className="min-w-full h-screen snap-start">
            <div className="h-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-start overflow-y-auto pb-28 scrollbar-thin-dark">
              <Featured/>
            </div>
          </section>
          
          <section id="experience" className="min-w-full h-screen snap-start">
            <div className="h-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center">
              <ExperienceAndAwards />
            </div>
          </section>
          <section id="about" className="min-w-full h-screen snap-start">
            <div className="h-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center">
              <About />
            </div>
          </section>


          <section id="contact" className="min-w-full h-screen snap-start">
            <div className="h-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center">
              <Contact />
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App