import { useState } from 'react'
import ExperienceItem from './ExperienceItem'

interface Experience {
  company: string
  position: string
  start: string
  end: string
  bullets: string[]
}

export function ExperienceCarousel({ items }: { items: Experience[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative mx-12">
        <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 min-h-96">
          <ExperienceItem item={items[currentIndex]} />
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-indigo-50 text-slate-900 p-2 rounded-full shadow-md transition-all hover:shadow-lg"
          aria-label="Previous experience"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-indigo-50 text-slate-900 p-2 rounded-full shadow-md transition-all hover:shadow-lg"
          aria-label="Next experience"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-indigo-600 w-8'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-slate-600">
        {currentIndex + 1} of {items.length}
      </div>
    </div>
  )
}

export default ExperienceCarousel
