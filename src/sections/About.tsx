import Education from './Education'
import Skills from './Skills'
import Languages from './Languages'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'

export default function About() {
  return (
    <section className=" h-full w-full pt-[5vh] overflow-y-auto  relative">
     
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
          <div className="md:col-span-12">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">About Me</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              I am a full-stack software engineer with a strong foundation in AI, cybersecurity, and backend systems, having built and led scalable solutions using technologies like React, Node.js, Django, Go, and PostgreSQL across fintech, ed-tech, and internal tools. As Head of Academy at A2SV, I managed a team of 20 supporting 100+ students across 20 countries, while contributing to product strategy and development for Dime, a remittance platform.
              </p>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
I am currently pursuing a Master’s in IoT and Cybersecurity with a specialization minor in Machine Learning at the University of Lille, France, exploring research in microarchitecture-level security, algorithm complexity, problem-solving, and embedded systems design. My work continues to blend technical expertise, leadership, and social impact, with a strong passion for building secure, user-centered, and scalable systems.

              </p>
              <div className="md:col-span-12">
                <Education/>
              </div>
              <div className="md:col-span-12">
              <Skills />
              </div>
              
              {/* <div className="md:col-span-7">
          
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Backend architecture & data modeling',
                'Web Development, Performance, SEO, accessibility',
                'React, TypeScript, Tailwind',
                'Go, GraphQL, PostgreSQL',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 text-zinc-700 dark:text-zinc-300">
                  {item}
                </li>
              ))}
              
            </ul> 
          </div> */}
             
            </div>
          </div>
          
          
          
        </div>
        
       
        
        
        <div className='flex justify-center items-center'>
                <a
                  href="https://drive.google.com/file/d/1bkS6dgPg1qkKuu2XmYLD4aPY6vJHtnM1/view?usp=sharing"
                  download
                  className="mt-5 inline-flex items-center rounded-md bg-zinc-900 px-3 py-2 text-white text-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Checkout my CV
                </a>
              </div>
        
      </div>

    </section>
  )
}


