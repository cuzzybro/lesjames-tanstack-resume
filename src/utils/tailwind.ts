type ClassName = string | false | null | undefined

export function cn(...classNames: ClassName[]) {
  return classNames.filter(Boolean).join(' ')
}

export function iconButtonClasses() {
  return 'rounded-full border-2 border-[#005fb8] bg-white p-2 text-black shadow-md transition-all hover:bg-[#e5f1fb] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:shadow-md dark:border-[#3e3e42] dark:bg-[#2d2d30] dark:text-[#d4d4d4] dark:hover:bg-[#264f78] dark:disabled:hover:bg-[#2d2d30]'
}

export function closeButtonClasses() {
  return 'ml-auto rounded-full p-2 text-2xl leading-none text-black transition hover:bg-[#e5f1fb] focus:outline-none focus:ring-2 focus:ring-[#007acc] dark:text-[#9d9d9d] dark:hover:bg-[#3e3e42] dark:hover:text-[#d4d4d4]'
}

export function experienceCardClasses() {
  return 'group w-full min-h-56 rounded-lg border-2 border-[#005fb8] bg-white p-8 text-left transition hover:bg-[#e5f1fb] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:ring-offset-2 dark:border-[#3e3e42] dark:bg-[#252526] dark:hover:border-[#569cd6] dark:hover:bg-[#2d2d30] dark:focus:ring-offset-[#1e1e1e]'
}

export function modalClasses() {
  return 'max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border-2 border-[#005fb8] bg-white p-6 text-black shadow-2xl sm:p-8 dark:border-[#3e3e42] dark:bg-[#252526] dark:text-[#d4d4d4]'
}
