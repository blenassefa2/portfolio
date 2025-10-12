import { useMemo } from "react";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";

type ExperiencePoint = {
  id: string;
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  description: string;
  tech?: string;
};

type Award = {
  id: string;
  title: string;
  org: string;
  date: string;
  emoji: string;
  description: string;
  imageUrl?: string;
};

const experienceData: ExperiencePoint[] = [
  {
    id: "upwork",
    company: "Upwork",
    title: "Software Developer - Freelance",
    start: "Dec 2024",
    end: "Aug 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed software products from functional requirements and refactored codebases to improve quality.",
  },
  {
    id: "a2sv",
    company: "Africa To Silicon Valley",
    title: "Lead of Academy and Software Engineer",
    start: "Dec 2022",
    end: "Dec 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Led online tech education program supporting 100+ students. Designed fintech data models and managed backend team with Agile/Jira.",
    tech: "Go, GraphQL, PostgreSQL, Vue, React, Angular, GCP, Cloudflare",
  },
  {
    id: "eskalate",
    company: "Eskalate",
    title: "Software Developer",
    start: "Apr 2022",
    end: "Mar 2023",
    location: "Addis Ababa, Ethiopia",
    description:
      "Delivered Atrons web and Android app for resource sharing among students. Implemented Firebase auth and book filtering APIs.",
  },
];

const awardsData: Award[] = [
  {
    id: "a2sv-hackathon",
    title: "AI for Impact Hackathon Organizer",
    org: "Africa to Silicon Valley",
    date: "Oct 2024",
    emoji: "🏆",
    description:
      "Organized Africa's largest hackathon with 1,118 teams from 7 African countries.",
  },
  {
    id: "cs50",
    title: "CS50x Introduction to Computer Science",
    org: "Harvard University",
    date: "Oct 2020",
    emoji: "🎓",
    description:
      "Completed Harvard’s foundational computer science course with 9 projects and a capstone.",
  },
  {
    id: "umd-security",
    title: "Software Security Course",
    org: "University of Maryland / Coursera",
    date: "Jan 2025",
    emoji: "🔒",
    description:
      "Studied software security principles and secure programming techniques.",
  },
  {
    id: "scholarship",
    title: "Graduate Fellowship(IKS)",
    org: "University of Lille",
    date: "May 2025",
    emoji: "🏆",
    description:
      "The Information and Knowledge Society (IKS) Graduate Fellowship at the University of Lille is a prestigious scholarship designed to attract highly talented international students to their master’s tracks based on academic excellence.",
  },

];

export default function ExperienceAndAwards() {
  const sortedExperience = useMemo(
    () =>
      experienceData.sort(
        (a, b) => new Date(b.end).getTime() - new Date(a.end).getTime()
      ),
    []
  );
  const sortedAwards = useMemo(
    () =>
      awardsData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-h-[80vh] overflow-y-auto relative">
      <LeftArrow destination="about" />
      <style>
        {`
          @keyframes gradientMove {
            0% { stop-color: #8b5cf6; }
            25% { stop-color: #facc15; }
            50% { stop-color: #8b5cf6; }
            75% { stop-color: #facc15; }
            100% { stop-color: #8b5cf6; }
          }
          .animated-stop {
            animation: gradientMove 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Experience Column */}
      <div className="relative">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>
        <div className="relative">
          <svg
            className="absolute top-0 left-0 h-full w-2"
            viewBox="0 0 20 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="animated-stop" stopColor="#8b5cf6" />
                <stop offset="50%" className="animated-stop" stopColor="#facc15" />
                <stop offset="100%" className="animated-stop" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path
              d="M10 0 Q 0 0 10 40 Q 20 60 10 80 Q 0 100 10 120 Q 20 140 10 160 Q 0 180 10 200 Q 20 220 10 240 Q 0 260 10 280 Q 20 300 10 320 Q 0 340 10 360 Q 20 380 10 400 Q 0 420 10 440 Q 20 460 10 480 Q 0 500 10 520"
              stroke="url(#purpleYellow)"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          {sortedExperience.map((exp) => (
            <div key={exp.id} className="mb-6 ml-8 relative">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-5 top-1.5 z-10"></div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl shadow-sm relative z-20">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.title} @ {exp.company}
                </h3>
                <p className="text-sm text-zinc-500 mb-2">
                  {exp.start} – {exp.end} | {exp.location}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">{exp.description}</p>
                {exp.tech && (
                  <p className="mt-2 text-sm text-zinc-500 italic">{exp.tech}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Column */}
      <div className="relative">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
          Awards
        </h2>
        <div className="relative">
          <svg
            className="absolute top-0 left-0 h-full w-2"
            viewBox="0 0 20 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleYellowAward" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="animated-stop" stopColor="#8b5cf6" />
                <stop offset="50%" className="animated-stop" stopColor="#facc15" />
                <stop offset="100%" className="animated-stop" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path
              d="M10 0 Q 0 20 10 40 Q 20 60 10 80 Q 0 100 10 120 Q 20 140 10 160 Q 0 180 10 200 Q 20 220 10 240 Q 0 260 10 280 Q 20 300 10 320 Q 0 340 10 360 Q 20 380 10 400 Q 0 420 10 440 Q 20 460 10 480 Q 0 500 10 520"
              stroke="url(#purpleYellowAward)"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          {sortedAwards.map((award) => (
            <div key={award.id} className="mb-6 ml-8 relative">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-5 top-1.5 z-10"></div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl shadow-sm relative z-20">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <span>{award.emoji}</span> {award.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-2">
                  {award.org} — {award.date}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RightArrow destination="contact"/>
    </div>
  );
}