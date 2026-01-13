import { Play, Info } from 'lucide-react'

const Hero = () => (
  <section id="home" className="relative min-h-screen pt-24 sm:pt-28 pb-12">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-red-900 to-black opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-7xl w-full px-4 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center text-left">
        <div className="max-w-3xl space-y-4 md:space-y-5 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Software Engineer
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            AI Enthusiast | Cloud Developer | Full-Stack Engineer
          </p>
          <p className="text-base sm:text-lg text-gray-400">Building scalable AI and cloud-powered software solutions.</p>
          <p className="text-base sm:text-lg text-gray-400 mb-2">Focused on learning, impact, and real-world engineering.</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 sm:gap-0">
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded hover:bg-opacity-80 transition font-semibold"
            >
              <Play size={20} fill="black" />
              <span>View Projects</span>
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center bg-gray-600 bg-opacity-70 px-3 py-3 rounded hover:bg-opacity-50 transition font-semibold"
            >
              <Info size={20} aria-label="Contact" />
            </a>
          </div>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Education</p>
              <p className="font-semibold">CSULB - Computer Science</p>
              <p className="text-gray-400">GPA: 3.6 | Dec 2025</p>
            </div>
            <div>
              <p className="text-gray-400">Certifications</p>
              <p className="font-semibold">AWS Cloud Practitioner</p>
              <p className="text-gray-400">MERN Full-Stack</p>
            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-red-900/40 bg-gradient-to-b from-black/40 via-black/10 to-black/40 max-w-[460px] w-full">
            <div className="relative aspect-[3/4]">
              <img src="/aws-portrait.jpg" alt="Smit at AWS" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                Featured
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-gray-200 bg-black/50 px-3 py-2 rounded">
                Smit Lila
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero

