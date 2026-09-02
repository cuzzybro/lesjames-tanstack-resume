export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-[#005fb8] last:border-b-0 dark:border-[#3e3e42]">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="mb-6 text-2xl font-bold text-black dark:text-[#d4d4d4]">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Section
