import { useEffect, useState } from 'react'

type NavItem = {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'featured', label: 'Featured'},
  { id: 'experience', label: 'Experience & Awards' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>('home')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const scrollContainer = document.getElementById('sections')
    if (!scrollContainer) return

    const handleScroll = () => {
      
      const containerWidth = scrollContainer.offsetWidth
      
      // Find which section is most visible
      let mostVisibleSection = 'home'
      let maxVisibility = 0

      NAV_ITEMS.forEach((item) => {
        const element = document.getElementById(item.id)
        if (!element) return

        const rect = element.getBoundingClientRect()
        const containerRect = scrollContainer.getBoundingClientRect()
        
        // Calculate how much of the section is visible
        const visibleLeft = Math.max(rect.left, containerRect.left)
        const visibleRight = Math.min(rect.right, containerRect.right)
        const visibleWidth = Math.max(0, visibleRight - visibleLeft)
        const visibility = visibleWidth / containerWidth

        if (visibility > maxVisibility) {
          maxVisibility = visibility
          mostVisibleSection = item.id
        }
      })

      setActiveId(mostVisibleSection)
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('home')} className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            BLEN
          </button>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm transition-colors ${
                  activeId === item.id
                    ? 'text-zinc-900 dark:text-white font-medium'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="block h-0.5 w-5 bg-current mb-1" />
              <span className="block h-0.5 w-5 bg-current mb-1" />
              <span className="block h-0.5 w-5 bg-current" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-2 py-2 rounded-md ${
                    activeId === item.id
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                      : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}