import { useEffect, useState } from 'react'
import ExperienceItem from './ExperienceItem'
import {
  closeButtonClasses,
  cn,
  experienceCardClasses,
  iconButtonClasses,
  modalClasses,
} from '../utils/tailwind'

interface Experience {
  company: string
  position: string
  project?: string
  start: string
  end: string
  employmentType?: string
  careerNote?: string
  bullets: string[]
  skills?: string[]
}

export function ExperienceCarousel({ items }: { items: Experience[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  useEffect(() => {
    if (!selectedExperience) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedExperience(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedExperience])

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(items.length - 1, prev + 1))
  }

  const currentExperience = items[currentIndex]

  if (!currentExperience) return null

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative mx-12">
        <button
          type="button"
          onClick={() => setSelectedExperience(currentExperience)}
          className={experienceCardClasses()}
          aria-label={`View details for ${currentExperience.company}`}
        >
          <div className="flex min-h-40 flex-col justify-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {currentExperience.company}
            </div>
            {currentExperience.project && (
              <div className="mt-2 text-sm text-black dark:text-[#9d9d9d]">{currentExperience.project}</div>
            )}
            <div className="mt-3 text-2xl font-bold text-black dark:text-[#d4d4d4]">
              {currentExperience.position}
            </div>
            <div className="mt-2 text-sm text-black dark:text-[#9d9d9d]">
              {currentExperience.start} — {currentExperience.end}
            </div>
            {currentExperience.employmentType && (
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-black dark:text-[#9d9d9d]">
                {currentExperience.employmentType}
              </div>
            )}
            <div className="mt-6 text-sm font-semibold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
              Click to view engagement details
            </div>
          </div>
        </button>

        {/* Left Arrow */}
        <button
          type="button"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={cn(iconButtonClasses(), 'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12')}
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
          type="button"
          onClick={goToNext}
          disabled={currentIndex === items.length - 1}
          className={cn(iconButtonClasses(), 'absolute right-0 top-1/2 -translate-y-1/2 translate-x-12')}
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
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-2 rounded-full transition-all',
              index === currentIndex
                ? 'w-8 bg-indigo-600'
                : 'w-2 bg-black hover:bg-[#005fb8] dark:bg-[#6a6a6a] dark:hover:bg-[#9d9d9d]',
            )}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>

      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          role="presentation"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className={modalClasses()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div id="experience-dialog-title" className="sr-only">
                {selectedExperience.company} engagement details
              </div>
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className={closeButtonClasses()}
                aria-label="Close engagement details"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {selectedExperience.careerNote && (
              <p className="mb-5 border-l-2 border-[#005fb8] pl-4 text-sm text-black dark:border-[#569cd6] dark:text-[#9d9d9d]">
                {selectedExperience.careerNote}
              </p>
            )}
            <ExperienceItem item={selectedExperience} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceCarousel
