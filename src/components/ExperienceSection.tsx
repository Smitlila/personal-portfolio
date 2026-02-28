import { Play } from 'lucide-react'
import type { Experience } from '../data/experiences'

type ExperienceSectionProps = {
  experiences: Experience[]
  onSelect: (exp: Experience) => void
}

const experienceBackground = (company: string, fallback: string) => {
  if (company === 'Amazon Web Services') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%), url('/aws2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (company === 'Headstarter AI') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%), url('/HeadstarterAI.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (company === 'California State University, Long Beach') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%), url('/CSULB.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  return { background: fallback }
}

const ExperienceSection = ({ experiences, onSelect }: ExperienceSectionProps) => (
  <section id="experience" className="scroll-mt-24 py-12 px-4 md:px-12">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Experience</h2>
    <div className="space-y-3 overflow-visible">
      <p className="text-sm text-gray-400">Because you liked my work</p>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="group relative w-full h-48 sm:h-52 md:h-56 lg:h-60 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-600 shadow-lg transition duration-200 ease-out transform-gpu hover:scale-105 hover:z-20"
            style={experienceBackground(exp.company, exp.thumbnail)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition" />
            <div className="absolute inset-0 p-3 text-left flex flex-col gap-2">
              <div className="text-white text-lg font-bold leading-tight drop-shadow line-clamp-2">{exp.company}</div>

              <div className="absolute bottom-3 left-3 right-3 pointer-events-none transition-[transform,opacity] duration-200 delay-100 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
                <div className="bg-black/75 backdrop-blur rounded-lg p-4 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-200 text-sm truncate">{exp.title}</div>
                    <div className="text-gray-300 text-xs truncate">{exp.location}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      className="pointer-events-auto inline-flex items-center gap-2 bg-white/90 text-black/90 text-xs font-semibold px-3 sm:px-4 py-2 rounded-full shadow-md hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black transition"
                      onClick={() => onSelect(exp)}
                    >
                      <Play size={14} fill="currentColor" />
                      <span className="whitespace-nowrap hidden sm:inline">More info</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 transition-opacity duration-150 group-hover:opacity-0 group-focus-visible:opacity-0">
                <span className="inline-block bg-red-600 text-white text-[11px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                  {exp.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ExperienceSection

