import type { Resume } from '../data/resume'

export function Header({ data }: { data: Resume }) {
  return (
    <header className="max-w-4xl mx-auto py-8 px-6 border-b border-slate-200">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-6 flex-1">
          {/* Photo Placeholder */}
          <div className="shrink-0">
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-indigo-100 to-indigo-50 border-4 border-indigo-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold text-slate-900">{data.name}</h1>
            <p className="text-lg text-indigo-600 font-semibold mt-1">{data.role}</p>
          </div>
        </div>

        <div className="text-sm text-slate-600 space-y-1 sm:text-right">
          {data.contact.email && <div>{data.contact.email}</div>}
          {data.contact.phone && <div>{data.contact.phone}</div>}
          {data.contact.location && <div>{data.contact.location}</div>}
          {data.contact.license && <div className="text-slate-500">{data.contact.license}</div>}
        </div>
      </div>
      <p className="mt-6 text-slate-700 max-w-3xl leading-relaxed">{data.summary}</p>
    </header>
  )
}

export default Header
