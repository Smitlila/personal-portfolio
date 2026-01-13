import { Github, Linkedin } from 'lucide-react'

type HeaderProps = {
  scrolled: boolean
}

const Header = ({ scrolled }: HeaderProps) => (
  <header
    className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
    }`}
  >
    <div className="flex items-center justify-between px-4 md:px-12 py-4">
      <div className="flex items-center space-x-8">
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="Smit Lila" className="h-10 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#experience" className="hover:text-gray-300 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-300 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/Smitlila"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/smitlila"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </header>
)

export default Header

