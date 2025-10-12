import { ChevronLeft, ChevronRight } from 'lucide-react'

type ArrowButtonProps = {
  direction: 'left' | 'right'
  onClick: () => void
}

export default function ArrowButton({ direction, onClick }: ArrowButtonProps) {
  const isLeft = direction === 'left'
  const Icon = isLeft ? ChevronLeft : ChevronRight

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 
        ${isLeft ? 'left-2 sm:left-4' : 'right-2 sm:right-4'} 
        bg-zinc-800/60 hover:bg-zinc-700 text-white 
        rounded-full p-2 sm:p-3 shadow-md transition 
        backdrop-blur-sm z-50`}
      aria-label={isLeft ? 'Previous section' : 'Next section'}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  )
}