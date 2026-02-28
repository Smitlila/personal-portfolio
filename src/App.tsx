import { useEffect, useState } from 'react'
import { experiences } from './data/experiences'
import type { Experience } from './data/experiences'
import { projects } from './data/projects'
import type { Project } from './data/projects'
import Header from './components/Header'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import ExperienceModal from './components/ExperienceModal'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <ExperienceSection experiences={experiences} onSelect={setSelectedExperience} />
      <ProjectsSection projects={projects} onSelect={setSelectedProject} />
      <SkillsSection />
      <ContactSection />
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedExperience && (
        <ExperienceModal exp={selectedExperience} onClose={() => setSelectedExperience(null)} />
      )}
      </div>
  )
}

export default App
