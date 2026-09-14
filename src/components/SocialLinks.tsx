import type { SocialLink } from '@/utils/types'

const iconMap = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5a1.5 1.5 0 0 1 0 3.5ZM5.5 9.5h2.88V18H5.5V9.5Zm4.75 0h2.76v1.16h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38V18h-2.88v-16.7c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36V18h-2.88V9.5Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 .5C5.65.5.5 5.64.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2.18c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A11.02 11.02 0 0 1 12 6.95c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.64 18.35.5 12 .5Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M13.5 22v-8h3l.5-3h-3.5V7.5c0-.9.3-1.5 1.6-1.5H17V3.2c-.3-.1-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3.1v8h3.4Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
    </svg>
  ),
} as const

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#005fb8] bg-white text-[#005a9e] transition hover:bg-[#e5f1fb] focus:outline-none focus:ring-2 focus:ring-[#007acc] dark:border-[#3e3e42] dark:bg-[#252526] dark:text-[#569cd6] dark:hover:bg-[#2d2d30]"
        >
          {iconMap[social.icon]}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
