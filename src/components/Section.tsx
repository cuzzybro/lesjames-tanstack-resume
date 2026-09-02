export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 last:border-b-0">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Section
