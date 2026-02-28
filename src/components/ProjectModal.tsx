import { Github, X } from 'lucide-react'
import type { Project } from '../data/projects'

type ModalProps = {
  project: Project
  onClose: () => void
}

const projectRepoLink = (title: string) => {
  if (title === 'Rate-My-Professor AI') return 'https://github.com/Smitlila/Rate-My-Professor-AI'
  if (title === 'DevSecOps Project') return 'https://github.com/Dhrumit26/Netflix-DevOps'
  if (title === 'Beach Bank') return 'https://github.com/Dhrumit26/BeachBank'
  if (title === 'MERN Stack App') return 'https://github.com/Smitlila/SnapSpot---The-MERN-App'
  if (title === 'The Pokemon Game') return 'https://github.com/Smitlila/The_Pokemon_Game'
  return null
}

const projectHeroBackground = (project: Project) => {
  if (project.title === 'Chat with PDF') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%), url('/chat.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'DevSecOps Project') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%), url('/Netflix.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'Rate-My-Professor AI') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%), url('/RMP.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'Beach Bank') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%), url('/BeachBank.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'MERN Stack App') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%), url('/mern.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  if (project.title === 'The Pokemon Game') {
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%), url('/pokemon.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  return { background: project.thumbnail }
}

const ProjectModal = ({ project, onClose }: ModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
    onClick={onClose}
  >
    <div
      className="bg-neutral-900 rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-48 md:h-64" style={projectHeroBackground(project)}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 cursor-pointer"
        >
          <X className="text-white" size={24} />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 md:gap-3">
          <h2 className="text-4xl font-bold text-white mb-1">{project.title}</h2>
          <p className="text-xl text-gray-300">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {projectRepoLink(project.title) && (
              <a
                href={projectRepoLink(project.title)!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 bg-black/60 px-3 py-2 rounded-full hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black transition w-fit"
              >
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
            )}
            {project.title === 'Beach Bank' && (
              <a
                href="https://beachbank.netlify.app/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-600 px-3 py-2 rounded-full shadow hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black transition w-fit"
              >
                <span>Live Site</span>
              </a>
            )}
            {project.title === 'Rate-My-Professor AI' && (
              <a
                href="https://ai-rate-my-prof-one.vercel.app/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-600 px-3 py-2 rounded-full shadow hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black transition w-fit"
              >
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-green-500 font-semibold">Completed {project.date}</span>
        </div>
        <p className="text-gray-300 text-lg mb-6">{project.description}</p>
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="bg-neutral-800 text-white px-3 py-1 rounded text-sm border border-neutral-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectModal

