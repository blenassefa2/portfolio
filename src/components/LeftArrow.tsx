import React from 'react'

type LeftArrowProps = {
  destination: string
}

const LeftArrow: React.FC<LeftArrowProps> = ({ destination }) => {
  const handleClick = () => {
    const section = document.getElementById(destination)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="
        hidden sm:flex items-center justify-center 
        absolute left-4 top-1/2 -translate-y-1/2 
        w-12 h-12 rounded-full 
        bg-white/80 dark:bg-zinc-900/80
        shadow-lg backdrop-blur-md
        border border-zinc-200 dark:border-zinc-700
        text-zinc-800 dark:text-zinc-200
        hover:bg-zinc-100 dark:hover:bg-zinc-800
        transition-all duration-300 ease-in-out
      "
      aria-label="Go to previous section"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  )
}

export default LeftArrow