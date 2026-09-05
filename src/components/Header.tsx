import type { Resume } from '../data/resume'

export function Header({
  data,
  isDarkMode,
  onToggleTheme,
}: {
  data: Resume
  isDarkMode: boolean
  onToggleTheme: () => void
}) {
  return (
    <header className="mx-auto max-w-4xl border-b-2 border-[#005fb8] px-6 py-8 dark:border-[#3e3e42]">
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex items-center gap-2 rounded-full border border-[#005fb8] px-3 py-2 text-sm font-semibold text-black transition hover:bg-[#e5f1fb] focus:outline-none focus:ring-2 focus:ring-[#007acc] dark:border-[#3e3e42] dark:text-[#d4d4d4] dark:hover:bg-[#2d2d30]"
          aria-pressed={isDarkMode}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span aria-hidden="true">{isDarkMode ? '☀' : '☾'}</span>
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-6 flex-1">
          {/* Photo Placeholder */}
          <div className="shrink-0">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#005fb8] bg-white dark:border-[#264f78] dark:from-[#252526] dark:to-[#1e1e1e]">
              <svg
                className="w-16 h-16 text-[#005a9e] dark:text-[#569cd6]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div id="name-and-role" className="flex-1 text-[#000000] dark:text-[#d4d4d4]">
            <h1 className="text-4xl font-bold text-[#000000] dark:text-[#d4d4d4]">{data.name}</h1>
            <p className="text-lg font-semibold text-[#005a9e] mt-1 dark:text-[#569cd6]">{data.role}</p>
          </div>
        </div>

        <div id="contact-info" className="space-y-1 text-sm font-medium text-[#000000] dark:text-[#9d9d9d] sm:text-right">
          {data.contact.email && <div>{data.contact.email}</div>}
          {data.contact.phone && <div>{data.contact.phone}</div>}
          {data.contact.location && <div>{data.contact.location}</div>}
          {data.contact.license && <div className="text-[#005a9e] dark:text-[#6a9955]">{data.contact.license}</div>}
        </div>
      </div>
      <p id="summary" className="mt-6 max-w-3xl font-medium leading-relaxed text-[#000000] dark:text-[#d4d4d4]">{data.summary}</p>
    </header>
  )
}

export default Header
