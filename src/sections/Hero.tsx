import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "Hello!",
    "Hello!",
    "Hello!",
  ];

  const [, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
      return;
    }

    if (subIndex === texts[index].length + 1 && !deleting) {
      setDeleting(true);
      setSpeed(1500); // pause before deleting
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      setSpeed(100);
      return;
    }

    const timeout = setTimeout(() => {
      const nextSubIndex = subIndex + (deleting ? -1 : 1);
      setSubIndex(nextSubIndex);
      setText(texts[index].substring(0, nextSubIndex));
      setSpeed(deleting ? 40 : 100);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, speed, texts]);

  return (
    <section className="relative isolate h-full w-full flex items-center">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-blob absolute top-0 left-0 h-[46rem] w-[46rem] rounded-full bg-gradient-to-tr from-blue-600/45 via-blue-500/35 to-blue-400/45 blur-2xl" />
        
        {/* Animated Balls */}
        <div className="ball-1 absolute top-20 right-20 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"></div>
        <div className="ball-2 absolute top-40 left-32 h-6 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg"></div>
        <div className="ball-3 absolute bottom-32 right-40 h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12">
            <p className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Software Engineer • MSc Cybersecurity & IoT</p>
            <h1 className="mt-3 text-6xl sm:text-7xl font-bold tracking-tight text-yellow-900 dark:text-yellow-100">
              Hello World!
              {/* <span className="border-r-2 border-zinc-900 dark:border-zinc-100 animate-pulse ml-1" /> */}
            </h1>
            <div className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <ul className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-2 list-disc list-inside">
                <li>
                  Software engineer with a <strong>BSc in Computer Science</strong> and currently pursuing an <strong>MSc in Cybersecurity and IoT</strong> at the University of Lille.
                </li>
                <li>
                  Freelance developer crafting <strong>performant, accessible, and maintainable</strong> software products.
                </li>
                <li>
                  Interested in <strong>microarchitecture-level security research</strong>.
                </li>
                <li>
                  Always happy to connect and grow.
                </li>
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.upwork.com/freelancers/~01d405e170f3b30b23?mp_source=share" className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                Work with me
              </a>
              <a href="#about" className="inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Learn About Me
              </a>
              <a href="https://drive.google.com/file/d/1upfuF5beHCzvBeCL9NrSUnRQvHA_vgA2/view?usp=sharing" className="inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Checkout my CV
              </a>
            </div>
          </div>
          
        </div>
      </div>
  
    </section>
  )
}


