import { Play } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectsSectionProps = {
  projects: Project[]
  onSelect: (project: Project) => void
}

const projectBackground = (project: Project) => {
  if (project.title === 'Chat with PDF') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%), url('/chat.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'DevSecOps Project') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%), url('/Netflix.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'Rate-My-Professor AI') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%), url('/RMP.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'Beach Bank') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%), url('/BeachBank.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'MERN Stack App') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.15) 100%), url('/mern.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'The Pokemon Game') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0) 100%), url('/pokemon.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  return { background: project.thumbnail }
}

const ProjectsSection = ({ projects, onSelect }: ProjectsSectionProps) => (
  <section id="projects" className="scroll-mt-24 py-12 px-4 md:px-12">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
    <p className="text-sm text-gray-400 mb-4">Because ideas deserve execution </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-visible">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative h-48 sm:h-52 md:h-56 lg:h-60 rounded-lg overflow-hidden transform transition-all duration-200 ease-out hover:scale-105 hover:z-10 border border-neutral-800 hover:border-red-600"
          style={projectBackground(project)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 group-hover:opacity-90 transition" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-white drop-shadow line-clamp-2">{project.title}</h3>

            <div className="pointer-events-none transition-[transform,opacity] duration-200 delay-100 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
              <div className="bg-black/75 backdrop-blur rounded-lg p-3 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-gray-200 text-sm truncate">{project.subtitle}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <button
                    className="pointer-events-auto inline-flex items-center gap-2 bg-white/90 text-black/90 text-xs font-semibold px-3 sm:px-4 py-2 rounded-full shadow-md hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black transition"
                    onClick={() => onSelect(project)}
                  >
                    <Play size={14} fill="currentColor" />
                    <span className="whitespace-nowrap hidden sm:inline">More info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ProjectsSection

