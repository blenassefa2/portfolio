const skills = [
  'React',
  'Vue',
  'TypeScript',
  'Tailwind CSS',
  'Python',
  'FastAPI',
  'Django',
  'Supabase',
  'Node.js',
  'Vite',
  'Accessibility',
  'Go',
  'Testing',
  'Machine Learning',
  'Embedded systems',
  'Microarchitecture level security'
]
type Language = {
  name: string
  level: string
}
const languages: Language[] = [
  { name: 'Amharic (Mother tongue)', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'French', level: 'B2' },
]

export default function Skills() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl p-4">
      <h2 className="text-1xl font-semibold text-zinc-900 dark:text-zinc-100">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm text-zinc-800 dark:text-zinc-200 shadow-sm"
          >
            {s}
          </span>
        ))}

      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languages.map((l) => (
            <div key={l.name} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{l.name}</p>
              <p className="text-sm text-zinc-500">{l.level}</p>
            </div>
          ))}
        </div>
    </div>
  )
}


