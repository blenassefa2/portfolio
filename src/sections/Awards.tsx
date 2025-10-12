type Award = {
  title: string
  org: string
  date: string
  link?: string
}

const awards: Award[] = [
  {
    title: 'AI for Impact Hackathon Organizer',
    org: 'Africa to Silicon Valley',
    date: 'Oct 2024',
    link: 'https://drive.google.com/file/d/1mss9Hbkg8SEpmIBka7Lco7rL2lyfnpSa/view?usp=sharing',
  },
  {
    title: 'CS50x Introduction to Computer Science',
    org: 'Harvard University',
    date: 'Oct 2020',
    link: 'https://certificates.cs50.io/7224ed07-fae7-4e61-8c5f-dd6d6c59386f.pdf?size=letter',
  },
  {
    title: 'Software Security (non-credit)',
    org: 'University of Maryland / Coursera',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1SdB0PUwMUZQm5Hk5pdN1w6VYRel7PE97/view?usp=sharing',
  },
]

export default function Awards() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Awards & Certifications</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((a) => (
            <article key={a.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{a.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{a.org}</p>
              <p className="mt-1 text-sm text-zinc-500">{a.date}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-indigo-600 hover:underline">
                  View certificate
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


