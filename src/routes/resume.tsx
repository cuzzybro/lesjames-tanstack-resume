import { createFileRoute } from '@tanstack/react-router'
import resume from '../data/resume'
import { Header } from '../components/Header'
import Section from '../components/Section'
import { ExperienceCarousel } from '../components/ExperienceCarousel'

export const Route = createFileRoute('/resume')({ component: Resume })

function Resume() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header data={resume} />

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <Section title="Experience">
          <ExperienceCarousel items={resume.experiences} />
        </Section>

        <Section title="Skills">
          <div className="space-y-6">
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-slate-900 mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded bg-indigo-50 text-sm text-indigo-700 border border-indigo-200"
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
          <p className="text-slate-700">
            References are available upon request. Please contact me for detailed professional references.
          </p>
        </Section>
      </main>
    </div>
  )
}

export default Resume
