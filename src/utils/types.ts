export type SocialLink = {
  label: string
  href: string
  icon: 'linkedin' | 'github' | 'facebook' | 'instagram'
}

export type Experience = {
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

export type Item = {
    company: string
    position: string
    start: string
    end: string
    employmentType?: string
    skills?: string[]
    bullets: string[]
    project?: string
}