import { X } from 'lucide-react'
import type { Experience } from '../data/experiences'

type ExperienceModalProps = {
  exp: Experience
  onClose: () => void
}

const ExperienceModal = ({ exp, onClose }: ExperienceModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
    onClick={onClose}
  >
    <div
      className="bg-neutral-900 rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neutral-800"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-56 md:h-72 bg-black">
        <img
          src={
            exp.company === 'Amazon Web Services'
              ? '/aws2.jpg'
              : exp.company === 'Headstarter AI'
              ? '/HeadstarterAI.jpg'
              : exp.company === 'California State University, Long Beach'
              ? '/CSULB.jpg'
              : ''
          }
          alt={exp.company}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 cursor-pointer"
          aria-label="Close experience details"
        >
          <X className="text-white" size={22} />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-sm text-gray-200 mb-1">{exp.period}</p>
          <h3 className="text-3xl font-bold text-white mb-1">{exp.company}</h3>
          <p className="text-lg text-gray-200">{exp.title}</p>
          <p className="text-sm text-gray-300">{exp.location}</p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-5">
        <div className="space-y-3">
          {exp.highlights.map((h) => (
            <div key={h} className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">▸</span>
              <p className="text-gray-300 leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ExperienceModal

