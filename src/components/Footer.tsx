const Footer = () => (
  <footer className="bg-black py-8 px-4 md:px-12 border-t border-neutral-800">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">© 2025 Smit Lila. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#home" className="text-gray-500 hover:text-white text-sm">
            Home
          </a>
          <a href="#experience" className="text-gray-500 hover:text-white text-sm">
            Experience
          </a>
          <a href="#projects" className="text-gray-500 hover:text-white text-sm">
            Projects
          </a>
          <a href="#contact" className="text-gray-500 hover:text-white text-sm">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

