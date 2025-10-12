type Edu = {
  degree: string
  school: string
  location: string
  dates: string
  details?: string
}

const education: Edu[] = [
  {
    degree: 'MSc Computer Science (Cybersecurity & IoT)',
    school: 'University of Lille',
    location: 'Lille, France',
    dates: 'Sep 2025 – Present',
  },
  {
    degree: 'BSc Computer Science',
    school: 'Addis Ababa University',
    location: 'Addis Ababa, Ethiopia',
    dates: 'Sep 2019 – Aug 2023',
  },
]

export default function Education() {
  return (
    <div className="p-4">
      <h2 className="text-1xl font-semibold text-zinc-900 dark:text-zinc-100">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((e) => (
          <article key={e.degree} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.degree}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.school} · {e.location}</p>
            <p className="mt-1 text-sm text-zinc-500">{e.dates}</p>
          </article>
        ))}
      </div>
      </div>
    
  )
}


