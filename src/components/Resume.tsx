import { useEffect, useState } from 'react'
import resume from '@/data/resume'
import { Header } from '@/components/Header'
import Section from '@/components/Section'
import { ExperienceCarousel } from '@/components/ExperienceCarousel'
import ContactModal from '@/components/ContactModal'
import { SocialLinks } from '@/components/SocialLinks'

export function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('resume-theme')
    setIsDarkMode(
      savedTheme === 'dark' ||
        (savedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches),
    )
  }, [])

  useEffect(() => {
    window.localStorage.setItem('resume-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark min-h-screen bg-[#1e1e1e] text-[#d4d4d4]' : 'min-h-screen bg-white text-black'}>
      <Header
        data={resume}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((current) => !current)}
        onContact={() => setIsContactOpen(true)}
      />

      <main className="max-w-4xl mx-auto space-y-8">
        <Section title="Experience">
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-black dark:text-[#9d9d9d]">
            Permanent employee through 2018, followed by sole trader contract engagements from 2018 onward.
          </p>
          <ExperienceCarousel items={resume.experiences} />
        </Section>

        <Section title="Skills">
          <div className="space-y-6">
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-slate-900 dark:text-blue-300 mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-[#0066b8] bg-white px-3 py-1 text-sm text-[#005a9e] dark:border-[#264f78] dark:bg-[#252526] dark:text-[#569cd6]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="References">
          <p className="text-black dark:text-[#d4d4d4]">
            References are available upon request. Please contact me for detailed professional references.
          </p>
        </Section>
      </main>

      <footer className="mx-auto max-w-4xl border-t-2 border-[#005fb8] px-6 py-6 dark:border-[#3e3e42]">
        <SocialLinks links={resume.socials} />
      </footer>

      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </div>
  )
}

export default Resume
