export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Blen Assefa Tilahun</p>
        <p>Built with React, TypeScript, and Tailwind</p>
      </div>
    </footer>
  )
}


