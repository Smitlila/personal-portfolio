import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const ContactSection = () => (
  <section id="contact" className="scroll-mt-24 py-20 px-4 md:px-12 bg-neutral-900">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
      <p className="text-xl text-gray-400 mb-12">
        Ready to collaborate on your next project or discuss opportunities
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <a
          href="mailto:smitlila07@gmail.com"
          className="bg-black border border-neutral-700 rounded p-6 hover:border-red-600 transition flex items-center justify-center space-x-3"
        >
          <Mail className="text-red-600" size={24} />
          <span>smitlila07@gmail.com</span>
        </a>
        <a
          href="tel:5629120591"
          className="bg-black border border-neutral-700 rounded p-6 hover:border-red-600 transition flex items-center justify-center space-x-3"
        >
          <Phone className="text-red-600" size={24} />
          <span>(562) 912-0591</span>
        </a>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Smitlila"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black border border-neutral-700 rounded-full p-4 hover:border-red-600 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/smitlila"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black border border-neutral-700 rounded-full p-4 hover:border-red-600 transition"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </div>
  </section>
)

export default ContactSection

