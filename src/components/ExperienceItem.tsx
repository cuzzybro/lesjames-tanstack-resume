export function ExperienceItem({ item }: { item: { company: string; position: string; start: string; end: string; skills?: string[]; bullets: string[], project?: string } }) {
  return (
    <div className="pb-6 last:pb-0">
      <div className="flex items-baseline justify-between gap-4 mb-2 border-b border-slate-200 pb-2">
        <div className="flex-1">
          <div className="font-bold text-lg text-slate-900">{item.position}</div>
          <div className="text-indigo-600 font-semibold">{item.company}</div>
          {item.project && (
            <div className="text-sm text-slate-500">
              {item.project}
            </div>
          )}
        </div>
        <div className="text-sm text-slate-500 whitespace-nowrap shrink-0">
          {item.start} — {item.end}
        </div>
      </div>
      <ul className="mt-3 space-y-1 text-slate-700">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-indigo-400 shrink-0 mt-1">•</span>
            <span className="text-sm">{b}</span>
          </li>
        ))}
      </ul>
      {item.skills && item.skills.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Skills & Tools
          </div>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-full bg-indigo-100 text-xs font-medium text-indigo-700 border border-indigo-200"
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
