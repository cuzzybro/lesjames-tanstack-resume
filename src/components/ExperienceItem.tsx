export function ExperienceItem({ item }: { item: { company: string; position: string; start: string; end: string; employmentType?: string; skills?: string[]; bullets: string[], project?: string } }) {
  return (
    <div className="pb-6 last:pb-0">
      <div className="flex items-baseline justify-between gap-4 mb-2 border-b-2 border-[#005fb8] pb-2 dark:border-[#3e3e42]">
        <div className="flex-1">
          <div className="font-bold text-lg text-black dark:text-[#d4d4d4]">{item.position}</div>
          <div className="text-indigo-600 font-semibold">{item.company}</div>
          {item.project && (
            <div className="text-sm text-slate-500">
              {item.project}
            </div>
          )}
        </div>
        <div className="text-sm text-black whitespace-nowrap shrink-0 dark:text-[#9d9d9d]">
          {item.start} — {item.end}
        </div>
      </div>
      {item.employmentType && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-black dark:text-[#9d9d9d]">
          {item.employmentType}
        </div>
      )}
      <ul className="mt-3 space-y-1 text-black dark:text-[#d4d4d4]">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-indigo-400 shrink-0 mt-1">•</span>
            <span className="text-sm">{b}</span>
          </li>
        ))}
      </ul>
      {item.skills && item.skills.length > 0 && (
        <div className="mt-4 border-t-2 border-[#005fb8] pt-4 dark:border-[#3e3e42]">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-black dark:text-[#9d9d9d]">
            Skills & Tools
          </div>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#0066b8] bg-white px-2.5 py-1 text-xs font-medium text-[#005a9e] dark:border-[#264f78] dark:bg-[#252526] dark:text-[#569cd6]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
